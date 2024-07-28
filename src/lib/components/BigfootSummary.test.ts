import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import BigfootSummary from './BigfootSummary.svelte';

const features = [
	{
		attributes: {
			observed:
				"As we were driving along State Route 350 toward State Route 123 south of Oregonia, we came to the Loveland Bike Trail that runs next to the Little Miami River. As I slowed down near bike path crossing, we looked out the passenger side of the car and saw a large black figure standing [a distance] up the bike path, facing the river, while it was snowing. The ground was covered with at least three inches of snow so it didn't appear that someone would be on the bike path biking or walking the trail. The weather was not ideal for anyone to be hunting or walking on the path at that time. The figure appeared to have come from the woods and was walking toward the river. It was difficult to estimate the size of the figure when they saw it. It didn’t appear to be a hunter as they would have been wearing an orange vest, or at least an obvious clothing pattern.",
			location_details:
				'The sighting was [approx 120] yards north of State Route 350 on the Loveland Bike trial. Approximately three miles south of Oregonia, Ohio. [Investigator (MM) Notes: GPS coordinates for approximate spot where the figure was standing: 39.408358, -84.100058',
			county: 'Warren County',
			state: 'Ohio',
			season: 'Winter',
			title:
				'Report 75464: Multiple witness daylight motorist sighting at bike trail half mile west of Fort Ancient',
			latitude: 39.40836,
			longitude: -84.10006,
			date: 1677542400000,
			number: 75464,
			classification: 'Class B',
			geohash: 'dph0nq04qd',
			temperature_high: 51.4,
			temperature_mid: 45.2,
			temperature_low: 39.5,
			dew_point: 36.8,
			humidity: 72.4,
			cloud_cover: 66.6,
			moon_phase: 0.28,
			precip_intensity: 0,
			precip_probability: 0,
			precip_type: null,
			pressure: 1010,
			summary: 'Partly cloudy throughout the day.',
			conditions: 'Partially cloudy',
			uv_index: '8.0',
			visibility: 9.8,
			wind_bearing: 298.2,
			wind_speed: 21.7,
			ObjectId: 391
		},
		geometry: {
			x: -9361975.854883755,
			y: 4780335.589513082
		}
	},
	{
		attributes: {
			observed:
				'My husband and I heard strange sounds for 2 nights in February 2023 and laughed about how they sounded like the Bigfoot sounds on television shows. The 3rd night at dusk we were on our carport looking into the woods that border our property in Heflin (Cleburne County) Alabama. We saw what looked like Bigfoot peeking around a tree at us. We watched it for approximately 5 minutes as it appeared to look at us from the left then the right [of the tree trunk]. I dismissed it as being a distortion with the trees and wind. I turned to go into the house and looked back and distinctly saw what could only be Bigfoot running away. I yelled for my husband and he also saw it running away. It had our hearts beating wildly and the hair standing up on our arms. There was no mistaking what we saw!',
			location_details:
				'At the bottom of the woods next to the small cow pasture near our house. [Investigator (MM) notes:  GPS coordinates for where the bigfoot was standing:  33.651749,-85.523357',
			county: 'Cleburne County',
			state: 'Alabama',
			season: 'Winter',
			title:
				'Report 75577: Daylight sighting, 2 witnesses, outside Heflin 10 miles from GA border off I-20',
			latitude: 33.65175,
			longitude: -85.52335,
			date: 1675900800000,
			number: 75577,
			classification: 'Class A',
			geohash: 'djgpmy5g9s',
			temperature_high: 67.8,
			temperature_mid: 61,
			temperature_low: 50.7,
			dew_point: 54.1,
			humidity: 78.4,
			cloud_cover: 83.3,
			moon_phase: 0.64,
			precip_intensity: 0.018,
			precip_probability: 100,
			precip_type: "['rain']",
			pressure: 1018.7,
			summary: 'Partly cloudy throughout the day with a chance of rain throughout the day.',
			conditions: 'Rain, Partially cloudy',
			uv_index: '1.0',
			visibility: 9.6,
			wind_bearing: 207.2,
			wind_speed: 12.4,
			ObjectId: 4631
		},
		geometry: {
			x: -9520415.772934914,
			y: 3982135.8668471784
		}
	},
	{
		attributes: {
			observed:
				"Shortly after dawn I was out on the back porch having coffee and watching my dog on her leash. I have heard coyotes lately and I don't let my dog out alone. I was looking at the deer tracks in the snow and had 4 deer in the back yard the previous night. There is a large field next to the house. When I was looking in that direction I noticed some strange tracks in the snow.  About an hour or so later I walked over to inspect the tracks. The tracks were similar to human tracks, but different. The thing that was most apparent to me was the distance between the foot prints, which approximately 4' apart. There were no shoe treads in the tracks.  I believe the tracks were made sometime after 11pm and 3-5am, because I was outside until around 11pm.  Then I was up around 6am but it was dark at that time. I didn't see them until it was light. The tracks had fresh snow inside the tracks indicating they were several hours old. I could not positively see toe prints. I have pictures of the tracks on my phone.",
			location_details: 'Shady Drive, off of Warren Road',
			county: 'Indiana County',
			state: 'Pennsylvania',
			season: 'Winter',
			title: 'Report 75305: Possible trackway found and photographed 50 miles NE of Pittsburgh',
			latitude: 40.60756,
			longitude: -79.20052,
			date: 1671494400000,
			number: 75305,
			classification: 'Class B',
			geohash: 'dppxj8runj',
			temperature_high: 32.8,
			temperature_mid: 26.1,
			temperature_low: 19.6,
			dew_point: 20.3,
			humidity: 79.3,
			cloud_cover: 86.9,
			moon_phase: 0.91,
			precip_intensity: 0,
			precip_probability: 0,
			precip_type: null,
			pressure: 1031.2,
			summary: 'Partly cloudy throughout the day.',
			conditions: 'Partially cloudy',
			uv_index: '4.0',
			visibility: 9.9,
			wind_bearing: 356.8,
			wind_speed: 4.7,
			ObjectId: 770
		},
		geometry: {
			x: -8816561.556962479,
			y: 4954628.048202216
		}
	}
];

test('renders list items for each bigfoot sighting', () => {
	render(BigfootSummary, { bigfootSightings: { features } });
	const listItems = screen.getAllByRole('listitem');
	expect(listItems.length).toBe(features.length);
});

test('renders no list items when there are no bigfoot sightings', () => {
	render(BigfootSummary, { bigfootSightings: { features: [] } });
	const listItems = screen.queryAllByRole('listitem');
	expect(listItems.length).toBe(0);
});
