import { Block } from '@notionhq/client/build/src/api-types';
import ContentParser from './ContentParser';
import LinkParser from './ContentParser/LinkParser';
import TextParser from './ContentParser/TextParser';
import { BuildingBlock } from './models';

class NotionParser {
  private buildingBlock: BuildingBlock = {};

  private producedBlocks: Block[] = [];

  private currentElementsStack: string[] = [];

  private isWaitingForBodyElement: boolean = false;

  getBlocks = (): Block[] => this.producedBlocks;

  onOpenTag = (tagName: string, attributes: { [s: string]: string }): void => {
    this.preCheckHtmlFormat(tagName);
    if (this.isWaitingForBodyElement) return;
    const isBuildingBlock =
      this.currentElementsStack.length > 0 && this.buildingBlock?.block;
    if (isBuildingBlock) {
      if (tagName === 'br') {
        this.producedBlocks.push(this.buildingBlock.block!);
        this.flushBuildingBlock();
      }
      this.currentElementsStack.push(tagName);
    } else {
      this.currentElementsStack = [tagName];
    }
    this.setLinkAttributesIfExists(attributes);
  };

  private preCheckHtmlFormat(tagName: string) {
    if (tagName === 'html') {
      this.isWaitingForBodyElement = true;
    }
    if (tagName === 'body') {
      this.isWaitingForBodyElement = false;
    }
  }

  private setLinkAttributesIfExists(attributes: { [s: string]: string }) {
    if (attributes.src) {
      this.buildingBlock.src = attributes.src;
    } else if (attributes.href) {
      this.buildingBlock.src = attributes.href;
    }
  }

  onText = (content: string): void => {
    if (this.isWaitingForBodyElement) return;
    const addSpaceBeforeContent = (val: string) => ` ${val}`;
    const currentBlockHasText =
      this.buildingBlock.block && this.currentElementsStack.length > 0;

    // matches tabs, newlines, more than 2 spaces and
    // unicode zero-width characters (https://stackoverflow.com/a/11305926/5654715)
    let cleanContent = content
      .replace(/[\t\n\r\u200B\u200C\u200D\uFEFF]/gm, '')
      .replace(/\s{2,}/gm, ' ')
      .trim();

    if (cleanContent) {
      if (currentBlockHasText) {
        cleanContent = addSpaceBeforeContent(cleanContent);
      }
      const contentParser = this.initContentParser(cleanContent);
      this.buildingBlock = contentParser.parse(this.buildingBlock);
    }
  };

  onCloseTag = (): void => {
    if (this.isWaitingForBodyElement) return;
    if (this.buildingBlock?.block && this.currentElementsStack.length === 1) {
      this.producedBlocks.push(this.buildingBlock.block);
      this.flushBuildingBlock();
    }
    this.currentElementsStack.splice(-1, 1);
  };

  flushBuildingBlock = (): void => {
    this.buildingBlock = {};
  };

  flushElementStack = () => {
    this.currentElementsStack = [];
  };

  initContentParser = (content: string): ContentParser => {
    const tagName = [...this.currentElementsStack].pop();
    switch (tagName) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6': {
        return new TextParser(content, tagName);
      }
      case 'a': {
        return new LinkParser(content);
      }
      default: {
        return new TextParser(content, 'p');
      }
    }
  };
}

export default NotionParser;
