import type { BigfootSightings } from '$lib/types';
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
			'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/bfro/FeatureServer/0/query?' +
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
					orderByFields: 'date DESC',
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
				bigfootSightings: {
					features: []
				} as BigfootSightings
			};
		}

		if (response.status === 200) {
			const bigfootSightings: BigfootSightings = await response.json();
			return {
				position,
				bigfootSightings
			};
		}
		throw error(response.status);
	} catch {
		return {
			position: undefined,
			bigfootSightings: {
				features: []
			} as BigfootSightings
		};
	}
}
