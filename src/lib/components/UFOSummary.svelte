<script lang="ts">
	import type { UFOSightings } from '$lib/types';
	import UFOAccordian from './UFOAccordian.svelte';

	export let ufoSightings: UFOSightings;
</script>

<ul>
	{#each ufoSightings.features as ufoSighting}
		<UFOAccordian {ufoSighting} />
	{/each}
</ul>
