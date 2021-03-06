import { writable } from 'svelte/store';

import type { ICard } from '../types';

interface State {
  cards: ICard[];
}

const CARDS: ICard[] = [
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
];

const store = () => {
  const state: State = {
    cards: CARDS,
  };

  const { set, subscribe, update } = writable(state);

  const methods = {
    findCards(id: string) {
      return state.cards.filter((card) => card.columnId === id);
    },

    findCardById(id: string) {
      return state.cards.find((card) => card.id === id);
    },

    addCard(card: ICard) {
      update((state) => {
        state.cards = [...state.cards, card];
        return state;
      });
    },
  };

  return { set, subscribe, update, ...methods };
};

export default store();
