import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';

import BigfootAccordian from './BigfootAccordian.svelte';

const feature = {
	attributes: {
		observed:
			'On Thursday July 25 my girlfriend and I we hiking in Mayflower Basin south of Co 91. We were up in the basin and Helen had gone ahead to the foot of the basin. I was about 100 yds off the three miner log cabin remnants sitting on a rock enjoying peanuts and water when, looking west, I saw a very large brown biped approach the snow wall / cornice and seek to climb it. The biped was unable to climb up over 20 feet, moved back down laterally to its right, and then down to the ground off the snow. It then walked on two legs very briskly to the right, subsequently out of my view. About 4-5 minutes later a hiker with his dog came walking down the trail. And I later saw this brown biped from time to time walking above the snow cornice southbound. Did not see it again. Helen returned to me, we discussed, then walked down to the locked gated prohibiting cars into the basin to talk with the hiker. His name was Robbie, his dog, Dallas. We agreed to scale up the trail to where I had seen the brown biped. Helen took longer, but Robbie and I reached the area, found hand prints in the snow in an arch, one print lower with three big fingers and one thumb. Foot prints were not descriptive of toes, arch heel.  We took Iphone photos and will share if interested. We then traversed to right, north, on difficult terrain. That is quite slanted where the biped moved quickly and easily. No further sighting. This was now about 2:30 pm when Inhad seen the biped about 1:45 pm. Returned back to dirt road and the parking lot by bushwacking through forest.',
		location_details:
			'Stop at paved parking lot off Co 91 to enter dirt road up to Mayflower Gulch. Head south up road. At closed cattle gate, walk to right past wooden barrier fence up trail past two switchbacks. Small white rock just below snow cornice/wall is just beyond where biped sought to scale the snow and could not. Descended laterally and moved briskly along very titled hillside. This was very hard for me, Robert and later Helen.',
		county: 'Summit County',
		state: 'Colorado',
		season: 'Summer',
		title: 'Report 63153: Daylight sighting by hikers at Mayflower Gulch outside Leadville',
		latitude: 39.41087,
		longitude: -106.1444,
		date: 1564012800000,
		number: 63153,
		classification: 'Class A',
		geohash: '9xh80ws0bn',
		temperature_high: 60,
		temperature_mid: 54,
		temperature_low: 49,
		dew_point: 44.5,
		humidity: 70.5,
		cloud_cover: 67.6,
		moon_phase: 0.79,
		precip_intensity: 0.112,
		precip_probability: 100,
		precip_type: "['rain']",
		pressure: 1018.1,
		summary: 'Partly cloudy throughout the day with rain.',
		conditions: 'Rain, Partially cloudy',
		uv_index: '9.0',
		visibility: 9.7,
		wind_bearing: 334.6,
		wind_speed: 14.1,
		ObjectId: 4634
	},
	geometry: {
		x: -11815940.558557548,
		y: 4780697.228318341
	}
};

test('there is a list item for the bigfoot sighting', () => {
	render(BigfootAccordian, { bigfootSighting: feature });
	const timeAndTitle = screen.getByTestId('time-and-title');
	expect(timeAndTitle).toHaveTextContent(
		'7/24/2019 - Daylight sighting by hikers at Mayflower Gulch outside Leadville'
	);
});

test('renders correct content for a bigfoot sighting on click', async () => {
	const user = userEvent.setup();
	render(BigfootAccordian, { bigfootSighting: feature });

	const button = screen.getByRole('button');
	await user.click(button);

	const coordinates = screen.getByTestId('coordinates');
	const locationDetails = screen.getByTestId('location-details');
	const observed = screen.getByTestId('observed');

	expect(coordinates).toHaveTextContent('39.41087, -106.1444');
	expect(locationDetails).toHaveTextContent(
		'Stop at paved parking lot off Co 91 to enter dirt road up to Mayflower Gulch.'
	);
	expect(observed).toHaveTextContent(
		'On Thursday July 25 my girlfriend and I we hiking in Mayflower Basin south of Co 91'
	);
});
