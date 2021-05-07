<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { IBoard } from '../../lib/types';
  import BoardHeaderButton from '../BoardHeaderButton.svelte';
  import DatepickerButton from '../DatepickerButton.svelte';

  export let board: IBoard;

  let view: 'board' | 'calendar' = 'board';
  let calendarView: 'week' | 'month' = 'month';

  const dispatch = createEventDispatcher();
</script>

<div class="w-full flex justify-between mb-4">
  <div class="w-1/5 flex">
    <div
      data-testid="square"
      class="h-10 w-10 rounded mr-2"
      style="background-color: {board.color}"
      on:click={() => dispatch('favorite', !board.favorite)}
    />
    <p class="text-lg">{board.title}</p>
  </div>

  <div class=" flex {view === 'calendar' ? 'w-4/5 justify-between' : 'w-auto flex-end'}">
    {#if view === 'calendar'}
      <div class="flex">
        <BoardHeaderButton
          class="border rounded-l"
          view="week"
          icon="barchart-hor"
          active={calendarView === 'week'}
          on:view={(e) => (calendarView = e.detail)}
        />
        <BoardHeaderButton
          class="border-r border-t border-b rounded-r"
          view="month"
          icon="columns"
          active={calendarView === 'month'}
          on:view={(e) => (calendarView = e.detail)}
        />
      </div>

      <DatepickerButton />
    {/if}

    <div class="flex">
      <BoardHeaderButton
        class="border rounded-l"
        view="board"
        icon="barchart"
        active={view === 'board'}
        on:view={(e) => (view = e.detail)}
      />
      <BoardHeaderButton
        class="border-r border-t border-b rounded-r"
        view="calendar"
        icon="calendar"
        active={view === 'calendar'}
        on:view={(e) => (view = e.detail)}
      />
    </div>
  </div>
</div>
