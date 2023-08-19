import Color from '@arcgis/core/Color';
import Graphic from '@arcgis/core/Graphic';
import Map from '@arcgis/core/Map';
import WebMap from '@arcgis/core/WebMap';
import '@arcgis/core/assets/esri/themes/light/main.css';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import MapView from '@arcgis/core/views/MapView';
import Expand from '@arcgis/core/widgets/Expand';
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';

let map = new Map();
let mapView = new MapView({ map });
let webMap = new WebMap();

export const addCenterGraphic = async (view: MapView | undefined) => {
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
		geometry: view?.center,
		symbol: simpleMarkerSymbol
	});

	view?.graphics.add(centerGraphic);
};

export const addFeatureLayer = async (
	map: Map | WebMap,
	featureLayerProperties: __esri.FeatureLayerProperties
) => {
	const featureLayer = new FeatureLayer(featureLayerProperties);
	map.add(featureLayer);
};

export const addLayerList = async (view: MapView | undefined) => {
	view?.ui.add(
		new Expand({
			content: new LayerList({
				listItemCreatedFunction: (event) => {
					const item = event.item;
					if (item.layer.type != 'group') {
						item.panel = {
							content: 'legend',
							open: true
						};
					}
				},
				view
			})
		}),
		'top-right'
	);
};

export const addLegend = async (view: MapView | undefined) => {
	view?.ui.add(new Expand({ content: new Legend({ view }) }), 'top-right');
};

export const createMap = async (mapProperties: __esri.MapProperties | undefined) => {
	if (mapProperties) {
		map = new Map(mapProperties);
	}
	return map;
};

export const createMapView = async (
	container: HTMLDivElement,
	map: Map | WebMap,
	mapViewProperties: __esri.MapViewProperties | undefined
) => {
	if (mapViewProperties) {
		mapView = new MapView(mapViewProperties);
		mapView.map = map;
		mapView.container = container;
	}
	return mapView;
};

export const createWebMap = async (webMapProperties: __esri.WebMapProperties | undefined) => {
	if (webMapProperties) {
		webMap = new WebMap(webMapProperties);
	}
	return webMap;
};
