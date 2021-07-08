<style lang="less">
.test-path {
  width: 100vw;
  height: 100vh;
  background-image: url(https://place-hold.it/300);

  svg {
    width: 200px;
    outline: 1px solid red;
    text {
      font-family: "Open Sans", sans-serif;
      font-weight: 700;
      fill: white;
      font-size: 8px;
      stroke: #636363;
      stroke-width: 0.4;
      shape-rendering: crispEdges;
    }
  }

  .text-comp {
    width: 200px;
  }
}
</style>
<template>
  <div class="test-path">
    <br />
    <svg
      :viewBox="viewBox"
      fill="transparent"
      style="background-color:transparent"
      v-on:click="moveText"
    >
      <path id="curve" :d="linelength" stroke="white" />
      <text width="0" style="transform:translate3d(0,0,0);">
        <textPath
          style="transform:translate3d(0,0,0);"
          alignment-baseline="bottom"
          xlink:href="#curve"
          id="text-path"
          :startOffset="reveal"
        >
          {{ texto }}
        </textPath>
      </text>
    </svg>
    <br />

    <br />
    <br />
    <br />
    <br />

    <div class="text-comp" v-on:click="stext = !stext">
      <endk-curve-text text="Mobiliario en Obra" :showtext="stext" />
    </div>
  </div>
</template>

<script>
import { TweenMax } from "gsap";

import endkCurveText from "~/components/endkCurveText";

export default {
  name: "testcar",
  layout: "blank",
  data() {
    return {
      offset: { value: 0 },
      texto: "Puertas",
      stext: false,
    };
  },
  components: {
    endkCurveText,
  },
  computed: {
    reveal() {
      return this.offset.value + "%";
    },
    linelength() {
      const line = this.texto.length * 4 + 24;
      return `M 8,${line} L 8,24 A1 -1, 0, 0 1, 40 24 L 40,50`;
    },
    viewBox() {
      const line = this.texto.length * 4 + 24;
      return `00 0 50 ${line}`;
    },
  },
  methods: {
    moveText() {
      let nvalue = this.offset.value === 0 ? 100 : 0;
      TweenMax.to(this.offset, 0.6, { value: nvalue });
    },
  },
};
</script>
