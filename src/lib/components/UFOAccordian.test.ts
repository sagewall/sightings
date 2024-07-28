import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';

import UFOAccordian from './UFOAccordian.svelte';

const feature = {
	attributes: {
		summary: 'I saw a light that was not flashing moving then disappeared',
		country: 'USA',
		city: 'Newark',
		state: 'DE',
		date_time: 1671701340000,
		shape: 'light',
		duration: '30 seconds',
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
};
test('there is a list item for the ufo sighting', () => {
	render(UFOAccordian, { ufoSighting: feature });
	const timeAndLocation = screen.getByTestId('time-and-location');
	expect(timeAndLocation).toHaveTextContent('12/22/2022 - Newark, DE');
});

test('renders correct content for a UFO sighting on click', async () => {
	const user = userEvent.setup();
	render(UFOAccordian, { ufoSighting: feature });

	const button = screen.getByRole('button');
	await user.click(button);

	const locationDetails = screen.getByTestId('location-details');
	const duration = screen.getByTestId('duration');
	const observation = screen.getByTestId('observation');
	const reportLink = screen.getByRole('link', { name: 'NUFORC Report' });

	expect(locationDetails).toHaveTextContent('39.67027989690722, -75.72071108247422');
	expect(duration).toHaveTextContent('30 seconds');
	expect(observation).toHaveTextContent('I was driving to work (home Depot)');
	expect(reportLink).toContainHTML('http://www.nuforc.org/webreports/reports/173/S173518.html');
});
