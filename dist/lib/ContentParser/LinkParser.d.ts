import ContentParser from '.';
import { BuildingBlock } from '../models';
declare class LinkParser extends ContentParser {
    parse: (buildingBlock: BuildingBlock) => BuildingBlock;
}
export default LinkParser;
