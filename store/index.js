import axios from "axios";

export const actions = {
  async nuxtServerInit({ commit }, { req, store }) {
    console.log("nuxtServerInit");
    const { data: dataParent } = await axios.get(
      `https://static.endemik.cl/proyectos`
    );
    if (dataParent.hasOwnProperty("lista_proyectos")) {
      store.commit("proyectos/setProyectos", dataParent.lista_proyectos);
      store.commit("proyectos/setCatalogo", dataParent.documento_proyectos);
      store.commit("proyectos/setTitulo", dataParent.titulo);
      store.commit("proyectos/setContenido", dataParent.texto_inicial);
    }
  },
};
