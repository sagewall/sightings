<script lang="ts">
	import type { BigfootSighting } from '$lib/types';

	export let bigfootSighting: BigfootSighting;
	export let open = false;

	function onClick() {
		open = !open;
	}
</script>

<section class="mb-7">
	<header class="flex space-x-4 font-bold text-xl">
		<button class="text-left" on:click={onClick}>
			{#if open}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			{/if}
		</button>
		<span
			>{new Date(bigfootSighting.attributes.date).toLocaleDateString()} - {bigfootSighting.attributes.title.split(
				':'
			)[1]}</span
		>
	</header>
	{#if open}
		<section class="px-10">
			<span class="text-lg">Location details</span>
			<p>
				{bigfootSighting.attributes.latitude}, {bigfootSighting.attributes.longitude}
			</p>
			<p class="mb-2">
				{bigfootSighting.attributes.location_details}
			</p>
			<span class="text-lg">Observation</span>
			<p>{bigfootSighting.attributes.observed}</p>
		</section>
	{/if}
</section>
