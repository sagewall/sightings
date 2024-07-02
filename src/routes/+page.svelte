<script>
	import BigfootSummary from '$lib/components/BigfootSummary.svelte';
	import UFOSummary from '$lib/components/UFOSummary.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sightings</title>
	<meta name="description" content="Recent Bigfoot and UFO sightings." />
</svelte:head>

<div class="flex-col">
	<h2 class="font-extrabold text-3xl">Dashboard</h2>

	<h3 class="font-extrabold text-2xl mb-3">Three most recent bigfoot sightings</h3>
	{#if data.bigfootSightings}
		<BigfootSummary bigfootSightings={data.bigfootSightings} />
	{/if}

	<h3 class="font-extrabold text-2xl">Three most recent UFO sightings</h3>
	{#if data.ufoSightings}
		<UFOSummary ufoSightings={data.ufoSightings} />
	{/if}
</div>
