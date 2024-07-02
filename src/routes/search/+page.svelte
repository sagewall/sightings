<script>
	import ArcMap from '$lib/components/ArcMap.svelte';
	import { Point } from '@arcgis/core/geometry';
	import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
	import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';

	const center = new Point({
		latitude: 40,
		longitude: -97
	});

	const bigfootFeatureLayer = new FeatureLayer({
		popupEnabled: false,
		outFields: ['*'],
		url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/bfro/FeatureServer/0'
	});

	const ufoFeatureLayer = new FeatureLayer({
		popupEnabled: false,
		outFields: ['*'],
		url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/nuforc/FeatureServer/0'
	});

	const sources = [
		new LayerSearchSource({
			layer: bigfootFeatureLayer,
			name: 'Bigfoot Sightings',
			searchFields: [
				'observed',
				'location_details',
				'county',
				'state',
				'season',
				'title',
				'date',
				'classification',
				'summary',
				'conditions'
			],
			suggestionsEnabled: true
		}),
		new LayerSearchSource({
			layer: ufoFeatureLayer,
			name: 'UFO Sightings',
			searchFields: [
				'summary',
				'country',
				'city',
				'state',
				'date_time',
				'duration',
				'stats',
				'report_link',
				'text',
				'posted'
			],
			suggestionsEnabled: true
		})
	];
</script>

<ArcMap {center} centerGraphic={false} search {sources} zoom={4}></ArcMap>
