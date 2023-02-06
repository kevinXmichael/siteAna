<script>
	import Button from '$lib/ui/button.svelte';
	let teste = 'Converse comigo';
	export let price = 'R$ 380,00';
	export let title = 'Services';
</script>

<div id="left" class="bg-colorBgServices flex-row space-y-4 p-4  w-1/2 ">
	<h1 id="headline" class="bg-yellow-400 font:bold text-2xl text-center w-auto ">
		{title}
	</h1>
	<p class="bg-green-400">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laudantium ex tempora
		perspiciatis veritatis ipsam alias vitae iusto similique non.Lorem ipsum dolor sit amet
		consectetur, adipisicing elit. Quam laudantium ex tempora perspiciatis veritatis ipsam alias
		vitae iusto similique non. sectetur, adipisicing elit. Quam laudantium ex tempora perspiciatis
		veritatis ipsam alias vitae iusto similique non.sectetur, adipisicing elit. Quam laudantium ex
		tempora perspiciatis veritatis ipsam alias vitae iusto similique non.
	</p>
	<h2>{price}</h2>
	<Button title="Check Agenda" />
</div>

<div id="right" class="bg-colorBgServices flex-row space-y-4 p-4  w-1/2  ">
	<h1 id="headline" class="bg-yellow-400 font:bold text-2xl text-center w-auto ">
		{title}
	</h1>
	<p class="bg-green-400">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam laudantium ex tempora
		perspiciatis veritatis ipsam alias vitae iusto similique non.Lorem ipsum dolor sit amet
		consectetur, adipisicing elit. Quam laudantium ex tempora perspiciatis veritatis ipsam alias
		vitae iusto similique non. sectetur, adipisicing elit. Quam laudantium ex tempora perspiciatis
		veritatis ipsam alias vitae iusto similique non.sectetur, adipisicing elit. Quam laudantium ex
		tempora perspiciatis veritatis ipsam alias vitae iusto similique non.
	</p>
	<h2>{price}</h2>
	<Button title="Check Agenda" />
</div>
