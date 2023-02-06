// One of the things that needs to be done: setup a way to send form data to person´s e-mail abdress. I thought it was made by exporting actions or something like it.

export const _actions = {
	default: async ({ request }) => {
		console.log('request', request);
		const data = await request.formData();
		console.log('data', data);
		const name = data.get('name');
		const site = data.get('site');
		const email = data.get('email');
		const fone = data.get('fone');
		console.log(name, site, email, fone);
	},
	return: {
		message: 'mensagem enviada!'
	}
};
// what if this data should be sent to bonamin.ike@gmail.com//
