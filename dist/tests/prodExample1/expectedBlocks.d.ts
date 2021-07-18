import { HeadingOneBlock, ParagraphBlock } from '@notionhq/client/build/src/api-types';
declare const expectedBlocks: (ParagraphBlock | HeadingOneBlock | {
    object: string;
    paragraph: {
        text: ({
            text: {
                content: string;
                link?: undefined;
            };
            type: string;
        } | {
            text: {
                content: string;
                link: {
                    url: string;
                };
            };
            type: string;
        })[];
    };
    type: string;
    heading_2?: undefined;
} | {
    object: string;
    heading_2: {
        text: {
            text: {
                content: string;
            };
            type: string;
        }[];
    };
    type: string;
    paragraph?: undefined;
})[];
export default expectedBlocks;
