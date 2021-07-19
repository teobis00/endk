<style lang="less">
.nosotros-interior {
  position: fixed;
  width: calc(100vw);
  height: 100vh;
  left: 0px;
  top: 0px;
  z-index: 90;
  .nosotros-layout-interior {
    width: 100%;
    height: 100%;
    position: relative;
    .nosotros-interior-left {
      position: relative;
      width: calc(68vw + 71px);
      height: 100vh;
      background-color: white;
      z-index: 50;
      box-sizing: border-box;
      padding-left: 109px;
      padding-right: 65px;
      overflow-y: auto;
      .sep-top-inicio-texto {
        width: 100%;
        height: 20vh;
      }
      .sep-bottom-fin-texto {
        width: 100%;
        height: 40vh;
      }
      .pin-title {
        border-top: 1px solid rgba(222, 222, 222, 0);
        border-bottom: 1px solid rgba(222, 222, 222, 0);
        background-color: white;
        width: 100%;
        height: 47px;
        line-height: 47px;
        transform: translateY(0px);
        transition: transform 200ms cubic-bezier(0.65, 0, 0.35, 1);
        will-change: transform;
        margin-bottom: 30px;
        h4 {
          float: left;
          line-height: 47px;
          transform: scale(1);
          transform-origin: 0%;
          margin-left: 0px;
          transition: transform 200ms cubic-bezier(0.65, 0, 0.35, 1),
            margin-left 180ms cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
        }

        &.fixed {
          border-top: 1px solid rgba(222, 222, 222, 1);
          border-bottom: 1px solid rgba(222, 222, 222, 1);
          width: 120%;
          transform: translateX(-38px);
          position: sticky;
          h4 {
            transform: scale(0.85);
            margin-left: 38px;
          }
        }

        &.f1 {
          top: 0;
        }

        &.f2 {
          top: 48px;
        }
        &.f3 {
          top: 96px;
        }
        &.f4 {
          top: 144px;
        }
        &.f5 {
          top: 192px;
        }
      }
      h5 {
        font-size: 18px;
        font-weight: 700;
      }
      .logos {
        width: 100%;
        display: grid;
        grid-template-columns: 1.5fr 2fr 0.9fr;
        figure {
          margin: 0;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 20px;
          img {
            width: 100%;
          }
        }
      }
    }
    .nosotros-interior-right {
      width: calc(32vw - 71px);
      height: 100vh;
      background-color: white;
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 40;
      background-image: url("~/assets/img/bg_interior_nosotros.jpg");
      background-size: cover;
      background-position: center right;
      box-sizing: border-box;
      padding: 16px 19px;

      button.button {
        min-width: 100px;
        width: 100px;
        float: right;
      }
    }
  }
}

