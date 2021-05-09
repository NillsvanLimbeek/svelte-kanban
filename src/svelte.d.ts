declare type DndEventInfo = import('svelte-dnd-action').DndEventInfo;

declare type DndEvent = {
  items: any;
  info: DndEventInfo;
};

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    onclick_outside?: () => void;
    onconsider?: (event: CustomEvent<DndEvent> & { target: EventTarget & T }) => void;
    onfinalize?: (event: CustomEvent<DndEvent> & { target: EventTarget & T }) => void;
  }
}
