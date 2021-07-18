import { BuildingBlock } from '../models';
declare abstract class ContentParser {
    protected content: string;
    constructor(content: string);
    abstract parse(buildingBlock?: BuildingBlock): BuildingBlock;
}
export default ContentParser;
