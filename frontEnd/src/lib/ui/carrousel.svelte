<!-- <script>
	export let data;
	console.log('segue', data);
</script> -->

{#if Array.isArray(data.posts)}
	<div class="carousel w-full">
		{#each data.posts as post, i}
			<div id="slide{i}" class="carousel-item relative w-full">
				<h2 class="mt-8">{post.attributes.nome_cargo}, {i}</h2>
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide{i - 1}" class="btn btn-circle">❮</a>
					<a href="#slide{i + 1}" class="btn btn-circle">❯</a>
				</div>
			</div>
		{/each}
	</div>
{/if}
