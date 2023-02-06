<script>
	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
	console.log(data);

	import Hero from '$lib/ui/hero.svelte';
	import Button from '$lib/ui/button.svelte';
	import PicText from '$lib/ui/picText.svelte';
	import TextPic from '$lib/ui/textPic.svelte';
	import Services from '$lib/ui/services.svelte';
	import Contact from '$lib/ui/contact.svelte';
	import Header from '$lib/ui/header.svelte';
	import Footer from '$lib/ui/footer.svelte';
	import Clients from '$lib/ui/clients.svelte';
</script>

<Header />
<wrapper id="hero" class="md:flex sd:flex-col sd:justify-center sd:items-center text-center ">
	<Hero />
</wrapper>
<Clients />
<wrapper
	id="metodology1"
	class="md:flex sd:flex-col sd:justify-center sd:items-center text-center "
>
	<PicText />
</wrapper>
<wrapper
	id="metodology2"
	class="md:flex sd:flex-col sd:justify-center sd:items-center text-center "
>
	<TextPic />
</wrapper>
<wrapper id="prices" class="md:flex sd:flex-col sd:justify-center sd:items-center text-center ">
	<Services />
</wrapper>
<wrapper id="contact" class="md:flex sd:flex-col sd:justify-center sd:items-center text-center ">
	<Contact />
</wrapper>
<Footer />
