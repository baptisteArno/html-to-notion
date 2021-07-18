"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class LinkParser extends _1.default {
    constructor() {
        super(...arguments);
        this.parse = (buildingBlock) => {
            if (!buildingBlock.block) {
                return Object.assign(Object.assign({}, buildingBlock), { block: {
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
                    }, type: 'paragraph' });
            }
            if (!buildingBlock.type)
                return buildingBlock;
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
}
exports.default = LinkParser;
