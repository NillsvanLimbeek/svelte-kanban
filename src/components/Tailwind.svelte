<style global type="text/postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .header-button {
      @apply flex items-center px-3 text-gray-400 border-gray-300 text-sm focus:outline-none;
    }

    .header-button__active {
      @apply bg-white text-gray-900 shadow-md;
    }
  }
</style>
