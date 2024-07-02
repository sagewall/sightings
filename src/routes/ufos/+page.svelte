<script>
	import UFOList from '$lib/components/UFOList.svelte';
	export let data;
</script>

<svelte:head>
	<title>UFOs</title>
	<meta name="description" content="Closest UFO sightings." />
</svelte:head>

<div class="flex-col">
	<h2 class="font-extrabold text-2xl">UFO Sightings</h2>
	{#if data}
		<UFOList position={data.position} ufoSightings={data.ufoSightings} />
	{/if}
</div>
