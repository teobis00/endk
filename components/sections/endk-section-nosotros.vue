<style lang="less" scoped>
.endk-section-nosotros {
  background-image: url("~/assets/img/bg_nosotros.jpg");
  background-size: 105%;
  background-position: 160% 0%;
  outline: 1px solid red;
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
