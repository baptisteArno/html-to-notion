export type HtmlTextTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
export type NotionTextTypes =
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'paragraph';

export const textTagNameToNotionTypeMap = new Map<
  HtmlTextTags,
  NotionTextTypes
>([
  ['h1', 'heading_1'],
  ['h2', 'heading_2'],
  ['h3', 'heading_3'],
  ['h4', 'heading_3'],
  ['h5', 'heading_3'],
  ['h6', 'heading_3'],
  ['p', 'paragraph'],
]);
