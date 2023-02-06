//1. data loading: I Chose, this time, to load it in the layout file. This data seems to be read only in a single page app, and it seems  easier to make all pages sharing the layout to inherit//

// 2 task. Can you please set up a data loading system that uses stores, for the sake of learning, ina a new branch? Then, just link one of the U.I components to it, and I´ll be able to reverse-enginner it //

export async function load({ fetch }) {
	try {
		//Busca dados de posts do Strapi. Await espera resposta
		let response = await fetch('http://localhost:1337/api/clientes?populate=deep');
		//Transforma resposta em json
		response = await response.json();
		//Retorna dados de posts. Criando um objeto com os dados de posts e metadados
		return { posts: response.data, meta: response.meta };
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}
