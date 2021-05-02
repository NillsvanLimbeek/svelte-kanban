import type { ICard } from './Card';
export interface IColumn {
  id: string;
  boardId: string;
  cards: ICard[];
  title: string;
}
