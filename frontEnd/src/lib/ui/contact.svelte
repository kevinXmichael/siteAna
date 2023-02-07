<script>
	import {enhance} from '$app/forms';
</script>

<div class=" flex-row w-1/2 " id="left">
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- This video is not loading  -->
    <iframe
            class="max-w-full"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.6164514999064!2d-48.36034653065369!3d-25.563917073673558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dbbdd47dd02525%3A0x3e58a6dacbbd7a16!2sR.%20das%20Glic%C3%ADneas%2C%20Pontal%20do%20Paran%C3%A1%20-%20PR%2C%2083255-000!5e0!3m2!1sen!2sbr!4v1675555298147!5m2!1sen!2sbr"
            style="border:0;"
            width="600"
    />
</div>

<div class="bg-blue-400 flex-row md:flex-col w-1/2 " id="right">
    <h1>Contato</h1>
    <form
		method="POST"
		use:enhance={({ form, data, action, cancel }) => {
			return async ({ result, update }) => {
                const response = await fetch('/api/emails', {
                  method: "POST",
                  body: data
                })
                const result_ = await response.json()
                console.log(result_?.message)
                return result_?.status == 200
			}
		}}
    >
        <label>
            Nome: <input id="name" name="name" required type="text"/>
        </label>
        <br/>
        <label>
            Site da empresa ou Linkedin: <input id="site" name="site" required type="text"/>
        </label>
        <br/>
        <label>
            Email: <input id="email" name="email" required type="text"/>
        </label>
        <br/>
        <label>
            whatsapp: <input id="fone" name="fone" required type="text"/>
        </label>
        <button class="bg-white w-40 h-8 rounded-xl text-center" type="submit">Enviar</button>
    </form>
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
