"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expectedBlocks = [
    {
        object: 'block',
        heading_1: {
            text: [
                {
                    text: {
                        content: 'FS | BRAIN FOOD',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'heading_1',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Hey ...',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Sunday Brain Food: a weekly newsletter full of timeless ideas and insights for life and business.',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '(Was this newsletter forwarded to you?',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' Sign up here',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/p8heh9h99d6m76sq/aHR0cHM6Ly9mcy5ibG9nL25ld3NsZXR0ZXIv',
                        },
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' .)',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        heading_2: {
            text: [
                {
                    text: {
                        content: 'FS',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'heading_2',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '"For the first three months, I place each student at a table with a thousand pieces of white paper and a trash can underneath. Every day they have to sit at the table for several hours and write ideas. They put the ideas they like on the right side of the table; the ones they don’t like, they put in the trash. But we don’t throw out the trash. After three months, I only take the ideas from the trash can. I don’t even look at the ideas they liked. Because the trash can is a treasure trove of things they’re afraid to do."',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '—',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' Life Lessons from Marina Abramović',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/x0hph6hnnz2o70a5/aHR0cHM6Ly9mcy5ibG9nLzIwMjEvMDcvbGVzc29ucy1tYXJpbmEtYWJyb21vdmljLw==',
                        },
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        heading_2: {
            text: [
                {
                    text: {
                        content: 'Explore Your Curiosity',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'heading_2',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: "★ \"You'd imagine you were seeing a specific red, not projected on the screen but as a neurophysiological response to stimulus. And if you pick the precise wavelength, “you could actually cause someone to perceive a color that they could never otherwise see. Like, there's no natural way for you to have the perception of that color.” That color wouldn't be onscreen. It wouldn't be anything a projector could cast or a computer could generate. It'd be a function of pure cognition, different for every viewer, existing only in the mind, then fading to nothingness. Which is true for all colors anyway, when you think about it.\"",
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '—',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' How Pixar Uses Hyper-Colors',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/6qheh8hppwrz2gco/aHR0cHM6Ly93d3cud2lyZWQuY29tL3N0b3J5L2hvdy1waXhhci11c2VzLWh5cGVyLWNvbG9ycy10by1oYWNrLXlvdXItYnJhaW4v',
                        },
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '★ “Scientists who study the mechanics of curiosity are finding that it is, at its core, a kind of probability algorithm—our brain’s continuous calculation of which path or action is likely to gain us the most knowledge in the least amount of time. Like the links on a Wikipedia page, curiosity builds upon itself, every question leading to the next. And as with a journey down the Wikipedia wormhole, where you start dictates where you might end up. That’s the funny thing about curiosity: It’s less about what you don’t know than about what you already do.”',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '—',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' Curiosity Depends on What you Already Know',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/58hvh7h550xq9rh6/aHR0cHM6Ly9uYXV0aWwudXMvaXNzdWUvMzMvYXR0cmFjdGlvbi9jdXJpb3NpdHktZGVwZW5kcy1vbi13aGF0LXlvdS1hbHJlYWR5LWtub3c=',
                        },
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '(In many ways reading is similar. Your reading ability depends on what you already know. The key to reading faster or remembering more is often as simple as reading more. Learn more about',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' reading better',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/25h2hoh77g96omu3/aHR0cHM6Ly9mcy5ibG9nL3JlYWRpbmcv',
                        },
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' .)',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        heading_2: {
            text: [
                {
                    text: {
                        content: 'Timeless Insight',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'heading_2',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '“It is not the amount of knowledge that makes a brain. It is not even the distribution of knowledge. It is the interconnectedness."',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '— Howard Bloom',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        heading_2: {
            text: [
                {
                    text: {
                        content: 'Tiny Thought',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'heading_2',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Three stages of thinking:',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: "1. Too simplistic (it's easy).",
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: "2. Too complicated (it's hard).",
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: "3. Simple (it's simple but not easy).",
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'We tend to avoid the hard work necessary to make it simple.',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Sponsored by Trends',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Trends',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/qvh8h7h88vwz6lsl/aHR0cHM6Ly90cmVuZHMuY28vZmFybmFtc3RyZWV0Lw==',
                        },
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'is where entrepreneurs and investors find the next big thing. Every week, their team of analysts send a detailed report on markets that are about to explode, and exactly how you can capitalize. Uncover 1,000+ emerging market trends by visiting',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' trends.co/farnamstreet',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/qvh8h7h88vwz6lsl/aHR0cHM6Ly90cmVuZHMuY28vZmFybmFtc3RyZWV0Lw==',
                        },
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'to try your first 7 days for free.',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Stay safe,',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Shane',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'P.S. The',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' Great Mental Models V1 hardcover',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/g3hnh5heen9rz2br/aHR0cHM6Ly9nZW5pLnVzL2ZxeG8=',
                        },
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: " is on sale at Amazon.com for the lowest price ever. (Please note we don't control pricing and have no idea how long it will last.)",
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: 'Overwhelmed by email? No need to unsubscribe.',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' Try a 30 day break',
                        link: {
                            url: 'https://click.convertkit-mail4.com/zlum743522unh2xv9xax/z2hlx08zcnhoo76no9fp/aHR0cHM6Ly9mcy5ibG9nL2JmLW1vbnRoLW9mZi8=',
                        },
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: " . You won't get any emails from us for 30 days.",
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' Update your profile',
                        link: {
                            url: 'https://preferences.convertkit-mail4.com/zlum743522unh2xv9xax',
                        },
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' to change your email address or',
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' unsubscribe from everything',
                        link: {
                            url: 'https://unsubscribe.convertkit-mail4.com/zlum743522unh2xv9xax',
                        },
                    },
                    type: 'text',
                },
                {
                    text: {
                        content: ' .',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
    {
        object: 'block',
        paragraph: {
            text: [
                {
                    text: {
                        content: '201-854 Bank Street, Ottawa, ON K1S 3W3',
                    },
                    type: 'text',
                },
            ],
        },
        type: 'paragraph',
    },
];
exports.default = expectedBlocks;
