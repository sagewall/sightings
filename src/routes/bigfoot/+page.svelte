<script>
	import BigfootList from '$lib/components/BigfootList.svelte';

	export let data;
</script>

<svelte:head>
	<title>Bigfoot</title>
	<meta name="description" content="Closest Bigfoot sightings." />
</svelte:head>

<div class="flex-col">
	<h2 class="font-extrabold text-2xl">Bigfoot Sightings</h2>
	{#if data}
		<BigfootList position={data.position} bigfootSightings={data.bigfootSightings} />
	{/if}
</div>
