<style lang="less" scoped>
.endk-section-3 {
  width: 100%;
  background-color: white;
  background-image: url("~/assets/img/bg_section3.jpg");
  background-position: center left;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  .line {
    width: 90%;
    height: auto;
    align-self: flex-end;
    svg {
      display: inline-block;
      vertical-align: top;
    }
  }
  .endk-lain-section-3 {
    width: 80%;
    height: 60%;
    display: grid;
    grid-template-columns: 1fr 5% 1fr;
    .endk-section-3-col-1 {
      box-sizing: border-box;
      padding-left: 10%;
      padding-top: 5%;
      svg {
        display: inline-block;
        width: 100%;
        vertical-align: top;
        path {
          stroke-width: 1.5;
          stroke: #7f7b6b;
        }
      }
      width: 100%;
      height: 100%;
    }
    .endk-section-3-col-2 {
      margin-top: -5%;
      box-sizing: border-box;
      padding-left: 10%;
      width: 100%;
      height: 100%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .endk-section-3 {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 35px;
    padding-left: 35px;
    padding-right: 35px;
    display: inline-block;
    background-image: url("~/assets/img/bg_section3_m.png");
    background-position: top right;
    background-size: 160%;
    .line {
      display: none;
    }
    .endk-lain-section-3 {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: auto;
      .endk-section-3-col-1 {
        width: 100%;
        height: auto;
        padding: 10px 0;
        text-align: right;
      }
      .endk-section-3-col-2 {
        width: 100%;
        height: auto;
        padding: 0;
        padding-top: 50px;
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-3">
    <div class="line">
      <svg viewBox="-1 0 200 15" fill="blue">
        <circle
          cx="1"
          cy="12"
          r="2"
          stroke="black"
          stroke-width="0"
          fill="gray"
        />

        <circle
          cx="90"
          cy="2"
          r="2"
          stroke="black"
          stroke-width="0"
          fill="gray"
          :visibility="visibleSpot1"
        />
        <path
          id="line-path"
          d="M 2,12 L 90,2 L 200,2"
          fill="transparent"
          stroke="gray"
          stroke-width="1"
        />
      </svg>
    </div>
    <div class="endk-lain-section-3">
      <div class="endk-section-3-col-1">
        <h4>Productos / servicios para la arquitectura y diseño</h4>
        <p>
          La tecnología nos permite combinar resultados eficientes, sostenibles
          e innovadores sobre las materias primas que utilizamos. Diseñamos,
          fabricamos e instalamos; mobiliario, puertas, pisos de madera,
          revestimiento, celosías, entre otras cosas.
        </p>
      </div>
      <div class="sep"></div>
      <div class="endk-section-3-col-2">
        <h4>Rapidez y sostenibilidad en la construcción</h4>
        <p>
          Ofrecemos una amplia gama de servicios y productos diseñados desde el
          inicio hasta la culminación de proyectos arquitectónicos.
          <br /><br />Adicionalmente, nuestra empresa tiene líneas de mobiliario
          moderno-minimalista, de esta forma ponemos un fragmento de los bosques
          nativos de nuestro país al alcance de todas las personas a lo largo de
          Chile y el mundo, teniendo en cuenta dentro de todo este proceso el
          programa REDD+ de Naciones Unidas (reducción de las emisiones
          derivadas de la deforestación y la degradación de los bosques).
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import endkDataScroll from "~/components/endkDataScroll";
import ProgressBar from "progressbar.js";

export default {
  mounted() {
    this.bar = new ProgressBar.Path("#line-path", {
      easing: "linear",
      duration: 0,
    });
  },
  components: {
    endkDataScroll,
  },
  name: "endk-section-3",
  data() {
    return {
      visibleSpot1: "hidden",
    };
  },
  computed: {
    PColleccion() {
      const percent = this.$store.getters["app/getPColleccion"];
      if (percent.hasOwnProperty("p")) {
        return percent.p;
      }
      return undefined;
    },
  },
  watch: {
    PColleccion(n) {
      this.visibleSpot1 = n > 55 ? "visible" : "hidden";
      if (n - 35 <= 0) {
        this.bar.set(0);
      }
      const avanceMediaPantalla = (n - 10) / 100;
      if (avanceMediaPantalla > 0) {
        this.bar.set(avanceMediaPantalla);
      }
    },
  },
};
</script>
