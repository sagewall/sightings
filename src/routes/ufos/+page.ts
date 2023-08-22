import type { UFOSightings } from '$lib/types';
import { error } from '@sveltejs/kit';

async function getPosition(options?: PositionOptions): Promise<GeolocationPosition> {
	return new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition(resolve, reject, options)
	);
}

export async function load({ fetch }) {
	const requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow'
	};

	const positionOptions = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	try {
		const position = await getPosition(positionOptions);

		const response = await fetch(
			'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/nuforc/FeatureServer/0/query?' +
				new URLSearchParams({
					distance: '100',
					geometry: `{
						"x": ${position.coords.longitude},
						"y": ${position.coords.latitude},
						"spatialReference": {
							"wkid": 4326
						}
					}`,
					geometryType: 'esriGeometryPoint',
					orderByFields: 'date_time DESC',
					outFields: '*',
					resultRecordCount: '10',
					units: 'esriSRUnit_StatuteMile',
					f: 'json'
				}),
			requestOptions
		);

		if (response.status === 404) {
			return {
				position,
				ufoSightings: {
					features: []
				} as UFOSightings
			};
		}

		if (response.status === 200) {
			const ufoSightings: UFOSightings = await response.json();
			return {
				position,
				ufoSightings: ufoSightings
			};
		}
		throw error(response.status);
	} catch {
		return {
			position: undefined,
			ufoSightings: {
				features: []
			} as UFOSightings
		};
	}
}
