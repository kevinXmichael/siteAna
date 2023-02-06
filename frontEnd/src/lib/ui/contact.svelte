<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/ui/button.svelte';
</script>

<div id="left" class=" flex-row w-1/2 ">
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- This video is not loading  -->
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.6164514999064!2d-48.36034653065369!3d-25.563917073673558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dbbdd47dd02525%3A0x3e58a6dacbbd7a16!2sR.%20das%20Glic%C3%ADneas%2C%20Pontal%20do%20Paran%C3%A1%20-%20PR%2C%2083255-000!5e0!3m2!1sen!2sbr!4v1675555298147!5m2!1sen!2sbr"
		width="600"
		height="450"
		style="border:0;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		class="max-w-full"
	/>
</div>

<div id="right" class="bg-blue-400 flex-row md:flex-col w-1/2 ">
	<h1>Contato</h1>
	<form use:enhance method="POST">
		<label>
			Nome: <input type="text" required name="name" id="name" />
		</label>
		<br />
		<label>
			Site da empresa ou Linkedin: <input type="text" required name="site" id="site" />
		</label>
		<br />
		<label>
			Email: <input type="text" required name="email" id="email" />
		</label>
		<br />
		<label>
			whatsapp: <input type="text" required name="fone" id="fone" />
		</label>
	</form>
	<button class="bg-white w-40 h-8 rounded-xl text-center " type="submit"> Enviar </button>
</div>

<style>
	form {
		padding: 2rem;
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: left;
		justify-items: left;
	}
	label {
		display: block;
	}
</style>
