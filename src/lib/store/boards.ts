import { writable } from 'svelte/store';

import type { Board } from '../types';

interface State {
  boards: Board[];
}

const BOARDS: Board[] = [
  {
    id: '0fe2fe5b-acf1-44a1-b3f7-b7879155cae3',
    title: 'Board #1',
    favorite: true,
    color: '#4680ff',
    columnIds: ['2cd7d828-74c6-4a72-95c4-379e4fefcf9e', 'ff01ce4c-f557-4b40-b514-3dffef0bf605'],
  },
  {
    id: '90106ace-78c8-4348-a9de-5821d73beaa2',
    title: 'Board #2',
    favorite: false,
    color: '#fb617f',
    columnIds: ['c98f212d-0a59-41c8-a870-0fbf3d27c60e'],
  },
  {
    id: '784edf90-e76c-4f1e-8c3e-378e988631f3',
    title: 'Board #3',
    favorite: false,
    color: '#feb64d',
    columnIds: [],
  },
];

const store = () => {
  const state: State = {
    boards: BOARDS,
  };

  const { set, subscribe, update } = writable(state);

  const methods = {
    findBoard(id: string) {
      return state.boards.find((board) => board.id === id);
    },

    updateBoard(newBoard: Board) {
      const boardIndex = state.boards.findIndex((board) => board.id === newBoard.id);
      state.boards[boardIndex] = newBoard;

      update((state) => {
        state.boards = [...state.boards];
        return state;
      });
    },
  };

  return { set, subscribe, update, ...methods };
};

export default store();
