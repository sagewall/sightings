<script lang="ts">
	import type { UFOSighting } from '$lib/types';
	import Point from '@arcgis/core/geometry/Point';
	import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
	import ArcMap from './ArcMap.svelte';

	const featureLayers: FeatureLayer[] = [
		new FeatureLayer({
			popupEnabled: false,
			portalItem: {
				id: 'bdf4bc300ff64c9fa789605eab19aae2'
			}
		})
	];

	export let ufoSighting: UFOSighting;
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
		<span data-testid="time-and-location"
			>{ufoSighting.attributes.date_time &&
				new Date(ufoSighting.attributes.date_time).toLocaleDateString()} - {ufoSighting.attributes
				.city}, {ufoSighting.attributes.state}</span
		>
	</header>
	{#if open}
		<div class="flex flex-row space-x-3">
			<section class="basis-1/2 flex flex-col">
				<span class="text-lg">Location details</span>
				<p data-testid="location-details">
					{ufoSighting.attributes.city_latitude}, {ufoSighting.attributes.city_longitude}
				</p>
				<p class="mb-2" data-testid="summary">
					{ufoSighting.attributes.summary}
				</p>
				<span class="text-lg">Duration</span>
				<p class="mb-2" data-testid="duration">{ufoSighting.attributes.duration}</p>
				<span class="text-lg">Observation</span>
				<p data-testid="observation">{ufoSighting.attributes.text}</p>
				<p>
					<a
						class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
						data-testid="report-link"
						href={ufoSighting.attributes.report_link}>NUFORC Report</a
					>
				</p>
			</section>

			{#if ufoSighting.attributes.city_latitude && ufoSighting.attributes.city_longitude}
				<div class="basis-1/2 min-h-[500px]" data-testid="arcgis-map-container">
					<ArcMap
						center={new Point({
							latitude: ufoSighting.attributes.city_latitude,
							longitude: ufoSighting.attributes.city_longitude
						})}
						zoom={10}
						{featureLayers}
					/>
				</div>
			{/if}
		</div>
	{/if}
</section>
