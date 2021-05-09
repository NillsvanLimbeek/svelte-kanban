import type { DndEventInfo } from 'svelte-dnd-action';

export interface DragEvent<T> {
  items: T;
  info: DndEventInfo;
}
