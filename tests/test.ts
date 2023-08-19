import { expect, test } from '@playwright/test';

test('index page has expected heading', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('bigfoot page has expected heading', async ({ page }) => {
	await page.goto('/bigfoot');
	await expect(page.getByRole('heading', { name: 'Bigfoot' })).toBeVisible();
});

test('ufos page has expected heading', async ({ page }) => {
	await page.goto('/ufos');
	await expect(page.getByRole('heading', { name: 'UFOs' })).toBeVisible();
});
