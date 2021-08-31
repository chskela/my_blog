---
title: "Центрирование элементов в CSS"
excerpt: "Центрирование в CSS - почему это должно быть так сложно? Проблема не в том, что это сложно сделать, а в том, что существует так много разных способов сделать это, в зависимости от ситуации, трудно понять, к чему обратиться."
category: "Guides"
tags: ["CSS", "HTML", "Guides"]
date: "2021-08-31"
url: "centering-in-css.jpg"
author:
  name: Алексей Чистяков
  picture: "/assets/blog/authors/jj.jpeg"
isFeatured: true
isPicks: true
---

Центрирование в CSS - почему это должно быть так сложно? Проблема не в том, что это сложно сделать, а в том, что существует так много разных способов сделать это, в зависимости от ситуации, трудно понять, к чему обратиться.

## Горизонтально

**Если это inline или inline-\* элементы (например, текст или ссылки)?**

Вы можете центрировать inline элементы по горизонтали внутри родительского элемента на уровне блока с помощью всего:

```css
.center {
  text-align: center;
}
```

Это будет работать для inline, inline-block, inline-table, inline-flex и т.д.

**Если это элемент блочного уровня?**

Вы можете центрировать элемент на уровне блока, задав `margin-left` и `margin-right` в значение `auto` (и он имеет заданную ширину, иначе он будет полной шириной и не будет нуждаться в центрировании). Часто это делается так:

```css
.center-me {
  margin: 0 auto;
}
```

Это будет работать независимо от ширины центрируемого элемента уровня блока или родительского элемента.

**Если есть несколько элементов уровня блока?**

Если у вас есть два или более блочных элемента, которые необходимо выровнять по центру по горизонтали в ряд, скорее всего, вам будет удобнее сделать их другим типом отображения. Вот пример: inline-block и flexbox:

HTML:

```html
<main class="inline-block-center">
  <div>
    Я элемент, похожий на блок с моими братьями и сестрами, и мы центрированы в
    ряд.
  </div>
  <div>
    Я элемент, похожий на блок с моими братьями и сестрами, и мы центрированы в
    ряд. Во мне больше содержания, чем в моих братьях и сестрах.
  </div>
  <div>
    Я элемент, похожий на блок с моими братьями и сестрами, и мы сосредоточены в
    ряд.
  </div>
</main>

<main class="flex-center">
  <div>
    Я элемент, похожий на блок с моими братьями и сестрами, и мы сосредоточены в
    ряд.
  </div>
  <div>
    Я элемент, похожий на блок с моими братьями и сестрами, и мы сосредоточены в
    ряд. Во мне больше содержания, чем в моих братьях и сестрах.
  </div>
  <div>
    Я элемент, похожий на блок с моими братьями и сестрами, и мы сосредоточены в
    ряд.
  </div>
</main>
```

CSS:

```css
body {
  background: #f06d06;
  font-size: 80%;
}

main {
  background: white;
  margin: 20px 0;
  padding: 10px;
}

main div {
  background: black;
  color: white;
  padding: 15px;
  max-width: 125px;
  margin: 5px;
}

.inline-block-center {
  text-align: center;
}
.inline-block-center div {
  display: inline-block;
  text-align: left;
}

.flex-center {
  display: flex;
  justify-content: center;
}
```

Результат:

![inline-block-flexbox](inline-block-flexbox.png)

## Вертикально

Вертикальное центрирование в CSS немного сложнее.

**Если это inline или inline-\* элементы (например, текст или ссылки)?**

- Если это одна строка:

Иногда строчные/текстовые элементы могут отображаться вертикально по центру просто потому, что над и под ними есть равные отступы.

```css
.link {
  padding-top: 30px;
  padding-bottom: 30px;
}
```

Если использовать отступы по какой-то причине невозможно, и вы пытаетесь центрировать какой-то текст, который, как вы знаете, не будет переноситься, есть уловка, заключающаяся в том, чтобы сделать высоту строки равной высоте, чтобы центрировать текст.

```css
.center-text-trick {
  height: 100px;
  line-height: 100px;
  white-space: nowrap;
}
```

- Если это несколько строк:

