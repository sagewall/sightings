<script lang="ts">
	import type { BigfootSightings } from '$lib/types';
	import Accordian from './BigfootAccordian.svelte';

	export let position: GeolocationPosition | undefined;
	export let bigfootSightings: BigfootSightings;
</script>

<h3 class="mb-3 text-xl">
	{#if position}
		{bigfootSightings.features.length} most recent bigfoot sightings within 100 miles of your location
	{:else}
		Could not determine your location
	{/if}
</h3>
<ul>
	{#each bigfootSightings.features as bigfootSighting}
		<Accordian {bigfootSighting} />
	{/each}
</ul>
