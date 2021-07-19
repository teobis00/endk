<template>
  <div class="proyectos"></div>
</template>
<script>
import axios from "axios";

export default {
  meta: {
    section: "proyectos",
    parent: "",
  },
  async asyncData({ route, store }) {
    const { section } = route.params;
    if (section === "proyectos-interior") {
      return {};
    }
    const { data: dataParent } = await axios.get(
      `https://static.endemik.cl/proyectos`
    );
    if (dataParent.hasOwnProperty("lista_proyectos")) {
      store.commit("proyectos/setProyectos", dataParent.lista_proyectos);
      store.commit("proyectos/setCatalogo", dataParent.documento_proyectos);
      store.commit("proyectos/setTitulo", dataParent.titulo);
      store.commit("proyectos/setContenido", dataParent.texto_inicial);
    }

    return dataParent;
  },
  mounted() {
    this.$store.commit("app/setDetalleColeccionOpen", false);
    console.log("loaded proyectos");
  },
};
</script>
