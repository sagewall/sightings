<script lang="ts">
	import type { UFOSightings } from '$lib/types';
	import UFOAccordian from './UFOAccordian.svelte';

	export let position: GeolocationPosition | undefined;
	export let ufoSightings: UFOSightings;
</script>

<h3 class="mb-3 text-xl">
	{#if position}
		{ufoSightings.features.length} most recent UFO sightings within 100 miles of your location
	{:else}
		Could not determine your location
	{/if}
</h3>
<ul>
	{#each ufoSightings.features as ufoSighting}
		<UFOAccordian {ufoSighting} />
	{/each}
</ul>
