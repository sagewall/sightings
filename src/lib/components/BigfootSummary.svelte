<script lang="ts">
	import type { BigfootSightings } from '$lib/types';
	import BigfootAccordian from './BigfootAccordian.svelte';

	export let bigfootSightings: BigfootSightings;
</script>

<ul>
	{#each bigfootSightings.features as bigfootSighting}
		<li>
			<BigfootAccordian {bigfootSighting} />
		</li>
	{/each}
</ul>
