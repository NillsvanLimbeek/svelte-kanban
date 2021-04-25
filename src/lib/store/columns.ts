import { writable } from 'svelte/store';
import type { Column } from '../types';

interface State {
  columns: Column[];
}

const COLUMNS: Column[] = [
  {
    id: '2cd7d828-74c6-4a72-95c4-379e4fefcf9e',
    boardId: '0fe2fe5b-acf1-44a1-b3f7-b7879155cae3',
    cardIds: [
      '60b0d3b0-9303-455c-b73a-a83fb3361932',
      '19f0e8b7-1201-4b69-b212-cfb33fd21f66',
      'a7cceb5d-703e-4da3-9a00-3dd45dbeabcd',
    ],
    title: 'Column #1',
  },
  {
    id: 'ff01ce4c-f557-4b40-b514-3dffef0bf605',
    boardId: '0fe2fe5b-acf1-44a1-b3f7-b7879155cae3',
    cardIds: ['0a90b171-78ba-48b3-b59a-24e4674a04d5', 'f0169120-d307-4242-9427-90be21d18fb0'],
    title: 'Column #2',
  },
  {
    id: 'c98f212d-0a59-41c8-a870-0fbf3d27c60e',
    boardId: '90106ace-78c8-4348-a9de-5821d73beaa2',
    cardIds: [],
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
  };

  return { set, subscribe, update, ...methods };
};

export default store();
