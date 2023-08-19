<script>
	import { page } from '$app/stores';

	const routes = [
		{ name: 'Dashboard', href: '/' },
		{ name: 'Bigfoot', href: '/bigfoot' },
		{ name: 'UFOs', href: '/ufos' }
	];
</script>

<nav class="bg-white flex h-16 px-4 items-center justify-between">
	<div class="flex-shrink-0">
		<img class="h-8" src="./favicon.png" alt="an icon depicting bigfoot" />
	</div>
	<div class="flex">
		<h1 class="text-2xl font-bold">Sightings</h1>
	</div>
	<div class="flex items-baseline space-x-4">
		{#each routes as route}
			<a
				href={route.href}
				class="{$page.route.id === route.href
					? 'bg-gray-200'
					: 'bg-white'} text-gray-900 hover:bg-gray-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
				>{route.name}</a
			>
		{/each}
	</div>
</nav>
