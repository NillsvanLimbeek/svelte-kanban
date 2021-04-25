import type { Label } from './Label';

export interface Card {
  id: string;
  columnId: string;
  title: string;
  label?: Label[];
  dueDate?: Date;
  description?: string;

  // members: User[]
  // checklist
  // attachment
  // cover
}
