import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import UFOSummary from './UFOSummary.svelte';

const features = [
	{
		attributes: {
			summary: 'It was moving very fast, and travelling speed and direction was uneven',
			country: null,
			city: 'Ahmedabad',
			state: null,
			date_time: 1671706200000,
			shape: 'unknown',
			duration: '15 seconds',
			stats:
				'Occurred : 12/22/2022 10:50  (Entered as : 12/22/2022 10:50 AM) Reported: 12/22/2022 3:50:33 AM 03:50 Posted: 12/22/2022 Location: Ahmedabad,  Shape: Unknown Duration: 15 seconds Characteristics: There were lights on the object, This is a possible UFO abduction case',
			report_link: 'http://www.nuforc.org/webreports/reports/173/S173517.html',
			text: 'It was moving very fast, and travelling speed and direction was uneven \n \nI am a astrophotographer and I was casually making a star trail and during editing time I noticed a strange light. I am sure that it was not a satellite or a asteroid or any space debris cause the light was travelling from earth to space it was going horizontally and it was very fast and the whole thing was blinking like not a small part like lights but the whole thing and the same incident happened in 2021 on the same day but it was observed by a pilot during his flight and even in 0.25x the speed is way too much of that object, the shape is like it was blinking and moving very fast and as a astrophotographer I checked if there was any satellite or asteroid passing through but no the sky was clear with stars only',
			posted: 1671667200000,
			city_latitude: null,
			city_longitude: null,
			ObjectId: 7481
		}
	},
	{
		attributes: {
			summary: 'I saw a light that was not flashing moving then disappeared',
			country: 'USA',
			city: 'Newark',
			state: 'DE',
			date_time: 1671701340000,
			shape: 'light',
			duration: '30 secomds',
			stats:
				'Occurred : 12/22/2022 09:29  (Entered as : 12/22/2022 9:29 AM) Reported: 12/22/2022 6:35:02 AM 06:35 Posted: 12/22/2022 Location: Newark, DE Shape: Light Duration: 30 secomds Characteristics: There were lights on the object, There was an aura or haze around the object',
			report_link: 'http://www.nuforc.org/webreports/reports/173/S173518.html',
			text: 'I saw a light that was not flashing moving then disappeared \n \nI was driving to work (home Depot) when I pulled into the parking lot and I saw this light that was not a airplane. It was really bright. I was trying to get my phone to take a picture and it was gone.',
			posted: 1671667200000,
			city_latitude: 39.67027989690722,
			city_longitude: -75.72071108247422,
			ObjectId: 7686
		},
		geometry: {
			x: -8429191.000205617,
			y: 4818143.301621923
		}
	},
	{
		attributes: {
			summary: 'Strange flying objects moving in different directions',
			country: 'South Africa',
			city: 'Johannesburg',
			state: 'GAUTENG',
			date_time: 1671667200000,
			shape: 'triangle',
			duration: '15 min',
			stats:
				'Occurred : 12/22/2022 00:00  (Entered as : 12/22/2022 12:00 AM) Reported: 12/21/2022 3:29:15 PM 15:29 Posted: 12/22/2022 Location: Johannesburg, Gauteng Shape: Triangle Duration: 15 min Characteristics: There were lights on the object, There was an aura or haze around the object, The object emitted other objects, The object changed color',
			report_link: 'http://www.nuforc.org/webreports/reports/173/S173508.html',
			text: "Strange flying objects moving in different directions \n \nFor the past 2 months or so, I have noticed strange flying objects in the skies above my house. At first I thought maybe it could be a satellite or drone however the more I observed these objects, the stranger it got. \n \nThere was 1 object at first, it had a bright orange/yellow colour and the shape seemed to be a triangle however the 'bottom' of the triangle was not straight and instead tilted inwards. Hard to explain however imagine a diamond with 4 corners, now reverse the bottom half of the diamond to its shaped inside instead of outside. \n \nSuddenly now there is more objects howerving in the sky. One of them seemed to be bright blue and would travel up/down/left or right. While observing this object, it would suddenly disappear out of nowhere and reappear more higher up in the sky. \n \nReason why I am reporting this is cause now these objects seem to deploy some weird blue light that would travel closer to the ground as if they are coming to get me. When these unexplained blue lights travel closer to me, I get freaked out and would run back into the house. A few minutes later I would go outside again and they would seem to be traveling back into the skies. \n \nI have noticed how these lights can travel from the clouds to maybe 500 meters above the ground and quickly travel back into the skies. These lights seemed to follow the objects which are hovering above the skies. \n \nI understand if I may seem insane however I strongly believe there's something up there that can't be explained and it's movements don't make sense for such a small object to be so high up in the clouds and move the way they do. \n \nToday December 21 at around 10pm to December 22 at around 12:30am, the skies were full of these unexplained objects which seemed to flash red/blue at times. One of the lights that followed these objects traveled closer and closer to the ground, the moment I tried to identify the shape, the light would then disappear out of nowhere as if it was invisible \n \nI hope someone can give me an explanation for all of this cause the internet doesn't seem to have the answers i'm looking for. \n \nTo clarify, I am reporting the triangle flying objects and the small blue lights that seem to follow them at a lower distance than them. The objects seem to be high up in the clouds, moving slowly in different directions and the lights seem to be closer to the ground also moving strangely in different directions \n \nThe objects are always surrounded by similar looking objects and at times they would all move together in a formation \n \nAnyway I hope someone understands what I'm trying to explain cause to be honest, I can't. I don't know what they are but I am certain it's not a satellite or drone hovering above my house \n",
			posted: 1671667200000,
			city_latitude: null,
			city_longitude: null,
			ObjectId: 7676
		}
	}
];

test('renders list items for each UFO sighting', () => {
	render(UFOSummary, { ufoSightings: { features } });
	const listItems = screen.getAllByRole('listitem');
	expect(listItems.length).toBe(features.length);
});

test('renders no list items when there are no UFO sightings', () => {
	render(UFOSummary, { ufoSightings: { features: [] } });
	const listItems = screen.queryAllByRole('listitem');
	expect(listItems.length).toBe(0);
});
