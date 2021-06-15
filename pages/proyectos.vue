<template>
  <div class="proyectos">
    proyectos
  </div>
</template>
<script>
export default {
  meta: {
    section: "proyectos",
    parent: "",
  },
  mounted() {
    this.$store.commit("app/setDetalleColeccionOpen", false);
    console.log("loaded proyectos");
  },
};
</script>
