<script>
	import BigfootList from '$lib/components/BigfootList.svelte';

	export let data;
</script>

<h2 class="font-extrabold text-2xl">Bigfoot Sightings</h2>
{#if data}
	<BigfootList position={data.position} bigfootSightings={data.bigfootSightings} />
{/if}
