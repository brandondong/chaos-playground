<script lang="ts">
    const TOTAL_SIZE = 100;
    const GRID_SIZE = 75;

    export let grid;
    $: dimension = Math.sqrt(grid.length);
    $: cellSize = GRID_SIZE / dimension;
</script>

<svg viewBox="0 0 {TOTAL_SIZE} {TOTAL_SIZE}">
    <g
        transform="translate({(TOTAL_SIZE - GRID_SIZE) / 2} {(TOTAL_SIZE -
            GRID_SIZE) /
            2})"
    >
        <line x1={0} y1="0" x2={GRID_SIZE} y2="0" stroke="black" />
    </g>
</svg>

<style>
    svg {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
