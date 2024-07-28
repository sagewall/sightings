import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import BigfootList from './BigfootList.svelte';

const features = [
	{
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
	},
	{
		attributes: {
			observed:
				"My husband and I went to check on a friend's cabin on Storm Mountain north of Drake, CO. While behind the cabin we thought we heard voices like a small kid hollering I so went to see.  We were in the national forest behind the cabin. I went on ahead of  my husband. He has a bad back and doesn't walk far. We had walkie talkies. I went on ahead where the sound was coming from. I was talking to my husband on the walkie talkie. When I went up the hill in the wooded area  I could hear limbs cracking like someone walking nearby. I saw a rock outcropping area. I felt like I got zapped by infra-sound. I took a picture in that direction of the noise and child like sounds. My phone went dead but my w.t. I had my was still working. I was disoriented and did not know which way to go so husband clacked rocks together making noise so I would know where to go. I was in a daze. I found my husband, went back to cabin and charged my phone to look at the pictures I took, and there he was standing behind a tree, looking at me. It sounded like there was more than one. Our friends that own cabin have heard sounds at night, it is in a secluded area.",
			location_details: 'Storm Mountain  private road',
			county: 'Larimer County',
			state: 'Colorado',
			season: 'Spring',
			title:
				'Report 62929: Possible Sasquatch Photo (or Blobsquatch) from Storm Mountain, 10 miles NE of Estes Park',
			latitude: 40.26821,
			longitude: -105.1821,
			date: 1558742400000,
			number: 62929,
			classification: 'Class B',
			geohash: '9xjjnd8er6',
			temperature_high: 75.5,
			temperature_mid: 59.9,
			temperature_low: 41.1,
			dew_point: 36.9,
			humidity: 45.9,
			cloud_cover: 17.4,
			moon_phase: 0.72,
			precip_intensity: 0,
			precip_probability: 0,
			precip_type: null,
			pressure: 1012.2,
			summary: 'Clear conditions throughout the day.',
			conditions: 'Clear',
			uv_index: '9.0',
			visibility: 9.6,
			wind_bearing: 90.7,
			wind_speed: 16.6,
			ObjectId: 4369
		},
		geometry: {
			x: -11708817.81256718,
			y: 4904994.716830364
		}
	},
	{
		attributes: {
			observed:
				'Oh my God is all that we can say. It is Thursday 08/23/18 and we are just getting to our vehicle from a harrowing hike. We were hiking the road at Kenosha Pass on the east side that takes you to the twin cones above tree line. We began our hike at noon and hiked up the road. We reached the twin cone tree line area at 3:30pm. It was a beautiful and uneventful hike until we were headed back down the road. My daughter had said she thought that she had heard a tree knock and I was being silly and took a rock and knocked on a large rock off of the road and then tossed the rock about 5 ft off of the road. Literally 2 minutes later we both heard multiple loud tree knocking and rocks were whizzing past our heads. The stench was unbearable-like nothing I have ever smelled before. My 21yr.old daughter began to scream and cry as we were under attack by someone or something. I was so startled that I just stood there frozen as this dark figure was staring back at me. I couldn’t move. My daughter grabbed my arm and we took off. I had an air horn that I depressed 3 times as we were running away and that seemed to deter the rock throwing. The rock throwing continued for 5 more minutes as we ran down the hill. We were almost to our vehicle which was parked off the dirt road when we heard a loud guttural whoop off the road abit and we just kept running to the car so very very afraid! We made it back to our vehicle at 6:15pm. I will never return and we are not okay with this. This needs to be investigated please.',
			location_details:
				'The road on the east side of Kenosha Pass Campground that takes you up to the Twin Cones. The rock throwing and tree knocking occurred off the road about 15 minutes from the top. It was at the campsite on the right side.',
			county: 'Park County',
			state: 'Colorado',
			season: 'Summer',
			title:
				'Report 60877: Mother and daughter have a scary daytime encounter while hiking on North Twin Cone',
			latitude: 39.4191,
			longitude: -105.7065,
			date: 1534982400000,
			number: 60877,
			classification: 'Class B',
			geohash: '9xhb684buh',
			temperature_high: 70.9,
			temperature_mid: 59,
			temperature_low: 48.5,
			dew_point: 39,
			humidity: 53.3,
			cloud_cover: 26.1,
			moon_phase: 0.41,
			precip_intensity: 0.009,
			precip_probability: 100,
			precip_type: "['rain']",
			pressure: 1015,
			summary: 'Partly cloudy throughout the day with morning rain.',
			conditions: 'Rain, Partially cloudy',
			uv_index: '9.0',
			visibility: 9.9,
			wind_bearing: 313.3,
			wind_speed: 22.5,
			ObjectId: 4406
		},
		geometry: {
			x: -11767193.753539173,
			y: 4781883.091511191
		}
	}
];

const position = {
	timestamp: 1722172693178,
	coords: {
		accuracy: 48.234,
		latitude: 39.6288156,
		longitude: -104.7027664,
		altitude: null,
		altitudeAccuracy: null,
		heading: null,
		speed: null
	}
};

test('renders list items for each bigfoot sighting', () => {
	render(BigfootList, { position, bigfootSightings: { features } });
	const listItems = screen.getAllByRole('listitem');
	expect(listItems.length).toBe(features.length);
});

test('if the positions is undefined display a message', () => {
	render(BigfootList, { position: undefined, bigfootSightings: { features: [] } });
	const heading = screen.getByRole('heading');
	expect(heading).toHaveTextContent('Could not determine your location');
});

test('renders no list items when there are no bigfoot sightings', () => {
	render(BigfootList, { position: undefined, bigfootSightings: { features: [] } });
	const listItems = screen.queryAllByRole('listitem');
	expect(listItems.length).toBe(0);
});
