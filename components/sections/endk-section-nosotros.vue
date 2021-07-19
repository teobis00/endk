<style lang="less" scoped>
.endk-section-nosotros {
  background-image: url("~/assets/img/bg_nosotros.jpg");
  background-size: 105%;
  background-position: 160% 0%;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  .endk-content-nosotros {
    width: 80%;
    height: auto;
    figure {
      margin: 0;
      padding: 0;
    }
    h3 {
      width: 100%;
      text-align: center;
      margin-bottom: 2vh;
      margin-top: 4vh;
    }
    .info-bottom {
      width: 70%;
      button {
        margin-top: 27px;
        float: right;
      }
    }
  }
}

@media screen and (max-width: 580px) {
  .endk-section-nosotros {
    background-image: url("~/assets/img/bg_nosotros_mobile.png");
    background-size: cover;
    background-position-x: 0%;
    background-position-y: 40px;
    background-color: transparent;
    background-repeat: no-repeat;
    padding-top: 120px;
    box-sizing: border-box;
    .endk-content-nosotros {
      width: 100%;
      height: auto;
      box-sizing: border-box;
      padding: 0 35px;
      figure {
        margin: 0;
        padding: 0;
        width: 100%;
        margin: 0;
        display: inline-block;
        text-align: center;

        svg {
          display: inline-block;
          width: 70%;
        }
      }
      h3 {
        font-size: 19px;
        line-height: 19px;
        color: #343433;
        margin-top: 10px;
      }
      h4 {
        transform: translateY(-180px);
        font-size: 51px;
        line-height: 0px;
      }
      .info-bottom {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        br {
          display: none;
        }
        button {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-nosotros">
    <div class="endk-content-nosotros">
      <figure>
        <v-icon scale="18" name="logo" />
      </figure>
      <h3>Sustainable andean timber</h3>
      <h4>Conócenos</h4>
      <div class="info-bottom">
        <p>
          La empresa desde sus inicios ha integrado como pilares fundamentales
          dentro de sus procesos la revalorización de la madera como elemento
          constructivo desde el punto de vista desde la sostenibilidad hasta el
          diseño.
        </p>
        <button class="button" dc="Ver más" v-on:click="goInterior">
          Ver más
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
  name: "endk-section-nosotros",
  data() {
    return {};
  },
  methods: {
    goInterior() {
      this.$router.push("/nosotros-interior");
    },
  },
};
</script>
