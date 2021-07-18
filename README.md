# HTML to Notion blocks

This library allows you to convert an HTML string into Notion blocks that you can directly use for the [Notion API](https://developers.notion.com/)

## Getting started

```
yarn add html-to-notion
```

```js
import parseHtmlToNotionBlocks from '../src/lib/parser';

const rawHtml = `<p>Hi!</p>`;

const notionBlocks = parseHtmlToNotionBlocks(rawHtml);

// [
//  {
//    object: "block",
//    paragraph: {
//      text: [{ text: { content: "Hi" }, type: "text" }],
//    },
//    type: "paragraph",
//  },
//];
```

## To-Do

[ ] Support lists
[ ] Support decorated texts
