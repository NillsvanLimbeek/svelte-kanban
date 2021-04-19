<script lang="ts">
  export let size = '24';
</script>

<div {...$$restProps}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
</div>
