<script lang="ts">
    const TOTAL_SIZE = 100;
    const GRID_SIZE = 75;

    export let grid;
    $: dimension = Math.sqrt(grid.length);
    $: cellSize = GRID_SIZE / dimension;
</script>

<svg viewBox="0 0 {TOTAL_SIZE} {TOTAL_SIZE}">
    <!-- Start (0, 0) at the top left of the grid.  -->
    <g
        transform="translate({(TOTAL_SIZE - GRID_SIZE) / 2} {(TOTAL_SIZE -
            GRID_SIZE) /
            2})"
    >
        <!-- Grid lines. -->
        {#each Array(dimension + 1) as _, i}
            <line
                x1={0}
                y1={i * cellSize}
                x2={GRID_SIZE}
                y2={i * cellSize}
                stroke="black"
            />
        {/each}
        {#each Array(dimension + 1) as _, i}
            <line
                x1={i * cellSize}
                y1={0}
                x2={i * cellSize}
                y2={GRID_SIZE}
                stroke="black"
            />
        {/each}
    </g>
</svg>

<style>
    svg {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
