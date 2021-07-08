<template>
  <div class="contacto">
    contacto
  </div>
</template>
<script>
export default {
  meta: {
    section: "contacto",
    parent: "",
  },
  mounted() {
    this.$store.commit("app/setDetalleColeccionOpen", false);
    console.log("loaded contacto");
  },
};
</script>