@media screen and (max-width: 580px) {
  .nosotros-interior {
    .nosotros-layout-interior {
      .nosotros-interior-left {
        overflow-x: hidden;
        width: 100%;
        padding-left: 35px;
        padding-right: 35px;
        height: calc(75vh - 71px);
        top: 71px;
        .pin-title {
          position: sticky;
          top: 0px;
          h4 {
            white-space: nowrap;
          }
          &.f1 {
            top: 0px;
          }

          &.f2 {
            top: 0px;
          }
          &.f3 {
            top: 0px;
          }
          &.f4 {
            top: 0px;
          }
          &.f5 {
            top: 0px;
          }
          &.fixed {
            width: 140%;
          }
        }

        .logos {
          width: 100%;
          display: inline-block;
          grid-template-columns: 1.5fr 2fr 0.9fr;
          figure {
            display: block;
            margin: 0;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 20px;
            img {
              width: 100%;
            }
          }
        }
      }
      .nosotros-interior-right {
        width: 100%;
        height: 25vh;
        left: 0px;
        top: 75vh;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-image: url("~/assets/img/bg_side_nosotros_mobile.jpg");

        button.button {
          max-width: 135px;
          width: 135px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="nosotros-interior interior">
    <XyzTransition xyz="fade down-100%">
      <div v-show="mainLayout" class="nosotros-layout-interior">
        <div class="nosotros-interior-left" v-on:scroll="checkScroll">
          <XyzTransition xyz="fade left-100%">
            <div class="title-sticky" v-show="rightLayoutMedia">
              <div class="sep-top-inicio-texto"></div>
              <div
                ref="qt1"
                class="pin-title"
                :class="{ fixed: fixed1, f1: fixed1 }"
              >
                <h4>Quienes Somos</h4>
              </div>
              <h5>Misión</h5>
              <p>
                La innovación y sostenibilidad han sido principios rectores
                desde los inicios de la empresa. La tecnología y nuestra
                constante evolución en la forma que trabajamos la madera y sus
                derivados , nos ha permitido diferenciarnos dentro del mercado.
                Es así como la empresa logra posicionarse y trabajar de manera
                conjunta con los estudios de arquitectura más importantes del
                país y a nivel mundial.
              </p>
              <p></p>
              <h5>Visión</h5>
              <p>
                En sincronía con el programa Redd+ de Naciones Unidas, buscamos
                de manera permanente potenciar el valor de la madera, integrando
                comunidades en el manejo forestal responsable, también a
                nuestros proveedores a través de programas propios que nos
                permiten tener un estándar de responsabilidad empresarial
                ambiental superior. Estos programas enmarcan el ciclo productivo
                completo de la empresa, trazando todos los procesos, llevando
                estos a generar un impacto positivo en el medio ambiente.
              </p>
              <p></p>
              <h5>Valores</h5>
              <p>
                Nuestro equipo abordará tu proyecto desde un inicio, ofreciendo
                un servicio íntegro , que comprende el diseño hasta la
                fabricación. Los especialistas que estarán a cargo te
                asesorarán, para que las exigencias se cumplan plenamente. La
                empresa se hará cargo de la gestión de tus expectativas ,
                supervisando aquellos detalles que a ojos de un experto son
                claves para el correcto funcionamiento de tu proyecto. La
                calidad, la rapidez en la ejecución, y el bajo impacto
                ambiental, son principios rectores en la empresa.
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <div
                ref="qt2"
                class="pin-title"
                :class="{ fixed: fixed2, f2: fixed2 }"
              >
                <h4>Nuestra estrategia</h4>
              </div>
              <p>
                Fundada el 2016 en Chile, Endemik es hoy una empresa de diseño y
                arquitectura interior boutique de alto estándar. Diseñamos,
                fabricamos y vendemos una amplia gama de productos nacionales e
                importados de la más alta calidad. Todos estos productos han
                sido concebidos pensando en que duren mucho tiempo. Intentamos
                que nuestros objetos sean atemporales, logrando así penetrar en
                distintos espacios de diseño del país.
              </p>
              <p>
                Nuestra empresa ofrece todo en el ámbito del diseño y
                arquitectura: Desde la ejecución de planos, renderización y
                análisis de propuestas, hasta la ejecución material del
                proyecto.
              </p>
              <p>
                Los acabados, los encuentros de las diferentes piezas y todos
                los procesos son revisados de manera exhaustiva. Buscamos
                frecuentemente nuevos materiales para aplicar en nuestros
                proyectos, diferenciándonos de otras empresas del mismo rubro.
                En Endemik pensamos siempre en el futuro cuando diseñamos algo,
                asegurándonos de que sea reconocible y que tenga una
                personalidad diferente. Cuidamos la estética de cada proyecto,
                que debe estar precedida de la funcionalidad.
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <div
                ref="qt3"
                class="pin-title"
                :class="{ fixed: fixed3, f3: fixed3 }"
              >
                <h4>Conservación y reforestación</h4>
              </div>
              <p>
                Como empresa, además del compromiso que tomamos con el diseño
                sostenible, contamos con la trazabilidad completa de nuestras
                maderas y materias primas. Nos preocupamos de que las especies
                extraídas se hayan hecho conforme a los requerimientos de la
                Corporación Nacional Forestal -CONAF- y bajo el control estricto
                del Forest Stewardship Council-FSC-.
              </p>
              <p>
                Desde que iniciamos las actividades en junio de 2016, hemos
                estimado la huella de carbono producida por Endemik. Esto lo
                hicimos para poder compensarla y desarrollar acciones concretas
                que nos permitan reducirla a cero gradualmente con el tiempo,
                consolidando a la fecha una producción carbono neutral. La
                búsqueda por ser un referente nacional en un mercado altamente
                competitivo se ha caracterizado por la aplicación de estrictos
                controles y estándares de calidad internos. Esto llevó al
                directorio de Endemik a certificarse en el “Protocolo de Gases
                de Efecto de Invernadero, Estándar Corporativo de Contabilidad y
                Reporte”, dando así una gestión efectiva a las emisiones de
                gases de efecto invernadero de la empresa.
              </p>
              <p>
                Actualmente la empresa cuenta con un banco de compensación de
                biodiversidad de más de 120 hectáreas, donde especies que están
                en peligro de extinción y otras en estado crítico de
                conservación, son resguardadas por profesionales y técnicos
                especialistas de CONAF. Es por esto que Endemik, desde sus
                inicios, ha tomado como misión la conservación y preservación de
                nuestro bosque nativo chileno. Endemik inició un proyecto en la
                zona de Buchupureo, región de Ñuble, que alcanza a la fecha la
                plantación de más de 300 árboles nativos, y que tiene como
                objetivo alcanzar la plantación de 1.000 árboles más para el año
                2020.
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <div
                ref="qt4"
                class="pin-title"
                :class="{ fixed: fixed4, f4: fixed4 }"
              >
                <h4>MEI (Minimal environmental impact)</h4>
              </div>
              <p>
                Además de las regulaciones medioambientales que existen
                actualmente en el país, como empresa tomamos roles propios que
                nos permiten estar en un estado ambiental superior mundialmente.
                Nuestra política de empresa se basa en el concepto minimal
                environmental impact (MEI), por lo que usamos maderas y sus
                derivados provenientes de bosques con manejo forestal
                sustentable, dándole vida a nuestros productos.
              </p>
              <p>
                Endemik genera un impacto positivo neto en cada proyecto, ya que
                además de compensar nuestras emisiones de gases de efecto
                invernadero, generamos también conservación y restauración
                ambiental.
              </p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <div
                ref="qt5"
                class="pin-title"
                :class="{ fixed: fixed5, f5: fixed5 }"
              >
                <h4>Nuestros colaboradores</h4>
              </div>
              <div class="logos">
                <figure>
                  <img
                    src="~/assets/img/nosotros/logo-recilo-aceite-chile.png"
                    alt=""
                  />
                </figure>
                <figure>
                  <img src="~/assets/img/nosotros/logo_ret.png" alt="" />
                </figure>
                <figure>
                  <img src="~/assets/img/nosotros/300x100.gif" alt="" />
                </figure>
              </div>
              <div class="sep-bottom-fin-texto"></div>
            </div>
          </XyzTransition>
        </div>
        <XyzTransition xyz="fade left-100%">
          <div v-show="rightLayoutMedia" class="nosotros-interior-right">
            <button class="button" dc="Volver" v-on:click="removeMainLayout()">
              Volver
            </button>
          </div>
        </XyzTransition>
      </div>
    </XyzTransition>
  </div>
</template>
<script>
// import Intersect from "vue-intersect";

export default {
  data() {
    return {
      mainLayout: false,
      rightLayoutMedia: false,
      p1: 1,
      p2: 1,
      p3: 1,
      p4: 1,
      p5: 1,
      init: true,
    };
  },
  // components: { Intersect },
  head: {
    title: "Sobre Nosotros",
    meta: [{ name: "Endemik" }],
  },
  meta: {
    section: "nosotros-interior",
    parent: "nosotros",
  },
  created() {},
  mounted() {
    console.log("loaded nosotros detalle");
    this.$store.commit("app/setDetalleColeccionOpen", true);
    this.showMainLayout();
  },
  computed: {
    dektop() {
      return !this.$store.getters["device/getDevice"].isMobile;
    },
    fixed1() {
      if (this.init) {
        return false;
      }
      if (!this.dektop) {
        return this.p1 === 71;
      }
      return Number(this.p1) < 1;
    },
    fixed2() {
      if (this.init) {
        return false;
      }
      if (!this.dektop) {
        return this.p1 === 71;
      }
      return Number(this.p2) < 49;
    },
    fixed3() {
      if (this.init) {
        return false;
      }
      if (!this.dektop) {
        return this.p1 === 71;
      }
      return Number(this.p3) < 97;
    },
    fixed4() {
      if (this.init) {
        return false;
      }
      if (!this.dektop) {
        return this.p1 === 71;
      }
      return Number(this.p4) < 145;
    },
    fixed5() {
      if (this.init) {
        return false;
      }
      if (!this.dektop) {
        return this.p1 === 71;
      }
      return Number(this.p5) < 194;
    },
  },
  methods: {
    checkScroll(e) {
      if (e) {
        console.log("init", false);
        this.init = false;
      }
      this.init = false;
      const qt1 = this.$refs.qt1;
      const qt2 = this.$refs.qt2;
      const qt3 = this.$refs.qt3;
      const qt4 = this.$refs.qt4;
      const qt5 = this.$refs.qt5;

      this.p1 = qt1.getBoundingClientRect().y;
      this.p2 = qt2.getBoundingClientRect().y;
      this.p3 = qt3.getBoundingClientRect().y;
      this.p4 = qt4.getBoundingClientRect().y;
      this.p5 = qt5.getBoundingClientRect().y;
      console.log("this.p1", this.p1);
      console.log("this.p2", this.p2);
      console.log("this.p3", this.p3);
      console.log("this.p4", this.p4);
      console.log("this.p5", this.p5);
    },
    onChange(e) {
      console.log("e", e);
    },
    removeMainLayout() {
      this.rightLayoutMedia = false;
      setTimeout(() => {
        this.mainLayout = false;
        setTimeout(() => {
          this.$router.push("/nosotros");
        }, 800);
      }, 400);
    },
    showMainLayout() {
      this.mainLayout = true;
      setTimeout(() => {
        this.rightLayoutMedia = true;
      }, 380);
    },
  },
};
</script>
