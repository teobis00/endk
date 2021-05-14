<style lang="less" scoped>
.endk-section-colleccion {
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("~/assets/img/bg_main_collecion_alt2.jpg");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  .endk-lain-collection {
    width: 100%;
    box-sizing: border-box;
    padding-left: calc(70px + 5%);
    padding-right: 5%;
    display: grid;
    grid-template-columns: 1fr 0% 1fr;
    .endk-info {
      max-width: 640px;
      h3 {
        margin-bottom: 15px;
      }
      h1 {
        padding-left: 40px;
        margin-bottom: 15px;
      }
      h4 {
        padding-left: 50px;
      }
      p {
        padding-left: 50px;
        transform: matrix(1, 0, 0, 1, 0, 0);
      }
      .button {
        margin-top: 27px;
        float: right;
      }
    }
    .endk-media {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 5%;
      .endk-content-media {
        width: 100%;
        height: 100%;
        position: relative;
        img {
          margin-top: 5vh;
          position: absolute;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
          width: 110%;
          margin-left: -5%;
        }
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-colleccion">
    <endk-data-scroll :p="PColleccion" v-if="debugPos" />
    <div class="endk-lain-collection">
      <div class="endk-info">
        <h3>Salone del mobile</h3>
        <h1>Milan 2022</h1>
        <h4>Apr 13, 2022 - Apr 18, 2022</h4>
        <p :style="style_p">
          La génesis de la colección nace de la inspiración en el arte del
          diseño
          <br />
          con madera: un acabado simple y ensambles limpios, logran generar una
          <br />
          línea de diseño imperecedera, tanto desde su punto de vista estético
          <br />
          como desde el ámbito de la construcción.
        </p>
        <button class="button" :style="style_b">Ver más</button>
      </div>
      <div class="sep"></div>
      <div class="endk-media">
        <XyzTransition xyz="fade small-25% ease-ease duration-3">
          <div class="endk-content-media" v-if="percent > 99">
            <img src="/silla.png" alt="" />
          </div>
        </XyzTransition>
      </div>
    </div>
  </section>
</template>

<script>
import endkDataScroll from "~/components/endkDataScroll";

export default {
  components: {
    endkDataScroll,
  },
  name: "endk-section-colleccion",
  data() {
    return {};
  },
  computed: {
    style_b() {
      let opacity = this.percent / 100;

      let y = 200 - this.percent * 2;
      y = y > 0 ? y : 0;

      return { transform: `matrix(1, 0, 0, 1, 0, ${y})`, opacity };
    },
    style_p() {
      let opacity = this.percent / 100;

      let y = 100 - this.percent;
      y = y > 0 ? y : 0;

      return { transform: `matrix(1, 0, 0, 1, 0, ${y})`, opacity };
    },
    percent() {
      const percent = (this.$store.getters["app/getPInicio"].p - 50) * 2;
      return percent;
    },
    cpstyle() {
      const pInicio = this.$store.getters["app/getPInicio"];
      return { transform: `translateY(${pInicio.p - 50}px)` };
    },
    PColleccion() {
      return this.$store.getters["app/getPColleccion"];
    },
    debugPos() {
      return this.$store.getters["app/getDebugPos"];
    },
  },
};
</script>
