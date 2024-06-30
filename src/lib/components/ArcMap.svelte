<script lang="ts">
	import Color from '@arcgis/core/Color';
	import Graphic from '@arcgis/core/Graphic';
	import type Map from '@arcgis/core/Map';
	import '@arcgis/core/assets/esri/themes/light/main.css';
	import Point from '@arcgis/core/geometry/Point';
	import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
	import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
	import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
	import type { ArcgisMap } from '@arcgis/map-components/dist/components/arcgis-map';
	import { onMount } from 'svelte';

	export let center = new Point();
	export let centerGraphic = true;
	export let featureLayers: FeatureLayer[] = [];
	export let layerList = false;
	export let legend = false;
	export let zoom = 10;

	let arcgisMap: ArcgisMap | null = null;
	let mounted = false;

	async function addCenterGraphic(arcgisMap: ArcgisMap) {
		const simpleMarkerSymbol = new SimpleMarkerSymbol({
			outline: new SimpleLineSymbol({
				color: new Color([0, 0, 0, 0.75]),
				style: 'solid',
				width: 1
			}),
			size: 24,
			style: 'circle'
		});

		const centerGraphic = new Graphic({
			geometry: arcgisMap?.center,
			symbol: simpleMarkerSymbol
		});

		arcgisMap?.graphics.add(centerGraphic);
	}

	async function addFeatureLayer(map: Map, featureLayer: FeatureLayer) {
		map.add(featureLayer);
	}

	onMount(async () => {
		await import('@arcgis/map-components/dist/components/arcgis-layer-list');
		await import('@arcgis/map-components/dist/components/arcgis-legend');
		await import('@arcgis/map-components/dist/components/arcgis-map');
		await import('@arcgis/map-components/dist/components/arcgis-placement');
		mounted = true;
	});

	function handleArcgisViewReadyChange(event: CustomEvent) {
		arcgisMap = event.target as ArcgisMap;

		if (arcgisMap && centerGraphic) {
			addCenterGraphic(arcgisMap);
		}

		if (featureLayers) {
			featureLayers.forEach((featureLayer) => {
				if (arcgisMap) {
					addFeatureLayer(arcgisMap.map, featureLayer);
				}
			});
		}
	}
</script>

{#if mounted}
	<arcgis-map
		basemap="topo-vector"
		{center}
		class="flex-1 h-full"
		on:arcgisViewReadyChange={handleArcgisViewReadyChange}
		{zoom}
	>
		<arcgis-placement position="top-right">
			{#if layerList}
				<arcgis-layer-list />
			{/if}
		</arcgis-placement>
		<arcgis-placement position="bottom-right">
			{#if legend}
				<arcgis-legend />
			{/if}
		</arcgis-placement>
	</arcgis-map>
{:else}
	<div>Loading</div>
{/if}
