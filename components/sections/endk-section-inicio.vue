<style lang="less" scoped>
.endk-section-inicio {
  width: 100vw;
  background-image: url("~/assets/img/bg_main_inicio.png");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
}
</style>

<template>
  <section class="endk-section endk-section-inicio">
    <!--<endk-data-scroll :p="PInicio" v-if="debugPos" />-->
  </section>
</template>

<script>
import endkDataScroll from "~/components/endkDataScroll";

export default {
  components: {
    endkDataScroll,
  },
  name: "endk-section-inicio",

  data() {
    return {};
  },
  computed: {
    debugPos() {
      return this.$store.getters["app/getDebugPos"];
    },
    PInicio() {
      return this.$store.getters["app/getPInicio"];
    },
  },
};
</script>
