<style lang="less">
.proyectos-interior {
  position: fixed;
  width: calc(100vw);
  height: 100vh;
  left: 0px;
  top: 0px;
  z-index: 99;
  .proyectos-despliegue {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-left: 98px;
    padding-top: 27px;
    background-color: white;
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .endk-top-navbar {
      height: 28px;
      width: 100%;
      display: grid;
      grid-template-columns: auto 85px;
      z-index: 50;
      nav.endk-breadcrumb {
        display: inline-block;
        li {
          list-style: none;
          display: inline-block;
          a {
            text-decoration: none;
            color: #000000;
            &.active {
              font-weight: 700;
            }
          }
        }
        &.invert {
          li {
            a {
              color: white;
            }
          }
        }
      }
      .button {
        min-width: 0px;
        width: 85px;
      }
    }
    .place-navbar {
      height: 28px;
      z-index: 60;
    }
    .place-title {
      width: 100%;
      height: auto;
      text-align: center;
      min-height: 55px;
      margin-bottom: 20px;
      z-index: 40;
      h2 {
        z-index: ;
        margin-top: 34px;
        // prettier-ignore
        transition: opacity 800ms cubic-bezier(0.33, 1, 0.68, 1), transform 800ms cubic-bezier(0.33, 1, 0.68, 1);
        transform: translateY(0);
        opacity: 1;
        &.ly-detalle {
          transform: translateY(-30vh);
          opacity: 0;
        }
      }
    }
    .place-interior {
      .pos-content {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .place-content {
          width: 87vw;
          box-sizing: border-box;
          padding: 0px 20px 0 0;
          display: grid;
          grid-template-areas:
            "lc b b b a a rc"
            "lc b b b a a rc"
            "lc b b b a a rc"
            "lc b b b c c rc"
            "lc d d d f f rc";
          min-height: 400px;
          grid-column-gap: 44px;

          .lc {
            grid-area: lc;
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            z-index: 40;
            span {
              display: block;
              width: 32px;
            }
            svg {
              align-self: center;
            }

            // prettier-ignore
            transition: transform 800ms cubic-bezier(0.33, 1, 0.68, 1);
            transform: translateY(0) scale(1);
            opacity: 1;
            will-change: transform, opacity;
            &.ly-detalle {
              transform: translateY(-20vh) scale(1.2);
              opacity: 0.8;
            }
          }
          .rc {
            grid-area: rc;
            display: grid;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
            z-index: 40;
            span {
              display: block;
              width: 32px;
            }
            svg {
              align-self: center;
            }

            // prettier-ignore
            transition: transform 800ms cubic-bezier(0.33, 1, 0.68, 1);
            transform: translateY(0) scale(1);
            opacity: 1;
            will-change: transform, opacity;
            &.ly-detalle {
              transform: translateY(-20vh) scale(1.2);
              opacity: 0.8;
            }
          }

          .media {
            grid-area: b;
            box-sizing: border-box;
            position: relative;

            .place-out {
              width: 120%;
              height: 120%;
              left: -10%;
              top: -10%;
              position: absolute;
              background-color: white;
              z-index: 20;
            }

            .marker-clip {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              left: 0px;
              top: 0px;
              position: absolute;
              background-color: transparent;
              border: 2px solid white;
              z-index: 40;
              transform: translateX(-50%) translateY(-50%);
              opacity: 1;
              transition: opacity 300ms cubic-bezier(0.33, 1, 0.68, 1);
            }

            img.placeMedia {
              width: 40vw;
              float: right;
              position: absolute;
              left: 0px;
              top: 0px;
              opacity: 0;
              z-index: 50;
              cursor: none;
              backface-visibility: hidden;
            }

            img.hiddenMedia {
              width: 40vw;
              float: right;
              visibility: hidden;
            }
            img.floatMedia {
              width: 100%;
              height: 100%;
              object-fit: cover;
              position: absolute;
              right: 0px;
              top: 0px;
              z-index: 20;
              filter: grayscale(100%);
              transition: transform 800ms cubic-bezier(0.33, 1, 0.68, 1),
                filter 800ms cubic-bezier(0.33, 1, 0.68, 1),
                width 800ms cubic-bezier(0.33, 1, 0.68, 1),
                height 800ms cubic-bezier(0.33, 1, 0.68, 1);
              will-change: transform, filter, width, height;
              backface-visibility: hidden;
              /*transition: all 800ms linear;*/
            }
            img.floatMedia-clip {
              width: 100%;
              height: 100%;
              object-fit: cover;
              position: absolute;
              right: 0px;
              top: 0px;
              z-index: 30;
            }
          }
          .info {
            grid-area: a;
            z-index: 40;
            span {
              display: inline-block;
              color: #7f7b6b;
              font-size: 18px;
              line-height: 20px;
              transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
              clip-path: inset(0% 100% 0% 0%);
              &.reveal {
                clip-path: inset(0% 0% 0% 0%);
              }
            }

            p {
              transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
              clip-path: inset(0% 100% 0% 0%);
              &.reveal {
                clip-path: inset(0% 0% 0% 0%);
              }
            }
          }
          .thumbs {
            grid-area: c;
            display: flex;
            align-items: flex-end;
            z-index: 40;
            // prettier-ignore
            transition: opacity 800ms cubic-bezier(0.33, 1, 0.68, 1), transform 800ms cubic-bezier(0.33, 1, 0.68, 1);
            transform: translateY(0);
            opacity: 1;
            &.ly-detalle {
              transform: translateY(30vh);
              opacity: 0;
            }
            nav.proyecto-carusel {
              width: 100%;
              height: auto;
              display: flex;
              justify-content: space-between;
              li {
                width: 45%;
                height: 80%;
                list-style: none;
                display: flex;
                img {
                  width: 100%;
                }
              }
            }
          }
          .info-bottom {
            grid-area: d;
            box-sizing: border-box;
            padding-top: 5px;
            transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
            clip-path: inset(0% 100% 0% 0%);
            z-index: 40;
            &.reveal {
              clip-path: inset(0% 0% 0% 0%);
            }

            // prettier-ignore
            transition: opacity 800ms cubic-bezier(0.33, 1, 0.68, 1), transform 800ms cubic-bezier(0.33, 1, 0.68, 1);
            transform: translateY(0);
            opacity: 1;
            &.ly-detalle {
              transform: translateY(30vh);
              opacity: 0;
            }

            .line-date {
              grid-area: y;
              width: 100%;
              display: grid;
              grid-template-columns: auto 120px;
              .line {
                display: flex;
                align-items: center;
                span {
                  display: inline-block;
                  border-top: 2px solid #d0d0c6;
                  width: 100%;
                  height: 1px;
                }
              }
              .date {
                background-color: #fff;
                padding-left: 10px;
                box-sizing: border-box;
                text-align: right;
                font-size: 14px;
                font-weight: 700;
                color: #1c1c1c;
              }
            }
            .house-name-owner {
              grid-area: r;
              display: inline-block;
              span {
                font-size: 14px;
                color: #7f7b6b;
                font-weight: 700;
              }
              p {
                padding: 0;
                margin: 0;
                font-size: 14px;
                color: #1c1c1c;
                font-weight: 300;
                margin-top: -2px;
              }
            }
            .area_n {
              grid-area: n;
            }
            .area_e {
              grid-area: e;
            }
            .area_f {
              grid-area: f;
            }
          }
        }
      }
    }
    .place-bottom {
      text-align: right;
      width: 100%;
      min-height: 60px;
      padding-right: 115px;
      box-sizing: border-box;
      .button {
        min-width: 180px;
      }
      // prettier-ignore
      transition: opacity 800ms cubic-bezier(0.33, 1, 0.68, 1), transform 800ms cubic-bezier(0.33, 1, 0.68, 1);
      transform: translateY(0);
      opacity: 1;
      &.ly-detalle {
        transform: translateY(30vh);
        opacity: 0;
      }
    }

    .place-detalle {
      width: 40vw;
      height: calc(100vh - 55px);
      top: 55px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: absolute;
      left: 100vw;
      .int-place-detalle {
        margin-bottom: 8vh;
        width: 60%;
        h4 {
          transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
          clip-path: inset(0% 100% -1000% 0%);
          &.reveal {
            clip-path: inset(0% 0% -1000% 0%);
          }
        }
        .subtitulo {
          color: #7f7b6b;
          font-size: 18px;
          font-weight: 700;
          transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
          clip-path: inset(0% 100% -1000% 0%);
          &.reveal {
            clip-path: inset(0% 0% -1000% 0%);
          }
        }
        .parrafo-content {
          transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
          clip-path: inset(0% 100% -1000% 0%);
          &.reveal {
            clip-path: inset(0% 0% -1000% 0%);
          }
          p {
            font-size: 14px;
            color: #1c1c1c;
            font-weight: 300;
          }
        }
      }
    }
  }
}

