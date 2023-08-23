import type { BigfootSightings, UFOSightings } from '$lib/types';

export async function load({ fetch }) {
	const requestOptions: RequestInit = {
		method: 'GET',
		redirect: 'follow'
	};

	try {
		const bigfootResponse = await fetch(
			'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/bfro/FeatureServer/0/query?' +
				new URLSearchParams({
					orderByFields: 'date DESC',
					outFields: '*',
					resultRecordCount: '3',
					where: '1=1',
					f: 'json'
				}),
			requestOptions
		);

		const ufoResponse = await fetch(
			'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/nuforc/FeatureServer/0/query?' +
				new URLSearchParams({
					orderByFields: 'date_time DESC',
					outFields: '*',
					resultRecordCount: '3',
					where: '1=1',
					f: 'json'
				}),
			requestOptions
		);

		let bigfootSightings: BigfootSightings = {
			features: []
		};

		let ufoSightings: UFOSightings = {
			features: []
		};

		if (bigfootResponse.status === 200) {
			bigfootSightings = await bigfootResponse.json();
		}

		if (ufoResponse.status === 200) {
			ufoSightings = await ufoResponse.json();
		}

		return {
			bigfootSightings,
			ufoSightings
		};
	} catch {
		return {
			bigfootSightings: {
				features: []
			} as BigfootSightings,
			ufoSightings: {
				features: []
			}
		};
	}
}
