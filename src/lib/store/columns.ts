import { DragEvent } from './../types/DragEvent';
import { writable } from 'svelte/store';

import { ICard } from './../types/Card';
import type { IColumn } from '../types';

interface State {
  columns: IColumn[];
}

const COLUMNS: IColumn[] = [
  {
    id: '2cd7d828-74c6-4a72-95c4-379e4fefcf9e',
    boardId: '0fe2fe5b-acf1-44a1-b3f7-b7879155cae3',
    cards: [
      {
        id: '60b0d3b0-9303-455c-b73a-a83fb3361932',
        columnId: '2cd7d828-74c6-4a72-95c4-379e4fefcf9e',
        title: 'Card #1',
      },
      {
        id: '19f0e8b7-1201-4b69-b212-cfb33fd21f66',
        columnId: '2cd7d828-74c6-4a72-95c4-379e4fefcf9e',
        title: 'Card #2',
      },
      {
        id: 'a7cceb5d-703e-4da3-9a00-3dd45dbeabcd',
        columnId: '2cd7d828-74c6-4a72-95c4-379e4fefcf9e',
        title: 'Card #3',
      },
    ],
    title: 'Column #1',
  },
  {
    id: 'ff01ce4c-f557-4b40-b514-3dffef0bf605',
    boardId: '0fe2fe5b-acf1-44a1-b3f7-b7879155cae3',
    cards: [
      {
        id: '0a90b171-78ba-48b3-b59a-24e4674a04d5',
        columnId: 'ff01ce4c-f557-4b40-b514-3dffef0bf605',
        title: 'Card #4',
      },
      {
        id: 'f0169120-d307-4242-9427-90be21d18fb0',
        columnId: 'ff01ce4c-f557-4b40-b514-3dffef0bf605',
        title: 'Card #5',
      },
    ],
    title: 'Column #2',
  },
  {
    id: 'c98f212d-0a59-41c8-a870-0fbf3d27c60e',
    boardId: '90106ace-78c8-4348-a9de-5821d73beaa2',
    cards: [],
    title: 'Column #3',
  },
];

const store = () => {
  const state: State = {
    columns: COLUMNS,
  };

  const { set, subscribe, update } = writable(state);

  const methods = {
    findColumns(id: string) {
      return state.columns.filter((column) => column.boardId === id);
    },

    findColumnById(id: string) {
      return state.columns.find((column) => column.id === id);
    },

    updateColumn(newColumn: IColumn) {
      const columnIndex = state.columns.findIndex((column) => column.id === newColumn.id);
      state.columns[columnIndex] = newColumn;

      update((state) => {
        state.columns = [...state.columns];
        return state;
      });
    },

    addColumn(column: IColumn) {
      update((state) => {
        state.columns = [...state.columns, column];
        return state;
      });
    },

    considerCards(e: CustomEvent<DragEvent<ICard[]>>, columnId: string) {
      const columnIndex = state.columns.findIndex((column) => column.id === columnId);
      state.columns[columnIndex].cards = e.detail.items;
      state.columns = [...state.columns];
    },

    finalizeCards(e: CustomEvent<DragEvent<ICard[]>>, columnId: string) {
      const columnIndex = state.columns.findIndex((column) => column.id === columnId);
      state.columns[columnIndex].cards = e.detail.items;
      state.columns = [...state.columns];

      // make api call here
    },
  };

  return { set, subscribe, update, ...methods };
};

export default store();
