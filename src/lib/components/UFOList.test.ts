import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';

import UFOList from './UFOList.svelte';

const features = [
	{
		attributes: {
			summary: 'Egg-shaped object popping in and out of sky at random locations',
			country: 'USA',
			city: 'Denver',
			state: 'CO',
			date_time: 1670774700000,
			shape: 'egg',
			duration: '15 minutes',
			stats:
				'Occurred : 12/11/2022 16:05  (Entered as : 12/11/2022 4:05 PM) Reported: 12/11/2022 3:58:30 PM 15:58 Posted: 12/22/2022 Location: Denver, CO Shape: Egg Duration: 15 minutes',
			report_link: 'http://www.nuforc.org/webreports/reports/173/S173364.html',
			text: 'Egg-shaped object popping in and out of sky at random locations \n \nEgg-shaped object moving across the sky at insane speeds. Would actually pop in and out of the sky and reappear several seconds later in completely different part of the sky.',
			posted: 1671667200000,
			city_latitude: 39.74019963011889,
			city_longitude: -104.97711054161162,
			ObjectId: 7150
		},
		geometry: {
			x: -11685998.490441397,
			y: 4828260.309389195
		}
	},
	{
		attributes: {
			summary: 'Enormous object, looked like a rock, miles long',
			country: 'USA',
			city: 'Colorado springs',
			state: 'CO',
			date_time: 1669751400000,
			shape: 'other',
			duration: '8min',
			stats:
				'Occurred : 11/29/2022 19:50  (Entered as : 11/29/2022 7:50 PM) Reported: 12/12/2022 12:27:33 PM 12:27 Posted: 12/22/2022 Location: Colorado springs, CO Shape: Other Duration: 8min Characteristics: There were lights on the object',
			report_link: 'http://www.nuforc.org/webreports/reports/173/S173379.html',
			text: "Enormous object, looked like a rock, miles long \n \nDriving home from work, it was dark , I saw wat at first I thought it was a plane pulling another plane because they were moving together.. but it didn't have \" normal \" plane lights. It's was just dull white lights .and they were spaced way too far apart.then I realized it was 1 object. And looked like a rock . With dull white lights. Little to no noise. It was massive. I pulled over. . Honestly I was terrified. I didn't try to take a pic, it would not had shown what I was seeing.it was slow moving, and went in the direction of Cheyenne mountain. Other people must have seen this. It was fucking enormous.",
			posted: 1671667200000,
			city_latitude: 38.87714691753403,
			city_longitude: -104.76823722978384,
			ObjectId: 6167
		},
		geometry: {
			x: -11662746.819728423,
			y: 4704089.169199196
		}
	},
	{
		attributes: {
			summary:
				'My buddy suggested we go outside to watch a lunar eclipse when approx at 5:20am we sighted 4 what we thought were stars',
			country: 'USA',
			city: 'Loveland',
			state: 'CO',
			date_time: 1667971200000,
			shape: 'formation',
			duration: null,
			stats:
				'Occurred : 11/9/2022 05:20  (Entered as : 11/09/2022 5:20 AM) Reported: 11/17/2022 10:12:46 PM 22:12 Posted: 12/22/2022 Location: Loveland, CO Shape: Formation Characteristics: The object changed color',
			report_link: 'http://www.nuforc.org/webreports/reports/173/S173054.html',
			text: 'My buddy suggested we go outside to watch a lunar eclipse when approx at 5:20am we sighted 4 what we thought were stars \n \nWe thought we were looking at stars when we noticed that these stars were moving. Two of these four what we thought were stars were moving at the same speed horizontally from each other. Three of these lights were the same light color while what seemed to be the head of the four flying objects had a flashing Blue light and would change from blue to green. And those same two lights thatt were horizontally from each travelled from the western horizon to the eastern horizon at the same speed.',
			posted: 1671667200000,
			city_latitude: 40.4038618357488,
			city_longitude: -105.09342173913043,
			ObjectId: 4681
		},
		geometry: {
			x: -11698946.193722745,
			y: 4924805.115497229
		}
	},
	{
		attributes: {
			summary:
				'We were taking pictures that night of a spectacular (see pics) Lunar Corona of the Full Moon, when later I noticed the UFO in our pics.',
			country: 'USA',
			city: 'Colorado Springs',
			state: 'CO',
			date_time: 1667943900000,
			shape: 'oval',
			duration: null,
			stats:
				'Occurred : 11/8/2022 21:45  (Entered as : 11/08/2022 9:45 PM) Reported: 11/10/2022 3:23:48 PM 15:23 Posted: 12/22/2022 Location: Colorado Springs, CO Shape: Oval Characteristics: The object left a trail, There was an aura or haze around the object',
			report_link: 'http://www.nuforc.org/webreports/reports/172/S172893.html',
			text: 'We were taking pictures that night of a spectacular (see pics) Lunar Corona of the Full Moon, when later I noticed the UFO in our pics. We only took 4 pictures, my husband did with his Samsung Galaxy Note 20 Ultra 5G cell phone. He took 2, then moved about 100 ft to the left, and took 2 more, in total less than 5 mins time I would say. I noticed a glowing orb in all the pics, so I aligned them in the order he took them, and it clearly looks like the orb starts at top of the corona, and moves clockwise around. 4 pics with 4 diff orb locations, in a circular clockwise pattern. You can even see a jet trail or distortion around the orb, making me believe it is a mechanical craft of some kind. This is the 1st time I have ever notified a UFO reporting place before, probably the 1st time I have ever seen anything like this. I have used picwish.com to try and zoom and clarify the object, but I know you guys could do a lot better. I am sending you the 4 original pictures, untouched in anyway. Please let me know if you can make the image better and note anything interesting about it, I would greatly appreciate it! Thanks so much-- \nLaura Quick',
			posted: 1671667200000,
			city_latitude: 38.87714691753403,
			city_longitude: -104.76823722978384,
			ObjectId: 4636
		},
		geometry: {
			x: -11662746.819728423,
			y: 4704089.169199196
		}
	},
	{
		attributes: {
			summary:
				'Oval shaped object very high moving W to E. Both my Wife and I observed it with the naked eye and binoculars. Definetly not an aircraft',
			country: 'USA',
			city: 'Arvada',
			state: 'CO',
			date_time: 1667169300000,
			shape: 'oval',
			duration: '13 mins',
			stats:
				'Occurred : 10/30/2022 22:35  (Entered as : 10/30/2022 10:35 PM) Reported: 10/30/2022 10:52:10 AM 10:52 Posted: 12/22/2022 Location: Arvada, CO Shape: Oval Duration: 13 mins Characteristics: There were lights on the object, The object changed color',
			report_link: 'http://www.nuforc.org/webreports/reports/172/S172714.html',
			text: 'Oval shaped object very high moving W to E. Both my Wife and I observed it with the naked eye and binoculars. Definetly not an aircraft \n \nAt 1035 on 10/30/2022 my Wife was outside walking our Dog in our backyard and called to me that there is "something strange in the sky, a UFO". I ran outside and observed a bright oval shaped shiny object very high in the Western sky. I retrieved my Binoculars and observed either a large array of balloons or something that I had not seen before. This was definetly not a known aircraft or drone. The object moved from W to E rather slowly, but again, not as previously viewed Mylar balloons in the sky in the past. Perhaps, a weather balloon. Strange and unknown to us.',
			posted: 1671667200000,
			city_latitude: 39.829788717948716,
			city_longitude: -105.1123794871795,
			ObjectId: 2968
		},
		geometry: {
			x: -11701056.560582155,
			y: 4841238.381135351
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

test('renders list items for each UFO sighting', () => {
	render(UFOList, { position, ufoSightings: { features } });
	const listItems = screen.getAllByRole('listitem');
	expect(listItems.length).toBe(features.length);
});

test('if the positions is undefined display a message', () => {
	render(UFOList, { position: undefined, ufoSightings: { features: [] } });
	const heading = screen.getByRole('heading');
	expect(heading).toHaveTextContent('Could not determine your location');
});

test('renders no list items when there are no UFO sightings', () => {
	render(UFOList, { position: undefined, ufoSightings: { features: [] } });
	const listItems = screen.queryAllByRole('listitem');
	expect(listItems.length).toBe(0);
});
