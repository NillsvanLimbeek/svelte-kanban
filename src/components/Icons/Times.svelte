<script lang="ts">
    export let size = '24';
    export let stroke = 'currentColor';
</script>

<div {...$$restProps}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path d="M18 6L6 18M6 6l12 12" />
    </svg>
</div>
