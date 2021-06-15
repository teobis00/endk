<style lang="less">
.test-path {
  width: 100vw;
  height: 100vh;
  background-image: url(https://place-hold.it/300);
  svg {
    width: 40vw;
  }
}
</style>
<template>
  <div class="test-path">
    <br />
    <svg viewBox="-1 0 100 50" fill="blue" style="background-color:transparent">
      <path d="M -1,2 L 10,2 L 70,45 L -1,45 z" fill="white" />
      <path
        id="line-path"
        d="M -1,2 L 10,2 L 70,45"
        fill="transparent"
        stroke="gray"
        stroke-width="1"
      />
      <circle
        cx="70"
        cy="45"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="gray"
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
