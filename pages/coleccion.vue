<template>
  <div class="coleccion">
    coleccion
  </div>
</template>
<script>
export default {
  meta: {
    section: "coleccion",
    parent: "",
  },
  mounted() {
    this.$store.commit("app/setDetalleColeccionOpen", false);
    console.log("loaded coleccion");
  },
};
</script>
