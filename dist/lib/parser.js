"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseHtmlToNotionBlocks = void 0;
const htmlparser2_1 = require("htmlparser2");
const parseHtmlToNotionBlocks = (html) => {
    const blocks = [];
    const parser = initParser(blocks);
    parser.write(html);
    parser.end();
    return blocks;
};
exports.parseHtmlToNotionBlocks = parseHtmlToNotionBlocks;
const initParser = (blocks) => {
    let exploringElements = [];
    let currentBlock;
    let currentBlockType;
    let currentSrc;
    return new htmlparser2_1.Parser({
        onopentag(tagName, attributes) {
            if (currentBlock || exploringElements.length === 0) {
                exploringElements.push(tagName);
                if (attributes.src) {
                    currentSrc = attributes.src;
                }
                else if (attributes.href) {
                    currentSrc = attributes.href;
                }
            }
            else {
                exploringElements = [tagName];
            }
        },
        ontext(content) {
            const currentTagName = [...exploringElements].pop();
            const cleanContent = content
                .replace(new RegExp('\\n', 'g'), '')
                .replace(/ +(?= )/g, '')
                .trim();
            if (cleanContent.length === 0)
                return;
            if ([
                'p',
                'div',
                'span',
                'b',
                'strong',
                'i',
                'em',
                'mark',
                'small',
                'del',
                'ins',
                'sub',
                'sup',
            ].includes(currentTagName)) {
                if (!currentBlock) {
                    currentBlock = {
                        object: 'block',
                        type: 'paragraph',
                        paragraph: {
                            text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: cleanContent,
                                    },
                                },
                            ],
                        },
                    };
                    currentBlockType = 'paragraph';
                }
                else {
                    currentBlock[currentBlockType].text.push({
                        type: 'text',
                        text: {
                            content: cleanContent,
                        },
                    });
                }
                blocks.push();
            }
            if (currentTagName === 'h1') {
                if (!currentBlock) {
                    currentBlock = {
                        object: 'block',
                        type: 'heading_1',
                        heading_1: {
                            text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: cleanContent,
                                    },
                                },
                            ],
                        },
                    };
                    currentBlockType = 'heading_1';
                }
                else {
                    currentBlock[currentBlockType].text.push({
                        type: 'text',
                        text: {
                            content: cleanContent,
                        },
                    });
                }
            }
            if (currentTagName === 'h2') {
                if (!currentBlock) {
                    currentBlock = {
                        object: 'block',
                        type: 'heading_2',
                        heading_2: {
                            text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: cleanContent,
                                    },
                                },
                            ],
                        },
                    };
                    currentBlockType = 'heading_2';
                }
                else {
                    currentBlock[currentBlockType].text.push({
                        type: 'text',
                        text: {
                            content: cleanContent,
                        },
                    });
                }
            }
            if (currentTagName === 'h3') {
                if (!currentBlock) {
                    currentBlock = {
                        object: 'block',
                        type: 'heading_3',
                        heading_3: {
                            text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: cleanContent,
                                    },
                                },
                            ],
                        },
                    };
                    currentBlockType = 'heading_3';
                }
                else {
                    currentBlock[currentBlockType].text.push({
                        type: 'text',
                        text: {
                            content: cleanContent,
                        },
                    });
                }
            }
            if (currentTagName === 'a') {
                if (!currentBlock) {
                    currentBlock = {
                        object: 'block',
                        type: 'paragraph',
                        paragraph: {
                            text: [
                                {
                                    type: 'text',
                                    text: {
                                        content: ' ' + cleanContent,
                                        link: {
                                            url: currentSrc,
                                        },
                                    },
                                },
                            ],
                        },
                    };
                    currentBlockType = 'paragraph';
                }
                else {
                    currentBlock[currentBlockType].text.push({
                        type: 'text',
                        text: {
                            content: ' ' + cleanContent,
                            link: {
                                url: currentSrc,
                            },
                        },
                    });
                }
            }
        },
        onclosetag() {
            if (currentBlock && exploringElements.length === 1) {
                blocks.push(currentBlock);
                currentBlock = undefined;
                currentBlockType = undefined;
            }
            exploringElements.splice(-1, 1);
        },
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQXFDO0FBRTlCLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUN0RCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBTlcsUUFBQSx1QkFBdUIsMkJBTWxDO0FBRUYsTUFBTSxVQUFVLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUM1QixJQUFJLGlCQUFpQixHQUFhLEVBQUUsQ0FBQztJQUNyQyxJQUFJLFlBQVksQ0FBQztJQUNqQixJQUFJLGdCQUFnQixDQUFDO0lBQ3JCLElBQUksVUFBVSxDQUFDO0lBQ2YsT0FBTyxJQUFJLG9CQUFNLENBQUM7UUFDaEIsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVO1lBQzNCLElBQUksWUFBWSxJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNsQixVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztpQkFDN0I7cUJBQU0sSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO29CQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztpQkFDOUI7YUFDRjtpQkFBTTtnQkFDTCxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxP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