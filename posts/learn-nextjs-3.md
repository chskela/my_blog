---
title: "Изучаем Next.js - часть 3"
excerpt: "Next.js дает вам лучший экспирианс со всеми функциями, необходимыми для разработки: гибридный статический и серверный рендеринг, поддержка TypeScript, интеллектуальное связывание, предварительная выборка маршрута и многое другое."
category: "The React Framework"
tags: ["React", "JavaScript", "Guides"]
date: "2021-08-21"
url: "pexels-markus-spiske-965345.jpg"
author:
  name: Алексей Чистяков
  picture: "/assets/blog/authors/jj.jpeg"
isFeatured: false
isPicks: false
---

## Assets, Metadata и CSS

У второй добавленной страницы в настоящее время нет стиля. Давайте добавим CSS для стилизации страницы.

Next.js имеет встроенную поддержку [CSS](https://nextjs.org/docs/basic-features/built-in-css-support) и [Sass](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support). В этом курсе мы будем использовать CSS.

В этом уроке также будет рассказано о том, как Next.js обрабатывает статические ресурсы, такие как изображения, и метаданные страницы, такие как тег `<title>`.

## Assets

Next.js может обслуживать **статические ресурсы**, такие как изображения, в [каталоге `public`](https://nextjs.org/docs/basic-features/static-file-serving) **верхнего уровня**. На файлы внутри `public` можно ссылаться из корня приложения, как на `pages`.

Каталог `public` также полезен для файла robots.txt, Google Site Verification и любых других статических ресурсов. Ознакомьтесь с документацией по [обслуживанию статических файлов](https://nextjs.org/docs/basic-features/static-file-serving), чтобы узнать больше.

### Загрузите изображение вашего профиля

Во-первых, давайте получим изображение вашего профиля.

- **Загрузите** изображение своего профиля в формате `.jpg` (или [используйте этот файл](https://github.com/vercel/next-learn-starter/blob/master/basics-final/public/images/profile.jpg)).
- Создайте каталог `images` внутри [каталога `public`](https://nextjs.org/docs/basic-features/static-file-serving).
- Сохраните изображение как `profile.jpg` в каталоге `public/images`.
- Размер изображения может составлять около 400 на 400 пикселей.
- Вы можете удалить неиспользуемый файл логотипа SVG в каталоге `public`.

### Неоптимизированное изображение

Используя обычный HTML, вы можете добавить изображение своего профиля следующим образом:

```jsx
<img src="/images/profile.jpg" alt="Your Name" />
```

Однако это означает, что вам придется вручную обрабатывать:

- Обеспечение адаптивности вашего изображения на экранах разных размеров.
- Оптимизация изображений с помощью стороннего инструмента или библиотеки.
- Загрузка изображений только при входе в область просмотра.

Вместо этого Next.js предоставляет компонент `Image` из коробки, чтобы справиться с этим за вас.

### Компонент Image и оптимизация изображения

[`next/image`](https://nextjs.org/docs/api-reference/next/image) - это расширение HTML элемента `<img>`.

Next.js также по умолчанию поддерживает оптимизацию изображений. Это позволяет изменять размер, оптимизировать и обслуживать изображения в современных форматах, таких как [WebP](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp), если поддерживает браузер. Это позволяет избежать отправки больших изображений на устройства с меньшим окном просмотра. Он также позволяет Next.js автоматически принимать будущие форматы изображений и передавать их браузерам, поддерживающим эти форматы.

Автоматическая оптимизация изображения работает с любым источником изображения. Даже если изображение размещено во внешнем источнике данных, таком как CMS, его все равно можно оптимизировать.

### Использование компонента Image

Вместо оптимизации изображений во время сборки Next.js оптимизирует изображения по запросу, когда пользователи запрашивают их. В отличие от генераторов статических сайтов и статических решений, время сборки не увеличивается, независимо от того, отправлено ли 10 изображений или 10 миллионов изображений.

По умолчанию изображения загружаются 'лениво'. Это означает, что скорость вашей страницы не снижается для изображений за пределами области просмотра. Изображения загружаются по мере их прокрутки в окне просмотра.

Изображения всегда отображаются таким образом, чтобы избежать [кумулятивного сдвига макета](https://web.dev/cls/), [ключевого элемента сети](https://web.dev/vitals/#core-web-vitals), который Google собирается [использовать для ранжирования в поиске](https://webmasters.googleblog.com/2020/05/evaluating-page-experience.html).

Вот пример использования [`next/image`](https://nextjs.org/docs/api-reference/next/image.md) для отображения изображения нашего профиля. Свойства `height` и `width` должны соответствовать желаемому размеру рендеринга с соотношением сторон, идентичным исходному изображению.

```jsx
import Image from "next/image";

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Путь к файлу изображения
    height={144} // Желаемый размер с правильным соотношением сторон
    width={144} // Желаемый размер с правильным соотношением сторон
    alt="Your Name"
  />
);
```

> Чтобы узнать больше об автоматической оптимизации изображений, ознакомьтесь с [документацией](https://nextjs.org/docs/basic-features/image-optimization).

> Чтобы узнать больше о компоненте `Image`, ознакомьтесь со [справкой по API для `next/image`](https://nextjs.org/docs/api-reference/next/image).

## Metadata

Что, если бы мы хотели изменить метаданные страницы, такие как HTML-тег `<title>`?

`<title>` является частью тега `<head>` HTML, поэтому давайте углубимся в то, как мы можем изменить тег `<head>` на странице Next.js.

Откройте в редакторе `pages/index.js` и найдите следующие строки:

```jsx
<Head>
  <title>Create Next App</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
```

Обратите внимание, что `<Head>` используется вместо строчного `<head>`. `<Head>` - это React компонент, встроенный в Next.js. Это позволяет вам изменять `<head>` страницы.

Вы можете импортировать компонент `Head` из следующего [`next/head`](https://nextjs.org/docs/api-reference/next/head).

### Добавление `Head` в `first-post.js`

Откройте файл `pages/posts/first-post.js` и добавьте импорт для `Head` из [`next/head`](https://nextjs.org/docs/api-reference/next/head) в начало файла:

```jsx
import Head from "next/head";
```

Затем обновите экспортированный компонент `FirstPost`, включив в него компонент `Head`. А пока мы добавим только тег `title`:

```jsx
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```

Попробуйте получить доступ к [`http://localhost:3000/posts/first-post`](http://localhost:3000/posts/first-post). На вкладке браузера теперь должно быть написано «First Post». Используя инструменты разработчика вашего браузера, вы должны увидеть, что тег `title` добавлен в `<head>`.

> Чтобы узнать больше о компоненте `Head`, ознакомьтесь со [справкой по API для `next/head`](https://nextjs.org/docs/api-reference/next/head).

> Если вы хотите настроить тег `<html>`, например, добавить атрибут `lang`, вы можете сделать это, создав файл `pages/_document.js`. Дополнительные сведения смотрите в [документации по пользовательскому `Document`](https://nextjs.org/docs/advanced-features/custom-document).

## CSS стили

Теперь поговорим о **стилях CSS**.

Как видите, на нашей индексной странице ([http://localhost:3000](http://localhost:3000)) уже есть несколько стилей. Если вы посмотрите на `pages/index.js`, вы увидите такой код:

```jsx
<style jsx>{`
  …
`}</style>
```

На этой странице используется библиотека [styled-jsx](https://github.com/vercel/styled-jsx). Это библиотека «CSS-in-JS» - она ​​позволяет писать CSS в компоненте React, при этом стили CSS будут ограничены (другие компоненты не затронуты).

Next.js имеет встроенную поддержку [styled-jsx](https://github.com/vercel/styled-jsx), но вы также можете использовать другие популярные библиотеки CSS-in-JS, такие как [styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components) или [emotion](https://github.com/vercel/next.js/tree/canary/examples/with-emotion).

### Написание и импорт CSS

Next.js имеет [встроенную поддержку CSS](https://nextjs.org/docs/basic-features/built-in-css-support) и Sass, которая позволяет импортировать файлы `.css` и `.scss`.

Также поддерживается использование популярных библиотек CSS, таких как [Tailwind CSS](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).

В этом уроке мы поговорим о том, как писать и импортировать файлы CSS в Next.js. Мы также поговорим о встроенной поддержке Next.js [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) и [Sass](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support).

## Layout компонент

Во-первых, давайте создадим **Layout** компонент, который будет использоваться на всех страницах.

- Создайте каталог верхнего уровня под названием `components`.
- Внутри `components` создайте файл с именем `layout.js` со следующим содержимым:

```jsx
export default function Layout({ children }) {
  return <div>{children}</div>;
}
```

Затем откройте `pages/posts/first-post.js`, добавьте импорт для компонента `Layout` и сделайте его самым внешним компонентом:

```jsx
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
```

### Добавление CSS

Теперь давайте добавим несколько стилей в компонент `Layout`. Для этого мы будем использовать [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css), которые позволяют импортировать файлы CSS в компонент React.

Создайте файл с именем `components/layout.module.css` со следующим содержимым:

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}
```

> **Важно:** чтобы использовать [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css), имя файла CSS должно заканчиваться на `.module.css`.

Чтобы использовать этот класс `container` внутри `components/layout.js`, вам необходимо:

- Импортируйте файл CSS и присвойте ему имя, например `styles`.
- Используйте `styles.container` в качестве `className`.

Откройте `components/layout.js` и замените его содержимое следующим:

```jsx
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
```

Если вы сейчас перейдете по адресу [http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post), вы должны увидеть, что текст теперь находится внутри центрированного контейнера:

![Layout](layout.png)

### Автоматически генерирует уникальные имена классов

Теперь, если вы посмотрите на HTML в инструментах разработчика своего браузера, вы заметите, что `div`, отображаемый компонентом `Layout`, имеет имя класса, которое выглядит как `layout_container __...`:

![Devtools](devtools.png)

Вот что делают [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css): они автоматически генерируют уникальные имена классов. Пока вы используете CSS Modules, вам не нужно беспокоиться о конфликтах имен классов.

Кроме того, функция разделения кода Next.js работает и с [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css). Это обеспечивает загрузку минимального количества CSS для каждой страницы. Это приводит к меньшим размерам пакетов.

[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) извлекаются из пакетов JavaScript во время сборки и генерируют файлы `.css`, которые автоматически загружаются Next.js.

## Глобальные стили

[CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) полезны для стилей на уровне компонентов. Но если вы хотите, чтобы на **каждой странице** загружался какой-то CSS, Next.js также поддерживает это.

Чтобы загрузить [глобальные файлы CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet), создайте файл с именем [`pages /_app.js`](https://nextjs.org/docs/advanced-features/custom-app) со следующим содержимым:

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Этот компонент `App` является компонентом верхнего уровня, который будет общим для всех страниц. Вы можете использовать этот компонент `App` для сохранения состояния, например, при переходе между страницами.

### Перезагрузите сервер разработки.

**Важно:** Вам необходимо перезапустить сервер разработки при добавлении [`pages /_app.js`](https://nextjs.org/docs/advanced-features/custom-app). Нажмите Ctrl + c, чтобы остановить сервер и запустить:

```bash
npm run dev
```

### Добавление Global CSS

В Next.js вы можете добавлять [глобальные файлы CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet), импортируя их в [`pages /_app.js`](https://nextjs.org/docs/advanced-features/custom-app). Вы **не можете** импортировать глобальный CSS в другое место.

Причина того, что [глобальный CSS](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) не может быть импортирован за пределы `pages/_app.js`, заключается в том, что глобальный CSS влияет на все элементы на странице.

Если бы вы перешли с домашней страницы на `/posts/first-post`, глобальные стили с домашней страницы непреднамеренно повлияли бы на `/posts/first-post`.

Вы можете разместить глобальный файл CSS где угодно и использовать любое имя. Итак, давайте сделаем следующее:

- Создайте каталог `styles` верхнего уровня и создайте внутри `global.css`.
- Добавьте следующий контент в `styles/global.css`. Он сбрасывает некоторые стили и меняет цвет тега `a`:

```css
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

* {
  box-sizing: border-box;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  display: block;
}
```

Наконец, откройте `pages/_app.js` и добавьте импорт CSS-файла следующим образом:

```jsx
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

Теперь, если вы перейдете по адресу [http://localhost:3000/posts/first-post](http://localhost:3000/posts/first-post), вы увидите, что применены стили:
global-styles.png

![Global styles](global-styles.png)

> **Если это не помогло:** не забудьте перезапустить сервер разработки при добавлении `pages/_app.js`.

## Polishing Layout

Пока что мы добавили только минимальный код React и CSS, чтобы проиллюстрировать такие концепции, как [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css). Прежде чем мы перейдем к следующему уроку об [извлечении данных](https://nextjs.org/docs/basic-features/data-fetching), давайте доработаем стиль и код нашей страницы.

### Обновите `components/layout.module.css`

Сначала откройте `components/layout.module.css` и замените его содержимое следующими более отточенными стилями для макета и изображения профиля:

```css
.container {
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backToHome {
  margin: 3rem 0 0;
}
```

### Создайте `styles/utils.module.css`

Во-вторых, давайте создадим набор служебных классов CSS для типографики и другие, которые будут полезны для нескольких компонентов.

Давайте добавим новый файл CSS с именем `styles/utils.module.css` со следующим содержанием:

```css
.heading2Xl {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingXl {
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
}

.headingLg {
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
}

.headingMd {
  font-size: 1.2rem;
  line-height: 1.5;
}

.borderCircle {
  border-radius: 9999px;
}

.colorInherit {
  color: inherit;
}

.padding1px {
  padding-top: 1px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.listItem {
  margin: 0 0 1.25rem;
}

.lightText {
  color: #666;
}
```

### Обновить `components/layout.js`

В-третьих, откройте файл `components/layout.js` и замените его содержимое следующим кодом, **изменив** `Your Name` на настоящее имя:

```jsx
import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
```

Вот что нового:

- теги `meta` (например, `og:image`), которые используются для описания содержимого страницы.
- Prop `home`, который регулирует размер заголовка и изображения.
- Ссылка «Back to home» внизу, если `home === false`.
- Добавлены изображения с `next/image`, которые предварительно загружены с атрибутом [priority](https://nextjs.org/docs/api-reference/next/image#priority).

### Обновить `pages/index.js`

Наконец, давайте обновим домашнюю страницу.

Откройте `pages/index.js` и замените его содержимое на:

```jsx
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
```

Затем замените `[Your Self Introduction]` своим представлением о себе. Вот пример с профилем автора:

![Example](example.png)

Вот и все! Теперь у нас есть доработанный макет, чтобы перейти к урокам по извлечению данных.

Прежде чем мы завершим этот урок, давайте поговорим о некоторых полезных приемах, связанных с поддержкой CSS в Next.js.

## Styling Tips

Вот несколько полезных советов.

> Вы можете **просто прочитать** следующие разделы. Не нужно вносить изменения в наше приложение!

### Использование библиотеки `classnames` для переключения классов

[`classnames`](https://github.com/JedWatson/classnames) - это простая библиотека, которая позволяет легко переключать имена классов. Вы можете установить его, используя `npm install classnames` или `yarn add classnames`.

Пожалуйста, ознакомьтесь с его [документацией](https://github.com/JedWatson/classnames) для получения более подробной информации, но вот базовое использование:

- Предположим, вы хотите создать компонент `Alert`, который принимает `type`, который может быть `'success'` или `'error'`.
- Если `'success'`, вы хотите, чтобы цвет текста был зеленым. Если `'error'`, вы хотите, чтобы цвет текста был красным.

Сначала вы можете написатьCSS module (например, `alert.module.css`) следующим образом:

```css
.success {
  color: green;
}
.error {
  color: red;
}
```

И использовать `classnames`:

```jsx
import styles from "./alert.module.css";
import cn from "classnames";

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
```

### Настройка PostCSS Config

Из коробки, без настройки, Next.js компилирует CSS с помощью [PostCSS](https://postcss.org/).

Чтобы настроить конфигурацию PostCSS, вы можете создать файл верхнего уровня с именем [`postcss.config.js`](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins). Это полезно, если вы используете такие библиотеки, как [Tailwind CSS](https://tailwindcss.com/).

Вот шаги, чтобы добавить [Tailwind CSS](https://tailwindcss.com/). Мы рекомендуем использовать `postcss-preset-env` и `postcss-flexbugs-fixes`, чтобы соответствовать [поведению Next.js по умолчанию](https://nextjs.org/docs/advanced-features/customizing-postcss-config#default-behavior). Сначала установите пакеты:

```bash
npm install tailwindcss postcss-preset-env postcss-flexbugs-fixes
```

Затем напишите для [`postcss.config.js`](https://nextjs.org/docs/advanced-features/customizing-postcss-config#customizing-plugins) следующее:

```jsx
module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
```

Мы также рекомендуем [удалить неиспользуемый CSS](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css), указав параметр `purge` в `tailwind.config.js`:

```jsx
// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  // ...
};
```

### Использование Sass

По умолчанию Next.js позволяет импортировать [Sass](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support) с использованием расширений `.scss` и `.sass`. Вы можете использовать Sass на уровне компонентов через [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) и расширение `.module.scss` или `.module.sass`.

Прежде чем вы сможете использовать встроенную поддержку Sass в Next.js, обязательно установите `sass`:

```bash
npm install sass
```

### На этом урок закончен!

Чтобы узнать больше о встроенной поддержке CSS и CSS Modules в Next.js, ознакомьтесь с [документацией по CSS](https://nextjs.org/docs/basic-features/built-in-css-support).
