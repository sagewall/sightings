<script>
	import UFOList from '$lib/components/UFOList.svelte';
	export let data;
</script>

<h2 class="font-extrabold text-2xl">UFO Sightings</h2>
{#if data}
	<UFOList position={data.position} ufoSightings={data.ufoSightings} />
{/if}
