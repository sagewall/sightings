<script lang="ts">
	import type { BigfootSightings } from '$lib/types';

	export let position: GeolocationPosition | undefined;
	export let sightings: BigfootSightings;
</script>

<h3 class="mb-3 text-xl">
	{#if position}
		{sightings.features.length} most recent bigfoot sightings within 100 miles of your location
	{:else}
		Could not determine your location
	{/if}
</h3>
<ul id="sightings">
	{#each sightings.features as feature}
		<li class="mb-10">
			<h4 class="text-xl font-bold">
				{new Date(feature.attributes.date).toLocaleDateString()} - {feature.attributes.title.split(
					':'
				)[1]}
			</h4>

			<div class="flex items-center space-x-4">
				<div class="min-w-0 flex-1">
					<span class="text-lg">Location details</span>
					<p>
						{feature.attributes.latitude}, {feature.attributes.longitude}
					</p>
					<p>
						{feature.attributes.classification}
					</p>
					<p class="mb-2">
						{feature.attributes.location_details}
					</p>
					<span class="text-lg">Observation</span>
					<p>{feature.attributes.observed}</p>
				</div>
			</div>
		</li>
	{/each}
</ul>
