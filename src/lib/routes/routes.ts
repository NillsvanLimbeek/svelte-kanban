import Home from '../../views/Home.svelte';
import Board from '../../components/Board.svelte';

export const routes = {
    '/': Home,
    '/board/:id': Board,
};
