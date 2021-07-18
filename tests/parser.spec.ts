import * as fs from 'fs';
import parseHtmlToNotionBlocks from '../src/lib/parser';
import rawHtmlOne from './prodExample1/rawHtml';
import expectedBlocksOne from './prodExample1/expectedBlocks';
import rawHtmlTwo from './prodExample2/rawHtml';
import expectedBlocksTwo from './prodExample2/expectedBlocks';

describe('NotionParser', () => {
  it('should parse paragraphs', () => {
    const testHtml = '<p>text content</p>';
    expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
      {
        object: 'block',
        paragraph: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'paragraph',
      },
    ]);
  });

  it('should parse links', () => {
    const testHtml = '<a href="https://notion.so">Click here</a>';
    expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
      {
        object: 'block',
        paragraph: {
          text: [
            {
              text: {
                content: 'Click here',
                link: {
                  url: 'https://notion.so',
                },
              },
              type: 'text',
            },
          ],
        },
        type: 'paragraph',
      },
    ]);
  });

  it('should parse headings', () => {
    const testHtml =
      '<h1>text content</h1><h2>text content</h2><h3>text content</h3><h4>text content</h4><h5>text content</h5><h6>text content</h6>';
    const expectedBlocks = [
      {
        object: 'block',
        heading_1: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'heading_1',
      },
      {
        object: 'block',
        heading_2: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'heading_2',
      },
      {
        object: 'block',
        heading_3: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'heading_3',
      },
      {
        object: 'block',
        heading_3: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'heading_3',
      },
      {
        object: 'block',
        heading_3: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'heading_3',
      },
      {
        object: 'block',
        heading_3: {
          text: [{ text: { content: 'text content' }, type: 'text' }],
        },
        type: 'heading_3',
      },
    ];
    expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual(expectedBlocks);
  });

  it('should parse a serie of text paragraphs', () => {
    const testHtml =
      '<p>text1<span>text2</span>text3<strong>text4</strong></p>';
    expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
      {
        object: 'block',
        paragraph: {
          text: [
            { text: { content: 'text1' }, type: 'text' },
            { text: { content: ' text2' }, type: 'text' },
            { text: { content: ' text3' }, type: 'text' },
            { text: { content: ' text4' }, type: 'text' },
          ],
        },
        type: 'paragraph',
      },
    ]);
  });

  it('should parse a multiple paragraph blocks', () => {
    const testHtml = '<div><p>text1</p><p>text2</p><div>text3</div></div>';
    expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
      {
        object: 'block',
        paragraph: {
          text: [{ text: { content: 'text1' }, type: 'text' }],
        },
        type: 'paragraph',
      },
      {
        object: 'block',
        paragraph: {
          text: [{ text: { content: 'text2' }, type: 'text' }],
        },
        type: 'paragraph',
      },
      {
        object: 'block',
        paragraph: {
          text: [{ text: { content: 'text3' }, type: 'text' }],
        },
        type: 'paragraph',
      },
    ]);
  });

  it('should parse multiple elements type', () => {
    const testHtml =
      '<div><h1>Title</h1><p>text <a href="https://notion.so">link</a> text42.</p><p>Another text</p></div>';
    expect(parseHtmlToNotionBlocks(testHtml)).toStrictEqual([
      {
        object: 'block',
        heading_1: {
          text: [{ text: { content: 'Title' }, type: 'text' }],
        },
        type: 'heading_1',
      },
      {
        object: 'block',
        paragraph: {
          text: [
            { text: { content: 'text' }, type: 'text' },
            {
              text: {
                content: ' link',
                link: {
                  url: 'https://notion.so',
                },
              },
              type: 'text',
            },
            { text: { content: ' text42.' }, type: 'text' },
          ],
        },
        type: 'paragraph',
      },
      {
        object: 'block',
        paragraph: {
          text: [{ text: { content: 'Another text' }, type: 'text' }],
        },
        type: 'paragraph',
      },
    ]);
  });

  it('should handle HTML found in production', () => {
    expect(parseHtmlToNotionBlocks(rawHtmlOne)).toStrictEqual(
      expectedBlocksOne
    );
    expect(parseHtmlToNotionBlocks(rawHtmlTwo)).toStrictEqual(
      expectedBlocksTwo
    );
  });
});
