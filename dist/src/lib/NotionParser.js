"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkParser_1 = require("./ContentParser/LinkParser");
const TextParser_1 = require("./ContentParser/TextParser");
class NotionParser {
    constructor() {
        this.buildingBlock = {};
        this.producedBlocks = [];
        this.currentElementsStack = [];
        this.isWaitingForBodyElement = false;
        this.getBlocks = () => this.producedBlocks;
        this.onOpenTag = (tagName, attributes) => {
            var _a;
            this.preCheckHtmlFormat(tagName);
            if (this.isWaitingForBodyElement)
                return;
            const isBuildingBlock = this.currentElementsStack.length > 0 && ((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block);
            if (isBuildingBlock) {
                if (tagName === 'br') {
                    this.producedBlocks.push(this.buildingBlock.block);
                    this.flushBuildingBlock();
                }
                this.currentElementsStack.push(tagName);
            }
            else {
                this.currentElementsStack = [tagName];
            }
            this.setLinkAttributesIfExists(attributes);
        };
        this.onText = (content) => {
            if (this.isWaitingForBodyElement)
                return;
            const addSpaceBeforeContent = (val) => ` ${val}`;
            const currentBlockHasText = this.buildingBlock.block && this.currentElementsStack.length > 0;
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
        this.onCloseTag = () => {
            var _a;
            if (this.isWaitingForBodyElement)
                return;
            if (((_a = this.buildingBlock) === null || _a === void 0 ? void 0 : _a.block) && this.currentElementsStack.length === 1) {
                this.producedBlocks.push(this.buildingBlock.block);
                this.flushBuildingBlock();
            }
            this.currentElementsStack.splice(-1, 1);
        };
        this.flushBuildingBlock = () => {
            this.buildingBlock = {};
        };
        this.flushElementStack = () => {
            this.currentElementsStack = [];
        };
        this.initContentParser = (content) => {
            const tagName = [...this.currentElementsStack].pop();
            switch (tagName) {
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6': {
                    return new TextParser_1.default(content, tagName);
                }
                case 'a': {
                    return new LinkParser_1.default(content);
                }
                default: {
                    return new TextParser_1.default(content, 'p');
                }
            }
        };
    }
    preCheckHtmlFormat(tagName) {
        if (tagName === 'html') {
            this.isWaitingForBodyElement = true;
        }
        if (tagName === 'body') {
            this.isWaitingForBodyElement = false;
        }
    }
    setLinkAttributesIfExists(attributes) {
        if (attributes.src) {
            this.buildingBlock.src = attributes.src;
        }
        else if (attributes.href) {
            this.buildingBlock.src = attributes.href;
        }
    }
}
exports.default = NotionParser;