Равные отступы сверху и снизу могут дать эффект центрирования и для нескольких строк текста, но если это не сработает, возможно, элемент, в котором находится текст, может быть ячейкой таблицы или вести себя как ячейка с CSS. В этом случае свойство `vertical-align: middle` сработает.

HTML

```html
<table>
  <tr>
    <td>
      Я вертикально центрирую несколько строк текста в реальной ячейке таблицы.
    </td>
  </tr>
</table>

<div class="center-table">
  <p>
    Я вертикально центрирую несколько строк текста в таблице, созданной с
    помощью CSS.
  </p>
</div>
```

CSS

```css
body {
  background: #f06d06;
  font-size: 80%;
}

table {
  background: white;
  width: 240px;
  border-collapse: separate;
  margin: 20px;
  height: 250px;
}

table td {
  background: black;
  color: white;
  padding: 20px;
  border: 10px solid white;
  /* default is vertical-align: middle; */
}

.center-table {
  display: table;
  height: 250px;
  background: white;
  width: 240px;
  margin: 20px;
}

.center-table p {
  display: table-cell;
  margin: 0;
  background: black;
  color: white;
  padding: 20px;
  border: 10px solid white;
  vertical-align: middle;
}
```

Результат:

![multiple-lines](multiple-lines.png)

Если что-то похожее на таблицу отсутствует, возможно, вы могли бы использовать flexbox? Один flex-child элемент может быть довольно легко центрирован во flex-parent элементе.

```css
.flex-center-vertically {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 400px;
}
```

Помните, что это работает, только если родительский контейнер имеет фиксированную высоту (px,% и т.Д.).

Если оба этих метода отсутствуют, вы можете использовать технику "ghost element"(«призрачного элемента»), при которой псевдоэлемент во всю высоту помещается внутри контейнера, а текст выравнивается по вертикали.

```css
.ghost-center {
  position: relative;
}
.ghost-center::before {
  content: " ";
  display: inline-block;
  height: 100%;
  width: 1%;
  vertical-align: middle;
}
.ghost-center p {
  display: inline-block;
  vertical-align: middle;
}
```

**Если это элемент блочного уровня?**

- Если известна высота элемента?

Довольно часто неизвестна высота макета веб-страницы по множеству причин: при изменении ширины перекомпоновка текста может изменить высоту. Разница в стиле текста может изменить высоту. Разница в количестве текста может изменить высоту. Элементы с фиксированным соотношением сторон, например изображения, могут изменять высоту при изменении размера и т.п.

Но если вы знаете высоту, вы можете центрировать по вертикали, например:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  height: 100px;
  margin-top: -50px; /* учитывайте padding и border, если не используете box-sizing: border-box; */
}
```

- Если высота элемента неизвестна?

По-прежнему можно отцентрировать его, подняв на половину высоты после того, как трансформаровали его наполовину:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

- Можете ли вы использовать flexbox?

Неудивительно, что с flexbox это намного проще.

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

Также можно отцентрировать во flexbox, используя `margin: auto` на дочернем элементе.

## Как по горизонтали, так и по вертикали

Вы можете комбинировать описанные выше техники любым способом, чтобы получить идеально отцентрированные элементы. Выделим три случая:

- Имеет ли элемент фиксированную ширину и высоту?

Используйте отрицательные margins, равные половине ширины и высоты элемента. А также абсолютное позиционирование со смещение на 50% `top` и `left`. Получим отцентрировый элемент с отличной кросс-браузерной поддержкой:

```css
.parent {
  position: relative;
}

.child {
  width: 300px;
  height: 100px;
  padding: 20px;

  position: absolute;
  top: 50%;
  left: 50%;

  margin: -70px 0 0 -170px;
}
```

- Элемент неизвестной ширины и высоты?

Если вы не знаете ширину или высоту, вы можете использовать свойство `transform: translate(-50%, -50%)` (он основан на текущей ширине/высоте элемента) для центрирования:

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

- Можете ли вы использовать flexbox?

Чтобы центрировать в обоих направлениях с помощью flexbox, вам необходимо использовать два свойства центрирования:

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

- Вы можете использовать grid?

Это всего лишь небольшой трюк, который работает для одного элемента:

```css
body,
html {
  height: 100%;
  display: grid;
}

span {
  /* центрируемый элемент */
  margin: auto;
}
```