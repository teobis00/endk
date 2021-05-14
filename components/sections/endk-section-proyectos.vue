<style lang="less" scoped>
.endk-section-proyectos {
  width: 200vw;
  background-color: #fdd835;
}
</style>

<template>
  <section class="endk-section endk-section-proyectos">
    <endk-data-scroll :p="PProyectos" />
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
    PProyectos() {
      return this.$store.getters["app/getPProyectos"];
    },
  },
};
</script>
