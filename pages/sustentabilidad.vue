<template>
  <div class="sustentabilidad">
    sustentabilidad
  </div>
</template>
<script>
export default {
  meta: {
    section: "sustentabilidad",
    parent: "",
  },
  mounted() {
    this.$store.commit("app/setDetalleColeccionOpen", false);
    console.log("loaded Sustentabilidad");
  },
};
</script>
