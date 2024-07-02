<script>
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
</script>

<div class="flex flex-col min-h-full">
	<Navigation />

	<main class="flex flex-1 p-6">
		<slot />
	</main>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
