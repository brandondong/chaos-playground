<script lang="ts">
	import Grid from "./Grid.svelte";
	import { GridData } from "./grid";

	let grid = GridData.initEmpty(7);
</script>

<div class="flex">
	<div class="sidebar side1">Sidebar 1</div>
	<div class="grid"><Grid bind:grid /></div>
	<div class="sidebar side2">Sidebar 2</div>
</div>

<style>
	.flex {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	.grid {
		box-sizing: border-box;
		padding: 20px;
	}

	.sidebar {
		flex: 1 0 var(--sidebar-size);
		display: flex;
	}

	@media (orientation: landscape) {
		.flex {
			flex-direction: row;
			--sidebar-size: 100px;
		}

		.grid {
			width: min(100vh, calc(100vw - 2 * var(--sidebar-size)));
			height: min(100vh, calc(100vw - 2 * var(--sidebar-size)));
		}

		.side1 {
			justify-content: flex-end;
		}

		.side2 {
			justify-content: flex-start;
		}
	}

	@media (orientation: portrait) {
		.flex {
			flex-direction: column;
			--sidebar-size: 50px;
		}

		.grid {
			width: min(100vw, calc(100vh - 2 * var(--sidebar-size)));
			height: min(100vw, calc(100vh - 2 * var(--sidebar-size)));
		}

		.side1 {
			align-items: flex-end;
		}

		.side2 {
			align-items: flex-start;
		}
	}
</style>
