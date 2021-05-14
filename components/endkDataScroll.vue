<style lang="less" scoped>
.endk-data-scroll {
  display: inline-block;
  width: 110px;
  height: auto;
  position: absolute;
  background-color: black;
  box-sizing: border-box;
  padding: 10px 10px;

  &.top-right {
    right: 0px;
    top: 0px;
  }

  &.top-left {
    left: 0px;
    top: 0px;
  }

  p {
    font-family: "Source Code Pro", monospace;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    margin: 0;
    padding: 0;
    color: white;
    &:first-child {
      color: #8bc34a;
    }
    span {
      &:first-child {
        width: 45px;
        display: inline-block;
      }
      &:last-child {
      }
    }
  }
}
</style>
<template>
  <div class="endk-data-scroll top-left" :style="style">
    <p>
      <span>Percent</span>
      <span>: {{ pos.p }} %</span>
    </p>
    <p>
      <span>Bloque</span>
      <span>: {{ pos.b }}</span>
    </p>
    <p>
      <span>Avance</span>
      <span>: {{ pos.a }}</span>
    </p>
    <p>
      <span>X</span>
      <span>: {{ pos.x }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "endk-data-scroll",
  props: ["p"],
  computed: {
    style() {
      // console.log("this.width", this.width);
      const tope = this.width * (this.pos.b === 0 ? 1 : this.pos.b) - 110;
      // console.log("avance", this.pos.a);
      return this.pos.a < tope
        ? { transform: `translateX(${this.pos.a}px)` }
        : { transform: `translateX(${this.tope}px)` };
    },
    pos() {
      if (this.p) {
        return this.p;
      }
      return {
        p: 0,
        b: 0,
        a: 0,
        x: 0,
      };
    },
    width() {
      return process.browser ? window.innerWidth : 0;
    },
  },
  mounted() {
    this.p;
  },
};
</script>
