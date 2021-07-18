import { Block } from '@notionhq/client/build/src/api-types';

export type BuildingBlock = {
  block?: Block;
  type?: string;
  src?: string;
};
