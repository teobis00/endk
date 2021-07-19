<style lang="less" scoped>
.endk-section-mitigacion {
  width: 100%;
  /*
  background-color: white;
  background-image: url("~/assets/img/bg_trans_mit.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: -39%;
  */
  position: relative;
  display: flex;
  align-items: center;
  .aux-p-mit {
    display: none;
    position: fixed;
    left: 70px;
    top: 0px;
    background-color: #f8bbd0;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
  }

  .mask-final-mit {
    width: 12vw;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0px;
    background: linear-gradient(
      270deg,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .pos-bg-section-mitigacion-fixed {
    background-image: url("~/assets/img/bg_trans_mit.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: -10%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .pos-bg-section-mitigacion {
    background-image: url("~/assets/img/bg_trans_mit2.png");
    /*background-attachment: fixed;*/
    background-size: cover;
    background-position: -10%;
    position: absolute;
    left: 0px;
    z-index: 20;
    width: 100%;
    height: 100%;
  }
  .pos-section-mitigacion {
    z-index: 30;
    display: grid;
    grid-template-areas:
      "x p"
      "l i";
    height: 90vh;
    .sep-inicio {
      grid-area: l;
      width: 40vw;
      height: 40vw;
    }

    .path {
      grid-area: p;
      display: grid;
      position: relative;
      height: auto;
    }
    .info-relative-mit {
      grid-area: i;
      position: relative;

      .subtitle {
        text-align: right;
        height: auto;
        position: absolute;
        left: -1vw;
        top: 0;
        transform: translateX(-100%) translateY(-10.5vw);
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }

      .infor-start-mit {
        position: absolute;
        left: 17vw;
        top: 0;
        transform: translateX(-100%) translateY(-7vw);
        width: 42vw;
        display: inline-block;
        height: auto;
        h3 {
          text-align: right;
        }
        .button {
          float: right;
          margin-top: 27px;
          min-width: 180px;
        }
      }

      .ton {
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translateX(35.8vw) translateY(-9vw);
        .endk-small-texture {
          display: none;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            font-size: 16px;
            font-weight: 700;
            color: #7f7b6b;
          }
        }
      }

      .metros {
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translateX(81vw) translateY(-2vw);
        .endk-small-texture {
          display: none;
        }
        p {
          strong {
            color: #7f7b6b;
          }
        }
      }

      .ha {
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translateX(120.5vw) translateY(-8.5vw);
        .endk-small-texture {
          display: none;
        }
        p {
          strong {
            color: #7f7b6b;
          }
        }
      }
      .per {
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translateX(162.8vw) translateY(0.5vw);
        .endk-small-texture {
          display: none;
        }
        p {
          strong {
            color: #7f7b6b;
          }
        }
      }

      .final {
        position: absolute;
        left: 0px;
        top: 0px;
        transform: translateX(196.8vw) translateY(-9vw);
        .endk-small-texture {
          display: none;
        }
        p {
          strong {
            color: #7f7b6b;
          }
        }
      }
    }
    /*
    .blank {
      grid-area: n;
      display: grid;
    }
    .space {
      grid-area: s;
    }
    .space2 {
      grid-area: t;
    }
    .ton {
      grid-area: a;
      margin-top: -10vw;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          font-size: 16px;
          font-weight: 700;
          color: #7f7b6b;
        }
      }
    }
    .metros {
      grid-area: b;
      margin-top: -4vw;
      p {
        strong {
          color: #7f7b6b;
        }
      }
    }
    .ha {
      grid-area: c;
      margin-top: -11vw;
      p {
        strong {
          color: #7f7b6b;
        }
      }
    }
    .per {
      grid-area: d;
      margin-top: -1vw;
      p {
        strong {
          color: #7f7b6b;
        }
      }
    }
    .final {
      grid-area: e;
      margin-top: -11vw;
      p {
        strong {
          color: #7f7b6b;
        }
      }
    }
    */
  }
}

@media screen and (max-width: 580px) {
  .endk-section-mitigacion {
    display: inline-block;
    .pos-bg-section-mitigacion-fixed,
    .pos-bg-section-mitigacion {
      display: none;
    }
    .pos-section-mitigacion {
      display: inline-block;
      height: auto;
      margin-top: 30px;
      background-image: url("~/assets/img/mitigacion_mobile.jpg");
      background-size: contain;
      background-position: center top;
      padding-bottom: 50px;
      width: 100%;
      .sep-inicio {
        display: none;
      }
      .path {
        display: none;
      }
      .info-relative-mit {
        display: inline-block;
        grid-area: none;
        width: 100%;
        box-sizing: border-box;
        padding: 0 35px;
        .subtitle {
          display: inline-block;
          width: 100%;
          transform: none;
          left: 0px;
          top: 0;
          position: relative;
          h3 {
            text-align: left;
            font-size: 19px;
          }
        }
        .infor-start-mit {
          width: 100%;
          transform: none;
          left: 0px;
          top: 0px;
          position: relative;
          height: auto;
          h1 {
            position: relative;
            font-size: 51px;
            line-height: 51px;
          }
          h4 {
            font-size: 18px;
          }
          .button {
            display: inline-block;
            min-width: auto;
            max-width: 400px !important;
            width: auto;
            padding: 0 20px;
            white-space: nowrap;
          }
        }

        .ton {
          margin-top: 70px;
          margin-bottom: 50px;
          position: relative;
          top: 0px;
          display: inline-block;
          width: 100%;
          transform: none;
          left: 0px;
          text-align: right;
          .endk-small-texture {
            display: inline-block;
          }
          h4 {
            font-size: 19px;
            line-height: 22px;
          }
          p {
            br {
              display: none;
            }
          }
        }
        .metros {
          position: relative;
          top: 0px;
          display: inline-block;
          width: 100%;
          transform: none;
          left: 0px;
          margin-bottom: 50px;
          .endk-small-texture {
            display: inline-block;
          }
          h4 {
            font-size: 19px;
            line-height: 22px;
          }
        }
        .ha {
          position: relative;
          top: 0px;
          display: inline-block;
          width: 100%;
          transform: none;
          left: 0px;
          text-align: right;
          margin-bottom: 50px;
          .endk-small-texture {
            display: inline-block;
          }
          h4 {
            font-size: 19px;
            line-height: 22px;
          }
        }
        .per {
          position: relative;
          top: 0px;
          display: inline-block;
          width: 100%;
          transform: none;
          left: 0px;
          margin-bottom: 50px;
          .endk-small-texture {
            display: inline-block;
          }
          h4 {
            font-size: 19px;
            line-height: 22px;
          }
        }
        .final {
          position: relative;
          top: 0px;
          display: inline-block;
          width: 100%;
          transform: none;
          left: 0px;
          text-align: right;
          .endk-small-texture {
            display: inline-block;
          }
          h4 {
            font-size: 19px;
            line-height: 22px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-mitigacion">
    <div class="aux-p-mit">{{ percent }}</div>
    <div class="pos-bg-section-mitigacion"></div>
    <div class="pos-bg-section-mitigacion-fixed" :style="bgStyle"></div>
    <div class="pos-section-mitigacion">
      <div class="sep-inicio"></div>
      <div class="path">
        <!-- Path -->
        <endk-large-path :percent="percent" />
      </div>
      <div class="info-relative-mit">
        <div class="subtitle">
          <h3>Nuestras medidas de</h3>
        </div>
        <div class="infor-start-mit">
          <h1>Mitigación</h1>
          <br />
          <h4>
            Compromiso con el medio ambiente
          </h4>
          <p>
            Además de las regulaciones medioambientales que existen actualmente
            en el país, como empresa tomamos roles propios que nos permiten
            estar en un estado ambiental superior mundialmente.
          </p>

          <button
            class="button"
            dc="Descargar Informe"
            v-on:click="downloadCatalogo()"
          >
            Descargar Informe
          </button>
        </div>

        <div class="ton">
          <endk-small-texture text="33 ton" align="end" />
          <h4>
            Gases de efecto invernadero <br />
            neutralizados al año
          </h4>
          <p>
            Llevamos a cero la huella de carbono<br />
            en cada fase de nuestro proceso<br />
            productivo.
          </p>
          <br />
          <ul>
            <li>1. Extracción</li>
            <li>2. Fabricación</li>
            <li>3. Consumo</li>
            <li>4. Entrega</li>
          </ul>
          <br />
          <p>
            El concepto “huella de carbono” aborda la suma del<br />
            impacto de todas las emisiones de gases de efecto<br />
            invernadero atribuidas alos materiales a lo largo de<br />
            su ciclo devida (extracción,fabricación ,construcción,<br />
            utilización/mantención y finalización de vida útil).
          </p>
          <p>
            La neutralización del carbono es una alternativa que<br />
            busca evitar las consecuencias del desequilibrio del efecto<br />
            invernadero, a partir del cálculo de sus emisiones.
          </p>
        </div>

        <div class="metros">
          <endk-small-texture text="200 m2" align="start" />
          <h4>
            Preservación de árboles<br />
            nativos con la fundación PIC.
          </h4>
          <p>
            Resguardamos el escositema a nivel nacional en<br />
            conjunto con la fundación Preserve in Community.
          </p>
          <p><strong>Cómo funciona?</strong></p>
          <p>
            Diferentes fundaciones de todo el mundo<br />
            pueden usar a PIC para financiar sus<br />
            proyectos.
          </p>
          <p>
            Cada proyecto tiene un número de PICS<br />
            preservables. Cada PIC representa 1m2<br />
            de terreno y cuesta $1USD al año.
          </p>
        </div>

        <div class="ha">
          <endk-small-texture text="120 ha" align="end" />
          <h4>
            Banco de compensación de <br />
            especies protegidas.
          </h4>
          <p>
            Preservamos la biodiversidad de nuestro<br />
            ecosistema en la región de Ñuble.
          </p>
          <p>
            <strong
              >Qué especies se están <br />
              preservando?</strong
            >
          </p>
          <p>
            Diversas especies que están en peligro de <br />
            extinción y otras en estado crítico de <br />
            conservación son resguardadas por <br />
            profesionales y técnicos especialistas de <br />
            Conaf. Dentro de estas se encuentran el <br />
            naranjillo, raulí, lingue, arrayán, coihue, <br />
            avellano, entre otros.
          </p>
        </div>

        <div class="per">
          <endk-small-texture text="90%" align="start" />
          <h4>
            De desechos reciclados<br />
            o reutilizados.
          </h4>
          <p>
            Aprovechamos los residuos dándoles<br />
            una segunda vida útil.
          </p>
          <p><strong>Qué se ha hecho con los residuos?</strong></p>
          <p>
            Diversas especies que están en peligro de <br />
            extinción y otras en estado crítico de <br />
            conservación son resguardadas por <br />
            profesionales y técnicos especialistas de <br />
            Conaf. Dentro de estas se encuentran el <br />
            naranjillo, raulí, lingue, arrayán, coihue, <br />
            avellano, entre otros.
          </p>
        </div>
        <div class="final">
          <endk-small-texture text="1 ha" align="end" />
          <h4>
            De árboles plantados en<br />
            Chiloé y Buchupureo.
          </h4>
          <p>
            Junto a la fundación Núcleo Nativo<br />
            hemos plantado 450 árboles.
          </p>
          <p><strong>Fundación Núcleo Nativo</strong></p>
          <p>
            Desarrollo de proyectos y acciones que <br />
            buscan fortalecer el vínculo entre la <br />
            sociedad y los ecosistemas en los que <br />
            habitan.
          </p>
          <p>
            El proyecto recoge su experiencia y <br />
            conocimiento para realizar acciones que <br />
            den valor a su patrimonio natural, <br />
            histórico, cultural y restaurar ecosistemas <br />
            degradados por diversas causas, <br />
            derivadas principalmente de la escasez de <br />
            agua y recursos naturales para una vida <br />
            sostenible.
          </p>
        </div>
      </div>
      <div class="mask-final-mit"></div>
    </div>
  </section>
</template>

<script>
import endkLargePath from "~/components/endkLargePath";
import endkSmallTexture from "~/components/endkSmallTexture";

export default {
  name: "endk-section-mitigacion",
  data() {
    return {
      largePath: null,
      lpw: 0,
      lph: 0,
    };
  },
  components: {
    endkLargePath,
    endkSmallTexture,
  },
  mounted() {
    /*
    this.bar = new ProgressBar.Path("#line-path-m", {
      easing: "linear",
      duration: 400,
    });*/
    // this.largePath = this.$refs.largePath;
    //    this.lpw = this.largePath.getBoundingClientRect().width;
    //    this.lph = this.largePath.getBoundingClientRect().height;
  },
  computed: {
    bgStyle() {
      return { opacity: this.percent / 10 };
    },
    percent() {
      let percent = this.$store.getters["app/getPProyectos"].p - 80;
      if (percent > 70) {
        return Math.round(percent * 1.1);
      }
      return percent;
    },
    pos1() {
      return { transform: ` translateX(200px)` };
    },
  },
  watch: {
    percent(n) {
      // this.bar.set(n / 100);
    },
  },
  methods: {
    downloadCatalogo() {
      window.open("/Certificado_GEI_Endemik_ES.pdf", "Download");
    },
  },
};
</script>
