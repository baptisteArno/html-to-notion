import { Block } from '@notionhq/client/build/src/api-types';
import ContentParser from './ContentParser';
declare class NotionParser {
    private buildingBlock;
    private producedBlocks;
    private currentElementsStack;
    private isWaitingForBodyElement;
    getBlocks: () => Block[];
    onOpenTag: (tagName: string, attributes: {
        [s: string]: string;
    }) => void;
    private preCheckHtmlFormat;
    private setLinkAttributesIfExists;
    onText: (content: string) => void;
    onCloseTag: () => void;
    flushBuildingBlock: () => void;
    flushElementStack: () => void;
    initContentParser: (content: string) => ContentParser;
}
export default NotionParser;
