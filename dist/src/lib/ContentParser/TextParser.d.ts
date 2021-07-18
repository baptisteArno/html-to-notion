import ContentParser from '.';
import { BuildingBlock } from '../models';
import { HtmlTextTags } from '../notionUtils';
declare class TextParser extends ContentParser {
    private type;
    constructor(content: string, tagName: HtmlTextTags);
    parse: (buildingBlock: BuildingBlock) => BuildingBlock;
}
export default TextParser;
