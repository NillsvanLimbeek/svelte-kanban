<script lang="ts">
  export let size = 24;
  export let color: string;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  fill={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="3" y="3" width={size - 6} height={size - 6} rx="2" ry="2" />
</svg>
