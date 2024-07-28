export type BigfootSighting = {
	attributes: {
		observed: string | null;
		location_details: string | null;
		county: string | null;
		state: string | null;
		season: string | null;
		title: string | null;
		latitude: number | null;
		longitude: number | null;
		date: number | null;
		number: number | null;
		classification: string | null;
		geohash: string | null;
		temperature_high: number | null;
		temperature_mid: number | null;
		temperature_low: number | null;
		dew_point: number | null;
		humidity: number | null;
		cloud_cover: number | null;
		moon_phase: number | null;
		precip_intensity: number | null;
		precip_probability: number | null;
		precip_type: string | null;
		pressure: number | null;
		summary: string | null;
		conditions: string | null;
		uv_index: string | null;
		visibility: number | null;
		wind_bearing: number | null;
		wind_speed: number | null;
		ObjectId: number | null;
	};
	geometry?:
		| {
				x: number;
				y: number;
		  }
		| undefined;
};

export type BigfootSightings = {
	features: BigfootSighting[];
};

export type UFOSighting = {
	attributes: {
		summary: string | null;
		country: string | null;
		city: string | null;
		state: string | null;
		date_time: number | null;
		shape: string | null;
		duration: string | null;
		stats: string | null;
		report_link: string | null;
		text: string | null;
		posted: number | null;
		city_latitude: number | null;
		city_longitude: number | null;
		ObjectId: number | null;
	};
	geometry?:
		| {
				x: number;
				y: number;
		  }
		| undefined;
};

export type UFOSightings = {
	features: UFOSighting[];
};
