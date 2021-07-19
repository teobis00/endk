<template>
  <div class="nosotros"></div>
</template>
<script>
export default {
  meta: {
    section: "nosotros",
    parent: "",
  },
  mounted() {
    this.$store.commit("app/setDetalleColeccionOpen", false);
    console.log("loaded proyectos");
  },
};
</script>
