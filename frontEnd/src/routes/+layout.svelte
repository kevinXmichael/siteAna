<script>
	import Header from '$lib/ui/header.svelte';
	import '../app.css';
	export let data;
	console.log(data)
</script>

<main class="p-1 mx-auto max-w-[1200px]">
	<slot />
</main>
