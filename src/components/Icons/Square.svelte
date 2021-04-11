<script lang="ts">
    export let size = 24;
    export let color;

    function squareColor() {
        switch (color) {
            case 'blue':
                return '#4680ff';
            case 'red':
                return '#fb617f';
            case 'yellow':
                return '#feb64d';
        }
    }
</script>

<div {...$$restProps}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={squareColor()}
        stroke={squareColor()}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <rect x="3" y="3" width={size - 6} height={size - 6} rx="2" ry="2" />
    </svg>
</div>
