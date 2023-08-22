export type BigfootSighting = {
	attributes: {
		observed: string;
		location_details: string;
		county: string;
		state: string;
		season: string;
		title: string;
		latitude: number;
		longitude: number;
		date: number;
		number: number;
		classification: string;
		geohash: string;
		temperature_high: number;
		temperature_mid: number;
		temperature_low: number;
		dew_point: number;
		humidity: number;
		cloud_cover: number;
		moon_phase: number;
		precip_intensity: number;
		precip_probability: number;
		precip_type: string;
		pressure: number;
		summary: string;
		conditions: string;
		uv_index: string;
		visibility: number;
		wind_bearing: number;
		wind_speed: number;
		ObjectId: number;
	};
	geometry: {
		x: number;
		y: number;
	};
};

export type BigfootSightings = {
	features: BigfootSighting[];
};

export type UFOSighting = {
	attributes: {
		summary: string;
		country: string;
		city: string;
		state: string;
		date_time: number;
		shape: string;
		duration: string;
		stats: string;
		report_link: string;
		text: string;
		posted: number;
		city_latitude: number;
		city_longitude: number;
		ObjectId: number;
	};
	geometry: {
		x: number;
		y: number;
	};
};

export type UFOSightings = {
	features: UFOSighting[];
};
