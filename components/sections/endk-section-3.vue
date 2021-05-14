<style lang="less" scoped>
.endk-section-3 {
  width: 100vw;
  background-color: #e65100;
}
</style>

<template>
  <section class="endk-section endk-section-3">
    <endk-data-scroll :p="PSection3" />
  </section>
</template>

<script>
import endkDataScroll from "~/components/endkDataScroll";

export default {
  components: {
    endkDataScroll,
  },
  name: "endk-section-3",
  data() {
    return {};
  },
  computed: {
    PSection3() {
      return this.$store.getters["app/getPSection3"];
    },
  },
};
</script>
