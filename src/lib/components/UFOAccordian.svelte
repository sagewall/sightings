<script lang="ts">
	import type { UFOSighting } from '$lib/types';
	import ArcMap from './ArcMap.svelte';

	const mapProperties: __esri.MapProperties = {
		basemap: 'topo-vector'
	};

	const featureLayers: __esri.FeatureLayerProperties[] = [
		{
			popupEnabled: false,
			portalItem: {
				id: 'bdf4bc300ff64c9fa789605eab19aae2'
			}
		}
	];

	export let ufoSighting: UFOSighting;
	export let open = false;

	function onClick() {
		open = !open;
	}
</script>

<section class="mb-7">
	<header class="flex space-x-4 font-bold text-xl">
		<button class="text-left" on:click={onClick}>
			{#if open}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			{/if}
		</button>
		<span
			>{new Date(ufoSighting.attributes.date_time).toLocaleDateString()} - {ufoSighting.attributes
				.city}, {ufoSighting.attributes.state}</span
		>
	</header>
	{#if open}
		<div class="flex flex-row space-x-3">
			<section class="basis-1/2 flex flex-col">
				<span class="text-lg">Location details</span>
				<p>
					{ufoSighting.attributes.city_latitude}, {ufoSighting.attributes.city_longitude}
				</p>
				<p class="mb-2">
					{ufoSighting.attributes.summary}
				</p>
				<span class="text-lg">Duration</span>
				<p class="mb-2">{ufoSighting.attributes.duration}</p>
				<span class="text-lg">Observation</span>
				<p>{ufoSighting.attributes.text}</p>
			</section>

			<div class="basis-1/2 min-h-[500px]">
				<ArcMap
					{mapProperties}
					mapViewProperties={{
						center: [ufoSighting.attributes.city_longitude, ufoSighting.attributes.city_latitude],
						zoom: 10
					}}
					{featureLayers}
				/>
			</div>
		</div>
	{/if}
</section>
