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

    display: grid;
    grid-template-columns: 1fr 0% 1fr;
    .endk-info {
      max-width: 660px;
      position: relative;
      transform: translateY(0px);
      opacity: 1;
      transition: transform 400ms cubic-bezier(0.65, 0, 0.35, 1),
        opacity 400ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: transform, opacity;
      &.goup {
        transform: translateY(-30%);
        opacity: 0;
      }
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
      .button {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 580px) {
  .endk-section-colleccion {
    align-items: flex-start;
    height: auto;
    .endk-lain-collection {
      display: inline-block;
      padding-left: 35px;
      .endk-info {
        margin-top: 20px;
        height: auto;
        h3 {
          font-size: 19px;
          margin-bottom: 0px;
        }
        h1 {
          font-size: 51px;
          margin: 0;
          padding: 0;
          line-height: 51px;
        }
        h4 {
          font-size: 18px;
          margin: 0;
          padding: 0;
          line-height: 42px;
        }
        p {
          margin: 0;
          padding: 0;
          line-height: 14px;
          line-height: 18px;
        }
        .button {
          display: none;
          margin: 0px auto;
          float: none;
        }
      }
      .sep {
        display: none;
      }

      .endk-media {
        margin-left: 0px;
        flex-direction: column;
        .endk-content-media {
          img {
            position: relative;
            left: 0;
            top: 0;
            transform: translateY(0);
            margin: 0;
            margin-left: -25px;
          }
        }
        .button {
          display: inline-block;
        }
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-colleccion">
    <div class="endk-lain-collection">
      <div class="endk-info" :class="{ goup: goupinfo }">
        <h3>Salone del mobile</h3>
        <h1>Milan 2022</h1>
        <h4>Apr 13, 2022 - Apr 18, 2022</h4>
        <p :style="style_p">
          La génesis de la colección nace de la inspiración en el arte del
          diseño con madera: un acabado simple y ensambles limpios, logran
          generar una línea de diseño imperecedera, tanto desde su punto de
          vista estético como desde el ámbito de la construcción.
        </p>
        <button
          class="button"
          dc="Ver más"
          :style="style_b"
          v-on:click="gotoInterior"
        >
          Ver más
        </button>
      </div>
      <div class="sep"></div>
      <div class="endk-media">
        <XyzTransition xyz="fade small-25% ease-ease duration-3">
          <div class="endk-content-media" v-show="percent > 99 && !goupinfo">
            <img src="/silla.png" alt="" />
          </div>
        </XyzTransition>
        <button
          class="button"
          dc="Ver más"
          :style="style_b"
          v-on:click="gotoInterior"
        >
          Ver más
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  name: "endk-section-colleccion",
  data() {
    return {};
  },
  computed: {
    goupinfo() {
      return this.$store.getters["app/getDetalleColeccionOpen"];
    },
    style_b() {
      if (this.$store.getters["app/getWindowWidth"] < 1024) {
        return true;
      }
      let opacity = this.percent / 100;

      let y = 200 - this.percent * 2;
      y = y > 0 ? y : 0;

      return { transform: `matrix(1, 0, 0, 1, 0, ${y})`, opacity };
    },
    style_p() {
      if (this.$store.getters["app/getWindowWidth"] < 1024) {
        return true;
      }

      let opacity = this.percent / 100;

      let y = 100 - this.percent;
      y = y > 0 ? y : 0;

      return { transform: `matrix(1, 0, 0, 1, 0, ${y})`, opacity };
    },
    percent() {
      if (this.$store.getters["app/getWindowWidth"] < 1024) {
        return 100;
      }

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
  methods: {
    gotoInterior() {
      this.$store.commit("app/setDetalleColeccionOpen", true);
      setTimeout(() => {
        this.$router.push("/coleccion/detalle");
      }, 100);
    },
  },
};
</script>
