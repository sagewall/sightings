<script lang="ts">
	import type { BigfootSighting } from '$lib/types';
	import Point from '@arcgis/core/geometry/Point';
	import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
	import PortalItem from '@arcgis/core/portal/PortalItem';
	import ArcMap from './ArcMap.svelte';

	const featureLayers: FeatureLayer[] = [
		new FeatureLayer({
			popupEnabled: false,
			portalItem: new PortalItem({
				id: 'afc1428f16f94579950431add9625b43'
			})
		})
	];

	export let bigfootSighting: BigfootSighting;
	export let open = false;

	function onClick() {
		open = !open;
	}
</script>

<section class="mb-7">
	<header class="flex space-x-4 font-bold text-xl">
		<button aria-label="Toggle details" class="text-left" on:click={onClick}>
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
		<span data-testid="time-and-title"
			>{bigfootSighting.attributes.date &&
				new Date(bigfootSighting.attributes.date).toLocaleDateString()} - {bigfootSighting.attributes.title?.split(
				':'
			)[1]}</span
		>
	</header>
	{#if open}
		<div class="flex flex-row space-x-3">
			<section class="basis-1/2 flex flex-col">
				<span class="text-lg">Location details</span>
				<p data-testid="coordinates">
					{bigfootSighting.attributes.latitude}, {bigfootSighting.attributes.longitude}
				</p>
				<p class="mb-2" data-testid="location-details">
					{bigfootSighting.attributes.location_details}
				</p>
				<span class="text-lg">Observation</span>
				<p data-testid="observed">{bigfootSighting.attributes.observed}</p>
			</section>

			{#if bigfootSighting.attributes.latitude && bigfootSighting.attributes.longitude}
				<div class="basis-1/2 min-h-[500px]">
					<ArcMap
						center={new Point({
							latitude: bigfootSighting.attributes.latitude,
							longitude: bigfootSighting.attributes.longitude
						})}
						zoom={10}
						{featureLayers}
					/>
				</div>
			{/if}
		</div>
	{/if}
</section>
