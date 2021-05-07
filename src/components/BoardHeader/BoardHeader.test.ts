import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/svelte';

import type { IBoard } from './../../lib/types/Board';

import BoardHeader from './BoardHeader.svelte';

const board: IBoard = {
  id: `${Date.now()}`,
  color: 'red',
  columnIds: [],
  favorite: false,
  title: 'Test Board',
};

describe('Board Header', () => {
  it('Renders a custom title', () => {
    const { getByText } = render(BoardHeader, { props: { board } });
    expect(() => getByText('Test Board')).not.toThrow();
  });
});
