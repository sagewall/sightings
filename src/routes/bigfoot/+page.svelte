<script>
	import BigfootList from '$lib/components/BigfootList.svelte';

	export let data;
</script>

<h2 class="text-2xl font-extrabold">Bigfoot Sightings</h2>
{#if data}
	<BigfootList position={data.position} sightings={data.sightings} />
{/if}
