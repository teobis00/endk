<style lang="less">
.test-path {
  width: 100vw;
  height: 100vh;
  svg {
    width: 80vw;
  }
}
</style>
<template>
  <div class="test-path">
    <br />
    <svg viewBox="-1 0 200 15" fill="blue" style="background-color:green">
      <circle
        cx="1"
        cy="12"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <circle
        cx="90"
        cy="2"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />
      <path
        id="line-path"
        d="M 2,12 L 90,2 L 200,2"
        fill="transparent"
        stroke="white"
        stroke-width="1"
      />
    </svg>
    <span>
      {{ range }}
    </span>
    <br />
    <input type="range" min="1" max="100" v-model="range" />
  </div>
</template>

<script>
import ProgressBar from "progressbar.js";

export default {
  name: "testcar",
  layout: "blank",
  data() {
    return {
      range: 0,
      bar: undefined,
    };
  },
  mounted() {
    this.bar = new ProgressBar.Path("#line-path", {
      easing: "linear",
      duration: 0,
    });
  },
  watch: {
    range(n) {
      this.bar.set(n / 100);
    },
  },
};
</script>
