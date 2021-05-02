import type { ILabel } from './Label';

export interface ICard {
  id: string;
  columnId: string;
  title: string;
  label?: ILabel[];
  dueDate?: Date;
  description?: string;

  // members: User[]
  // checklist
  // attachment
  // cover
}
