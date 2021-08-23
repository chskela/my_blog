---
title: "Next.js 11.1"
excerpt: "Улучшена производительность сборки во всем стеке с помощью Next.js 11.1"
category: "News"
tags: ["React", "JavaScript", "Next.js"]
date: "2021-08-23"
url: "nextjs-11-1.png"
author:
  name: Алексей Чистяков
  picture: "/assets/blog/authors/jj.jpeg"
isFeatured: true
isPicks: true
---

# Next.js 11.1

Улучшена производительность сборки во всем стеке с помощью Next.js 11.1, включая:

- [**Security Patch**](#security-patch): важное обновление для предотвращения потенциальных открытых перенаправлений.
- [**ES Modules Support**](#es-modules-support): С экспериментальным флагом.
- [**Rust-based Tooling**](#adopting-rust-based-swc): Интеграция SWC для замены инструментов JS (Babel и Terser).
- [**Faster Data Fetching**](#builds--data-fetching): В 2 раза быстрее выборка данных с помощью HTTP `keep-alive` при предварительном рендеринге.
- [**Faster Source Maps**](#source-maps): Сборка на 70% быстрее и на 67% меньше памяти при использовании source maps.
- [**ESLint Integration Improvements**](#eslint-improvements): Более доступные настройки по умолчанию и линтинг на предмет опечаток.
- [`next/image` **Improvements**](#nextimage-improvements): Дополнительное использование Sharp, лучшая поддержка `next export`.

## Security Patch

Команда Next.js работает с исследователями безопасности и аудиторами для предотвращения уязвимостей. Было обнаружено открытое перенаправление с помощью `pages/_error.js`.

Данная проблема не причинила прямого вреда пользователям, но могла позволить фишинговые атаки путем перенаправления на домен злоумышленника с доверенного домена. Установлен патч в Next.js 11.1, предотвращающий это открытое перенаправление, а также [регрессионные тесты безопасности](https://github.com/vercel/next.js/blob/canary/test/integration/repeated-slashes/test/index.test.js).

Для получения дополнительной информации, можно прочитать [общедоступную CVE](https://github.com/vercel/next.js/security/advisories/GHSA-vxf5-wxwp-m7g9). Рекомендуется обновить Next.js до последней версии, чтобы повысить общую безопасность вашего приложения.

**Примечание**: Приложения Next.js, размещенные на [Vercel](https://vercel.com/), **не подвержены этой уязвимости** (и, следовательно, никаких действий для ваших приложений Next.js, работающих на Vercel, **не требуется**.

## ES Modules Support

Мы работаем над расширенной поддержкой [ES Modules](https://nodejs.org/docs/latest/api/esm.html) в Next.js. Начиная с Next.js 11.1, теперь вы можете импортировать пакеты npm с помощью ES Modules (например, `'type'`: `'module'` в их `package.json`) с экспериментальным флагом.

```jsx
// next.config.js
module.exports = {
  // Prefer loading of ES Modules over CommonJS
  experimental: { esmExternals: true },
};
```

Поддержка ES Modules включает обратную совместимость для поддержки предыдущего поведения импорта CommonJS. В Next.js 12 `esmExternals: true` станет значением по умолчанию. Можно попробовать новую опцию и [оставить отзыв на GitHub Discussions](https://github.com/vercel/next.js/discussions/27876), если у вас есть предложения по улучшению.

## Переход на SWC на ​​основе Rust

Продолжается работа над интеграцией [SWC](https://swc.rs/), сверхбыстрого компилятора JavaScript и TypeScript, написанного на Rust, который заменит два набора инструментов, используемых в Next.js: Babel для отдельных файлов и Terser для минимизации выходных пакетов.

В рамках замены Babel на SWC, переносятся все пользовательские преобразования кода, используемые Next.js, в преобразования SWC, написанные на Rust, чтобы максимизировать производительность. Например, проверяется неиспользуемый код внутри `getStaticProps`, `getStaticPaths` и `getServerSideProps`.

В рамках замены Terser продолжаются работы над тем, чтобы минификатор SWC имел аналогичные результаты с Terser, при этом значительно улучшая производительность и распараллеливание минификации.

В ранних тестах предыдущие преобразования кода с использованием Babel уменьшилось с **~500мс до ~10мс**, а минимизация кода от Terser уменьшилось с **~250мс до ~30мс** с использованием SWC. В целом это привело к удвоению скорости сборки.

## Улучшенная производительность

### Builds & Data Fetching

При использовании `next build` и выполнении многочисленных HTTP-запросов **повысилась производительность в среднем примерно в 2 раза**. Например, если вы используете `getStaticProps` и `getStaticPaths` для получения контента из Headless CMS, вы должны увидеть заметно более быстрые сборки.

Next.js автоматически полифицирует [node-fetch](https://nextjs.org/docs/basic-features/supported-browsers-features#polyfills) и теперь по умолчанию включает [HTTP Keep-Alive](https://en.wikipedia.org/wiki/HTTP_persistent_connection). Согласно [внешним тестам](https://github.com/Ethan-Arrowood/undici-fetch/blob/main/benchmarks.md#fetch), это должно ускорить предварительный рендеринг примерно **в 2 раза**.

Чтобы отключить HTTP Keep-Alive для определенных вызовов `fetch()`, вы можете добавить опцию agent:

```jsx
import { Agent } from "https";
const url = "<https://example.com>";
const agent = new Agent({ keepAlive: false });
fetch(url, { agent });
```

Чтобы переопределить все вызовы `fetch()` глобально, вы можете использовать `next.config.js`:

```jsx
module.exports = {
  httpAgentOptions: {
    keepAlive: false,
  },
};
```

### Source Maps

Включение source maps браузера в приложения Next.js теперь снижает затраты на производительность примерно на 70% и затраты памяти примерно на 67% благодаря оптимизации webpack и обработки source map.

Это влияет только на приложения Next.js с `productionBrowserSourceMaps: true` в их файле `next.config.js`. В Next.js 11.1 время сборки увеличивается только на 11%, если включены source maps.

Также [повысилась производительность](https://github.com/vercel/next.js/issues/26588#issuecomment-894329188) загрузки source maps с помощью [плагина Sentry Next.js](https://docs.sentry.io/platforms/javascript/guides/nextjs/).

## Улучшения ESLint

Next.js 11 представяет встроенную [поддержку ESLint](https://nextjs.org/docs/basic-features/eslint) через `next lint`.

### Правила доступности по умолчанию

Улучшенные правила доступности теперь включены по умолчанию, предотвращая проблемы со свойствами ARIA, которые не соответствуют друг другу, и использование несуществующих атрибутов ARIA. Эти правила будут предупреждать по умолчанию.

- [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)
- [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md?rgh-link-date=2021-06-04T02%3A10%3A36Z)

### Распространенные опечатки

Линтинг для типичных опечаток в `getStaticProps`, `getStaticPaths` и `getServerSideProps` теперь будет предупреждать по умолчанию. Это поможет в случаях, когда из-за небольшой опечатки не вызывается выборка данных. Например, `getstaticprops` или `getStaticprops` покажут предупреждение.

## Улучшения `next/image`

### Оптимизация изображения

По умолчанию Next.js использует WebAssembly для выполнения оптимизации изображения, которая компенсирует время установки пакета Next.js, поскольку он значительно меньше и не имеет этапа после установки. С Next.js 11.1 вы можете дополнительно установить `sharp`, который оптимизирует время создания некэшированных изображений за счет более медленной установки.

Оптимизатор изображений на основе WebAssembly был обновлен для поддержки чипов ARM, таких как Apple M1 с Node.js 16.

Встроенный оптимизатор изображений теперь автоматически определяет тип содержимого внешнего изображения на основе содержимого тела ответа. Это позволяет Next.js оптимизировать изображения, размещенные на AWS S3, когда заголовок ответа - `Content-Type: application/octet-stream`.

### Ленивая генерация для placeholder="blur" в Development

Во время `next dev` [статический импорт изображений](https://nextjs.org/docs/basic-features/image-optimization#image-imports) с `placeholder = "blur"` теперь выполняется автоматическая отложенная генерация, что сокращает время запуска сервера разработки для приложений с множеством импортируемых статических изображений:

```jsx
import Image from "next/image";
import author from "../public/me.png";

export default function Home() {
  return (
    // placeholder для этого изображения генерируется ленивым способом во время разработки.
    <Image src={author} alt="Picture of the author" placeholder="blur" />
  );
}
```

### Другие улучшения изображения

- **Изображения, которые были ранее загружены, больше не загружаются с ленивой загрузкой**: когда изображение было загружено на страницу ранее, либо через клиентскую навигацию, либо загружая его в другом месте страницы, Next.js теперь автоматически пропускает отложенную загрузку, чтобы избежать quick flash перед показом изображения.
- **Поддержка пользовательских загрузчиков изображений с `next export`**: `next/image` теперь поддерживает использование `next export` вместе с любой [сторонней службой оптимизации изображений](https://nextjs.org/docs/basic-features/image-optimization#loader). Вы можете настроить `images.loader: "custom"` в `next.config.js`, если намереваетесь предоставить [опцию пользовательского `loader`](https://nextjs.org/docs/api-reference/next/image#loader) для `next/image`.
- **Новое событие для завершения загрузки изображений**: на основе отзывов пользователей мы добавили новое свойство `onLoadingComplete` в `next/image`. Это позволяет зарегистрировать callback, который вызывается после полной загрузки изображения.
- **Конфигурация TTL кэша изображений по умолчанию (время жизни)**: теперь вы можете настроить `images.minimumCacheTTL` в `next.config.js`, чтобы изменить TTL кэша по умолчанию для оптимизированных изображений. По возможности рекомендуется использовать [`import` статических изображений](https://nextjs.org/docs/basic-features/image-optimization#image-imports), так как они автоматически используют максимальное значение TTL, поскольку хэш содержимого изображения находится в URL-адресе.

Источник: [Next.js 11.1](https://nextjs.org/blog/next-11-1)
