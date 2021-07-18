import ContentParser from '.';
import { BuildingBlock } from '../models';

class LinkParser extends ContentParser {
  parse = (buildingBlock: BuildingBlock) => {
    if (!buildingBlock.block) {
      return {
        ...buildingBlock,
        block: {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text: {
                  content: this.content,
                  link: {
                    url: buildingBlock.src,
                  },
                },
              },
            ],
          },
        },
        type: 'paragraph',
      } as BuildingBlock;
    }
    if (!buildingBlock.type) return buildingBlock;
    // Tricky dynamic type part. Disabling...
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    buildingBlock.block[buildingBlock.type].text.push({
      type: 'text',
      text: {
        content: this.content,
        link: {
          url: buildingBlock.src,
        },
      },
    });
    return buildingBlock;
  };
}

export default LinkParser;
