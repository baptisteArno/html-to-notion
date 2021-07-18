"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2_1 = require("htmlparser2");
const NotionParser_1 = require("./NotionParser");
const initParser = (notionParser) => new htmlparser2_1.Parser({
    onopentag(tagName, attributes) {
        notionParser.onOpenTag(tagName, attributes);
    },
    ontext(content) {
        notionParser.onText(content);
    },
    onclosetag() {
        notionParser.onCloseTag();
    },
});
const parseHtmlToNotionBlocks = (html) => {
    const notionParser = new NotionParser_1.default();
    const parser = initParser(notionParser);
    parser.write(html);
    parser.end();
    return notionParser.getBlocks();
};
exports.default = parseHtmlToNotionBlocks;
