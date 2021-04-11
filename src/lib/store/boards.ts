import { writable } from 'svelte/store';
import { v4 } from 'uuid';

import type { Board } from '../types';

interface State {
    boards: Board[];
}

const BOARDS: Board[] = [
    {
        id: '0fe2fe5b-acf1-44a1-b3f7-b7879155cae3',
        title: 'Board #1',
        favorite: true,
        color: 'blue',
    },
    {
        id: '90106ace-78c8-4348-a9de-5821d73beaa2',
        title: 'Board #2',
        favorite: false,
        color: 'red',
    },
    {
        id: '784edf90-e76c-4f1e-8c3e-378e988631f3',
        title: 'Board #3',
        favorite: false,
        color: 'yellow',
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
    };

    return { set, subscribe, update, ...methods };
};

export default store();
