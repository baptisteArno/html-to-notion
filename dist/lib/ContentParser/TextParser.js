"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const notionUtils_1 = require("../notionUtils");
class TextParser extends _1.default {
    constructor(content, tagName) {
        super(content);
        this.parse = (buildingBlock) => {
            if (!buildingBlock.block) {
                return Object.assign(Object.assign({}, buildingBlock), { block: {
                        object: 'block',
                        type: this.type,
                        paragraph: {
                            text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: this.content,
                                    },
                                },
                            ],
                        },
                    }, type: this.type });
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
        this.type = notionUtils_1.textTagNameToNotionTypeMap.get(tagName);
    }
}
exports.default = TextParser;