.ovxyz-custom-time1 {
  --xyz-in-duration: 700ms;
  --xyz-ease: cubic-bezier(0.33, 1, 0.68, 1);
}

.ovxyz-custom-time2 {
  --xyz-in-duration: 600ms;
  --xyz-ease: cubic-bezier(0.33, 1, 0.68, 1);
}

.ovxyz-custom-time3 {
  --xyz-in-duration: 200ms;
  --xyz-ease: cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
<template>
  <div class="proyectos-interior interior">
    <XyzTransition xyz="fade down-100%">
      <div class="proyectos-despliegue" v-show="despliegueTotal">
        <div class="place-navbar">
          <XyzTransition xyz="fade up-100%">
            <div class="endk-top-navbar" v-if="endkTopNavbar">
              <nav class="endk-breadcrumb" :class="{ invert: invertNav }">
                <li>
                  <NuxtLink to="/">Inicio /</NuxtLink>
                </li>
                <li><NuxtLink to="/">Proyectos /</NuxtLink></li>
                <li>
                  <NuxtLink to="/" class="active">{{ titulo }}</NuxtLink>
                </li>
              </nav>

              <button class="button" dc="Volver" v-on:click="volver_proyectos">
                Volver
              </button>
            </div>
          </XyzTransition>
        </div>
        <div class="place-title">
          <XyzTransition xyz="fade down-100%" class="ovxyz-custom-time1">
            <h2 :class="{ 'ly-detalle': lyDetalle }" v-show="endkTitle">
              {{ titulo }}
            </h2>
          </XyzTransition>
        </div>
        <div class="place-interior">
          <div class="pos-content">
            <div class="place-content">
              <div class="lc" :class="{ 'ly-detalle': lyDetalle }">
                <span></span>
                <span></span>
                <span></span>
                <XyzTransition xyz="fade up-5" class="ovxyz-custom-time3">
                  <v-icon v-show="endkChevron" name="chevron_left" scale="2" />
                </XyzTransition>
                <span></span>
              </div>
              <div class="media">
                <div class="place-out" v-on:mouseover="handleOut"></div>
                <div class="marker-clip" :style="posMarker"></div>
                <img
                  class="placeMedia"
                  src="~/assets/img/placeIMGProyecto.png"
                  alt=""
                  ref="placeMedia"
                  v-on:click="setMotionDetalle"
                  v-on:mouseover="handleMask"
                  v-on:mouseleave="handleMaskLeave"
                  v-on:mousemove="handleClip"
                />
                <img
                  class="hiddenMedia"
                  src="~/assets/img/placeIMGProyecto.png"
                  alt=""
                />
                <XyzTransition xyz="fade down-25%" class="ovxyz-custom-time2">
                  <img
                    class="floatMedia"
                    v-show="endkMainMedia"
                    :style="transitionStyle"
                    :src="media.current_main"
                    alt=""
                  />
                </XyzTransition>
                <img
                  class="floatMedia-clip"
                  :style="clipPath"
                  :src="media.current_main"
                  alt=""
                />
              </div>
              <div class="info">
                <span :class="{ reveal: endkSubTitle }">{{
                  titulo_interior_proyecto
                }}</span>
                <p class="desc" :class="{ reveal: endkParrafo }">
                  {{ descripcion_interior_proyecto }}
                </p>
              </div>

              <div class="thumbs" :class="{ 'ly-detalle': lyDetalle }">
                <nav class="proyecto-carusel">
                  <li>
                    <XyzTransition
                      xyz="fade down-25%"
                      class="ovxyz-custom-time2"
                    >
                      <img
                        v-if="endkT1"
                        src="~/assets/img/thumb1_p.jpg"
                        alt=""
                      />
                    </XyzTransition>
                  </li>
                  <li>
                    <XyzTransition
                      xyz="fade down-25%"
                      class="ovxyz-custom-time2"
                    >
                      <img
                        v-if="endkT2"
                        src="~/assets/img/thumb2_p.jpg"
                        alt=""
                      />
                    </XyzTransition>
                  </li>
                </nav>
              </div>

              <div
                class="info-bottom"
                :class="{ reveal: endkInfoBotom, 'ly-detalle': lyDetalle }"
              >
                <div class="line-date">
                  <div class="line">
                    <span></span>
                  </div>
                  <div class="date">
                    Sep 24, 2021
                  </div>
                </div>

                <div class="house-name-owner">
                  <span>Casa Perez Maggi</span>
                  <p>Pastor Fernandez</p>
                </div>
              </div>
              <div class="rc" :class="{ 'ly-detalle': lyDetalle }">
                <span></span>
                <span></span>
                <span></span>
                <XyzTransition xyz="fade up-5" class="ovxyz-custom-time3">
                  <v-icon v-show="endkChevron" name="chevron_right" scale="2" />
                </XyzTransition>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="place-bottom" :class="{ 'ly-detalle': lyDetalle }">
          <XyzTransition xyz="fade down-100%">
            <button v-if="endkTopNavbar" class="button">
              Descargar proyectos
            </button>
          </XyzTransition>
        </div>

        <div class="place-detalle" :style="interiorStyleTransition">
          <div class="int-place-detalle">
            <h4 class="alt" :class="{ reveal: interiorRevealTitle }">
              Revestimiento <br />de living
            </h4>
            <br />
            <span class="subtitulo" :class="{ reveal: interiorRevealSubTitle }">
              Revestimiento de living <br />
              Lo Barnechea,<br />
              Región Metropolitana<br /><br />
              Sept 24, 2021.
            </span>
            <div
              class="parrafo-content"
              :class="{ reveal: interiorRevealParrafo }"
            >
              <p>Revestimiento de madera <br />Clearwood.</p>
              <p>
                Dimensiones de largos fijos 4.5 mt,<br />
                ancho de 10 cm, espesor de 1,5 cm<br />
                y cantería de 10 mm.
              </p>
              <p>
                Montaje en subestructura de<br />
                metalcon de 4,5 x 4,5 cm.
              </p>
              <p>Tablas machihembradas.</p>
              <p>
                Acabado con barniz hydrocrome<br />
                brillo nº 10, tinte color nogal con<br />
                protección UV.
              </p>
              <p>Lijado grano 180.</p>
            </div>
          </div>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>
<script>
import axios from "axios";

export default {
  meta: {
    section: "proyectos-interior",
    parent: "proyectos",
  },
  async asyncData({ route }) {
    const { section } = route.params;
    if (section === "proyectos-interior") {
      return {};
    }
    const { data } = await axios.get(`https://static.endemik.cl/${section}`);
    // console.log(data);
    return data;
  },
  data() {
    return {
      despliegueTotal: false,
      endkTopNavbar: false,
      endkTitle: false,
      endkMainMedia: false,
      endkSubTitle: false,
      endkParrafo: false,
      endkInfoBotom: false,
      endkT1: false,
      endkT2: false,
      endkChevron: false,
      imageX: -40,
      imageY: -40,
      showLayer: false,
      transOpt: {},
      transInterior: false,
      lyDetalle: false,
      placeInterior: false,
      interiorRevealTitle: false,
      interiorRevealSubTitle: false,
      interiorRevealParrafo: false,
      imageTarget: null,
      invertNav: false,
      media: {
        current_main: "",
      },
    };
  },
  computed: {
    interiorStyleTransition() {
      if (this.placeInterior) {
        return {
          left: "60vw",
        };
      }
    },
    transitionStyle() {
      if (this.transInterior) {
        let newW = Math.round(this.transOpt.w * 1.3);
        let diffW = newW - this.transOpt.w;
        let translateX = this.transOpt.left - 70 - diffW;
        console.log("diffW", diffW);
        console.log("translateX", translateX);
        return {
          // prettier-ignore
          // transform: `translateX(${translateX * -1}px) translateY(-${this.transOpt.top}px)`,
          transform: `matrix(1, 0, 0, 1, ${translateX * -1}, -${this.transOpt.top})`,
          filter: "grayscale(0%)",
          width: `${newW}px`,
          height: `${this.$store.getters["app/getWindowHeight"]}px`,
        };
      }

      return { transform: "matrix(1, 0, 0, 1, 0,0)" };
    },
    clipPath() {
      if (!this.showLayer) {
        return {
          "clip-path": `circle(0px at -45px -45px)`,
        };
      }

      const x = this.imageX > 1 ? this.imageX + 3 : -45;
      const y = this.imageY > 1 ? this.imageY - 5 : -45;
      const size = x > 0 && y > 0 ? 40 : 0;
      return {
        "clip-path": `circle(${size}px at ${x}px ${y}px)`,
      };
    },
    posMarker() {
      if (!this.showLayer) {
        return {
          left: "-45px",
          top: "-45px",
          opacity: 0,
        };
      }
      const x = this.imageX > 1 ? this.imageX + 3 : -45;
      const y = this.imageY > 1 ? this.imageY - 3 : -45;
      const opacity = x > 0 && y > 0 ? 1 : 0;
      return {
        left: `${x}px`,
        top: `${y}px`,
        opacity,
      };
    },
  },
  mounted() {
    console.log("loaded coleccion detalle");
    this.showLayout();
    window.onpopstate = (e) => {
      console.log("e", e);
    };

    this.imageTarget = this.$refs.placeMedia;

    if (this.casos) {
      this.media.current_main = this.casos[0].main_caso;
    } else {
      this.$router.push("/404");
    }
  },
  methods: {
    setMotionDetalle() {
      if (this.lyDetalle) {
        this.detalleRemove();
        setTimeout(() => {
          this.extendInterior();
        }, 900);
      } else {
        this.handleMaskLeave();
        this.extendInterior();
        setTimeout(() => {
          this.detalleReveal();
        }, 500);
      }
    },
    detalleRemove() {
      this.interiorRevealTitle = false;
      setTimeout(() => {
        this.interiorRevealSubTitle = false;
      }, 200);
      setTimeout(() => {
        this.interiorRevealParrafo = false;
      }, 400);
      setTimeout(() => {
        this.placeInterior = false;
      }, 600);
    },
    detalleReveal() {
      this.placeInterior = true;
      setTimeout(() => {
        this.interiorRevealTitle = true;
      }, 10);
      setTimeout(() => {
        this.interiorRevealSubTitle = true;
      }, 200);
      setTimeout(() => {
        this.interiorRevealParrafo = true;
      }, 400);
    },
    extendInterior(e) {
      this.lyDetalle = !this.lyDetalle;
      this.endkSubTitle = !this.endkSubTitle;
      this.endkParrafo = !this.endkParrafo;

      let {
        left,
        top,
        right,
        bottom,
      } = this.imageTarget.getBoundingClientRect();
      let { clientHeight: h, clientWidth: w } = this.imageTarget;
      left = Math.round(left);
      top = Math.round(top);
      right = Math.round(right);
      bottom = Math.round(bottom);
      this.transOpt = { left, top, right, bottom, w, h };
      this.transInterior = !this.transInterior;

      setTimeout(() => {
        this.invertNav = !this.invertNav;
      }, 100);

      window.history.pushState(
        "1",
        "Proyectos - Detalle",
        "/proyectos/mobiliario-en-obra/casa-perez-maggi"
      );
    },
    handleOut(e) {
      this.showLayer = false;
    },
    handleClip(e) {
      const elBounds = this.imageTarget.getBoundingClientRect();
      this.imageX = Math.round(e.clientX - elBounds.left);
      this.imageY = Math.round(e.clientY - elBounds.top);
    },
    handleMask(e) {
      if (!this.lyDetalle) {
        this.showLayer = true;
        const config = {
          stop: false,
          size: 40,
          plusSize: 2,
          showOutter: false,
        };
        this.$store.commit("cursor/setCursor", { e, config });
      }
    },
    handleMaskLeave(e) {
      this.showLayer = false;
      this.$store.commit("cursor/setCursor", false);
    },
    volver_proyectos() {
      if (this.lyDetalle) {
        this.setMotionDetalle();
      } else {
        this.endkTopNavbar = false;

        setTimeout(() => {
          this.despliegueTotal = false;
        }, 600);

        setTimeout(() => {
          this.$router.push("/proyectos");
        }, 1400);
      }
    },
    showContent() {
      this.despliegueTotal = true;
      setTimeout(() => {
        this.endkTitle = true;
      }, 600);

      setTimeout(() => {
        this.endkMainMedia = true;
      }, 700);

      setTimeout(() => {
        this.endkSubTitle = true;
        this.endkT1 = true;
      }, 800);

      setTimeout(() => {
        this.endkT2 = true;
      }, 900);
      setTimeout(() => {
        this.endkChevron = true;
      }, 1000);

      setTimeout(() => {
        this.endkParrafo = true;
      }, 1100);

      setTimeout(() => {
        this.endkInfoBotom = true;
      }, 1200);

      setTimeout(() => {
        this.endkTopNavbar = true;
      }, 1300);
    },
    showLayout() {
      setTimeout(() => {
        this.showContent();
      }, 600);
    },
  },
};
</script>
