const config = {
  locales: ["pt-BR"],
  "pt-BR": {
    "content-manager.containers.ListPage.table-headers.title": "Título",
    "content-manager.containers.ListPage.table-headers.createdAt": "Criado em",
    "content-manager.containers.ListPage.table-headers.updatedAt":
      "Atualizado em",
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
