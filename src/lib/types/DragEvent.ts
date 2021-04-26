import type { TRIGGERS, SOURCES } from 'svelte-dnd-action';

export interface DragEvent<T> {
  items: T;
  info: {
    trigger: TRIGGERS;
    id: string;
    source: SOURCES;
  };
}
