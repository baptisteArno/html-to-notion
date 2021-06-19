import { Block } from '@notionhq/client/build/src/api-types';
import { Parser } from 'htmlparser2';

export const parseHtmlToNotionBlocks = (html: string): Block[] => {
  const blocks = [];
  const parser = initParser(blocks);
  parser.write(html);
  parser.end();
  return blocks;
};

const initParser = (blocks: Block[]) => {
  let exploringElements: string[] = [];
  let currentBlock;
  let currentBlockType;
  let currentSrc;
  return new Parser({
    onopentag(tagName, attributes) {
      if (currentBlock || exploringElements.length === 0) {
        exploringElements.push(tagName);
        if (attributes.src) {
          currentSrc = attributes.src;
        } else if (attributes.href) {
          currentSrc = attributes.href;
        }
      } else {
        exploringElements = [tagName];
      }
    },
    ontext(content) {
      const currentTagName = [...exploringElements].pop();
      const cleanContent = content
        .replace(new RegExp('\\n', 'g'), '')
        .replace(/ +(?= )/g, '')
        .trim();
      if (cleanContent.length === 0) return;
      if (
        [
          'p',
          'div',
          'span',
          'b',
          'strong',
          'i',
          'em',
          'mark',
          'small',
          'del',
          'ins',
          'sub',
          'sup',
        ].includes(currentTagName)
      ) {
        if (!currentBlock) {
          currentBlock = {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: cleanContent,
                  },
                },
              ],
            },
          };
          currentBlockType = 'paragraph';
        } else {
          currentBlock[currentBlockType].text.push({
            type: 'text',
            text: {
              content: cleanContent,
            },
          });
        }

        blocks.push();
      }
      if (currentTagName === 'h1') {
        if (!currentBlock) {
          currentBlock = {
            object: 'block',
            type: 'heading_1',
            heading_1: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: cleanContent,
                  },
                },
              ],
            },
          };
          currentBlockType = 'heading_1';
        } else {
          currentBlock[currentBlockType].text.push({
            type: 'text',
            text: {
              content: cleanContent,
            },
          });
        }
      }
      if (currentTagName === 'h2') {
        if (!currentBlock) {
          currentBlock = {
            object: 'block',
            type: 'heading_2',
            heading_2: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: cleanContent,
                  },
                },
              ],
            },
          };
          currentBlockType = 'heading_2';
        } else {
          currentBlock[currentBlockType].text.push({
            type: 'text',
            text: {
              content: cleanContent,
            },
          });
        }
      }
      if (currentTagName === 'h3') {
        if (!currentBlock) {
          currentBlock = {
            object: 'block',
            type: 'heading_3',
            heading_3: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: cleanContent,
                  },
                },
              ],
            },
          };
          currentBlockType = 'heading_3';
        } else {
          currentBlock[currentBlockType].text.push({
            type: 'text',
            text: {
              content: cleanContent,
            },
          });
        }
      }
      if (currentTagName === 'a') {
        if (!currentBlock) {
          currentBlock = {
            object: 'block',
            type: 'paragraph',
            paragraph: {
              text: [
                {
                  type: 'text',
                  text: {
                    content: ' ' + cleanContent,
                    link: {
                      url: currentSrc,
                    },
                  },
                },
              ],
            },
          };
          currentBlockType = 'paragraph';
        } else {
          currentBlock[currentBlockType].text.push({
            type: 'text',
            text: {
              content: ' ' + cleanContent,
              link: {
                url: currentSrc,
              },
            },
          });
        }
      }
    },
    onclosetag() {
      if (currentBlock && exploringElements.length === 1) {
        blocks.push(currentBlock);
        currentBlock = undefined;
        currentBlockType = undefined;
      }
      exploringElements.splice(-1, 1);
    },
  });
};
