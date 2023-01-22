export async function load({ fetch }: any) {
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
