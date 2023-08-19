<script lang="ts">
	import type Map from '@arcgis/core/Map';
	import type WebMap from '@arcgis/core/WebMap';
	import type MapView from '@arcgis/core/views/MapView';
	import { onDestroy, onMount } from 'svelte';

	export let featureLayers: __esri.FeatureLayerProperties[] | undefined = undefined;
	export let mapProperties: __esri.MapProperties | undefined = undefined;
	export let mapViewProperties: __esri.MapViewProperties | undefined = undefined;
	export let webMapProperties: __esri.WebMapProperties | undefined = undefined;

	export let centerGraphic = true;
	export let layerList = false;
	export let legend = false;

	const isSsr = typeof window === 'undefined';
	let map: Map | undefined = undefined;
	let view: MapView | undefined = undefined;
	let webMap: WebMap | undefined = undefined;

	let viewDiv: HTMLDivElement;

	onMount(async () => {
		if (!map && !isSsr) {
			if (webMapProperties) {
				const { createWebMap, createMapView } = await import('../arcgisUtils');
				webMap = await createWebMap(webMapProperties);
				view = await createMapView(viewDiv, webMap, mapViewProperties);
			}

			if (mapProperties) {
				const { createMap, createMapView } = await import('../arcgisUtils');
				map = await createMap(mapProperties);
				view = await createMapView(viewDiv, map, mapViewProperties);
			}

			if (centerGraphic) {
				const { addCenterGraphic } = await import('../arcgisUtils');
				addCenterGraphic(view);
			}

			if (featureLayers) {
				const { addFeatureLayer } = await import('../arcgisUtils');
				featureLayers.forEach((featureLayerProperties) => {
					map && addFeatureLayer(map, featureLayerProperties);
				});
			}

			if (layerList) {
				const { addLayerList } = await import('../arcgisUtils');
				addLayerList(view);
			}

			if (legend) {
				const { addLegend } = await import('../arcgisUtils');
				addLegend(view);
			}
		}
	});

	onDestroy(() => {
		view && view.destroy();
	});
</script>

{#if !isSsr}
	<div id="mapViewDiv" bind:this={viewDiv} class="flex-1 h-full" />
{:else}
	<div>No map</div>
{/if}
