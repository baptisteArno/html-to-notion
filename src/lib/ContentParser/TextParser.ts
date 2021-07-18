import ContentParser from '.';
import { BuildingBlock } from '../models';
import {
  HtmlTextTags,
  NotionTextTypes,
  textTagNameToNotionTypeMap,
} from '../notionUtils';

class TextParser extends ContentParser {
  private type: NotionTextTypes;

  constructor(content: string, tagName: HtmlTextTags) {
    super(content);
    this.type = textTagNameToNotionTypeMap.get(tagName) as NotionTextTypes;
  }

  parse = (buildingBlock: BuildingBlock) => {
    if (!buildingBlock.block) {
      return {
        ...buildingBlock,
        block: {
          object: 'block',
          type: this.type,
          [this.type]: {
            text: [
              {
                type: 'text',
                text: {
                  content: this.content,
                },
              },
            ],
          },
        } as any,
        type: this.type,
      } as BuildingBlock;
    }
    if (buildingBlock.type) {
      // Tricky dynamic type part. Disabling...
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      buildingBlock.block[buildingBlock.type].text.push({
        type: 'text',
        text: {
          content: this.content,
        },
      });
    }
    return buildingBlock;
  };
}

export default TextParser;
