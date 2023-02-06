<script>
	import Button from '$lib/ui/button.svelte';
	let teste = 'Converse comigo';
</script>

<div id="left" class="bg-slate-400  w-1/2 ">
	<iframe
		class="w-full aspect-video"
		src="https://www.youtube.com/watch?v=WHafZdAr1Y0"
		title="Youtube video"
		frameborder="0"
		allow="acelerometer:autoplay; clipboard-white; encrypted-media; gyroscope picture-in-picture "
	/>
</div>

<div id="right" class="bg-pink-400 flex-row space-y-4 p-4  w-1/2  ">
	<h1 id="headline" class="bg-yellow-400 font:bold text-2xl text-center w-auto ">Teste</h1>
	<p class="bg-green-400">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laudantium ex tempora
		perspiciatis veritatis ipsam alias vitae iusto similique non.Lorem ipsum dolor sit amet
		consectetur, adipisicing elit. Quam laudantium ex tempora perspiciatis veritatis ipsam alias
		vitae iusto similique non. sectetur, adipisicing elit. Quam laudantium ex tempora perspiciatis
		veritatis ipsam alias vitae iusto similique non.sectetur, adipisicing elit. Quam laudantium ex
		tempora perspiciatis veritatis ipsam alias vitae iusto similique non.
	</p>
	<Button title={teste} />
</div>
<!-- screens: 
	sm: '480px',
	md: '768px',
	lg: '1024px',
	xl: '1440px' -->
