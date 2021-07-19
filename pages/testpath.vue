<style lang="less">
.test-path {
  width: 100vw;
  height: 100vh;
  overflow: auto;

  .control {
    position: sticky;
    left: 20px;
  }
  .number {
    width: 100%;
    border-top: 5px solid black;
  }

  svg {
    width: 320px;
    background-color: silver;
    text {
      font-size: 85px;
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
    }
  }
}
</style>
<template>
  <div class="test-path">
    <br />
    <svg viewBox="-1 0 550 28" fill="blue" style="background-color:green">
      <circle
        cx="1"
        cy="20"
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

      <circle
        cx="90"
        cy="2"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <circle
        cx="210"
        cy="20"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <circle
        cx="270"
        cy="2"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <circle
        cx="360"
        cy="25"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <circle
        cx="420"
        cy="2"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <circle
        cx="480"
        cy="2"
        r="2"
        stroke="black"
        stroke-width="0"
        fill="white"
      />

      <path
        id="line-path"
        :d="path"
        fill="transparent"
        stroke="white"
        stroke-width="1"
      />
    </svg>
    <div class="control">
      <span>
        {{ range }}
      </span>
      <br />
      <input type="range" min="1" max="100" v-model="range" />
      <input type="range" min="1" max="100" v-model="factor" />
    </div>
    <div class="number">
      <svg viewBox="0 0 550 130">
        <defs>
          <mask id="texture">
            <image
              height="800"
              width="800"
              xlink:href="~/assets/img/texture/t5.png"
            />
          </mask>
        </defs>
        <!--
          <text text-anchor="end" x="552" y="85" mask="url(#texture)">
            33 ton
          </text>
        -->
        <text text-anchor="start" x="0" y="85" mask="url(#texture)">
          33 ton
        </text>
      </svg>
    </div>
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
      factor: 0,
      bar: undefined,
    };
  },
  created() {},
  mounted() {
    this.factor = window.sessionStorage.getItem("factor");
    /*
    this.bar = new ProgressBar.Path("#line-path", {
      easing: "linear",
      duration: 0,
    });*/
  },
  watch: {
    range(n) {
      this.bar.set(n / 100);
    },
    factor(n) {
      window.sessionStorage.setItem("factor", n);
    },
  },
  computed: {
    path() {
      let p1 = 2;
      let p2 = 9 * this.factor;
      let p3 = 16 * this.factor;
      let p4 = 21 * this.factor;
      let p5 = 27 * this.factor;
      let p6 = 31 * this.factor;
      let p7 = 36 * this.factor;
      let p8 = 42 * this.factor;
      let p9 = 48 * this.factor;

      return `M ${p1},20 L ${p2},2 L ${p3},2 L ${p4},20 L ${p5},2 L ${p6},2 L ${p7},25 L ${p8},2 L ${p9},2`;
      //return `M 2,20 L 90,2 L 160,2 L 210,20 L 270,2 L 310,2 L 360,25 L 420,2 L 480,2`;
    },
  },
};
</script>
