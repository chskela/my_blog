---
title: "Изучаем Next.js (React Framework) - часть 2"
excerpt: "Next.js дает вам лучший опыт разработчика со всеми функциями, необходимыми для производства: гибридный статический и серверный рендеринг, поддержка TypeScript, интеллектуальное связывание, предварительная выборка маршрута и многое другое. Конфигурация не требуется."
coverImage: "/assets/blog/learn-nextjs/pexels-markus-spiske-965345.jpg"
date: "2021-03-17T05:35:07.322Z"
author:
  name: Алексей Чистяков
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
isFeatured: false
isPicks: false
---

## Навигация между страницами

Пока что созданное нами приложение Next.js имеет только одну страницу. Веб-сайты и веб-приложения обычно имеют много разных страниц.

Давайте посмотрим, как добавить больше страниц в наше приложение.

### Страницы в Next.js

В Next.js страница - это React компонент, экспортированный из файла в [каталоге `'pages'`](https://nextjs.org/docs/basic-features/pages).

Страницы связаны с маршрутом на основе **имени файла**. Например, в разработке:

- `'pages/index.js'` is associated with the `'/'` route.
