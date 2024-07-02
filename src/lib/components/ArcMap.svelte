<script lang="ts">
	import Color from '@arcgis/core/Color';
	import Graphic from '@arcgis/core/Graphic';
	import '@arcgis/core/assets/esri/themes/light/main.css';
	import Point from '@arcgis/core/geometry/Point';
	import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
	import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
	import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
	import type SearchSource from '@arcgis/core/widgets/Search/SearchSource';
	import type { ArcgisMap } from '@arcgis/map-components/dist/components/arcgis-map';

	import { onMount } from 'svelte';

	export let center = new Point();
	export let centerGraphic = true;
	export let featureLayers: FeatureLayer[] = [];
	export let layerList = false;
	export let legend = false;
	export let mounted = false;
	export let search = false;
	export let sources: SearchSource[] = [];
	export let zoom = 10;

	let arcgisMap: ArcgisMap | null = null;

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

	onMount(async () => {
		await import('@arcgis/map-components/dist/components/arcgis-layer-list');
		await import('@arcgis/map-components/dist/components/arcgis-legend');
		await import('@arcgis/map-components/dist/components/arcgis-map');
		await import('@arcgis/map-components/dist/components/arcgis-placement');
		await import('@arcgis/map-components/dist/components/arcgis-search');
		mounted = true;
	});

	function handleArcgisViewReadyChange(event: CustomEvent) {
		arcgisMap = event.target as ArcgisMap;

		if (arcgisMap && centerGraphic) {
			addCenterGraphic(arcgisMap);
		}

		if (featureLayers) {
			arcgisMap.addLayers(featureLayers);
		}
	}
</script>

{#if mounted}
	<arcgis-map
		basemap="topo-vector"
		{center}
		class="flex-1"
		on:arcgisViewReadyChange={handleArcgisViewReadyChange}
		{zoom}
	>
		{#if search}
			<arcgis-search position="top-right" {sources} />
		{/if}

		{#if layerList}
			<arcgis-layer-list position="top-right" />
		{/if}

		{#if legend}
			<arcgis-legend position="bottom-right" />
		{/if}
	</arcgis-map>
{:else}
	<p>Loading...</p>
{/if}
