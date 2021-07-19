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
            .chevron-container-left {
              position: relative;
              svg {
                align-self: center;
                position: relative;
                z-index: 10;
                /*
                rect {
                  transition: fill 200ms cubic-bezier(0.33, 1, 0.68, 1);
                  will-change: fill;
                }*/
                &.floating {
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  z-index: 11;
                  clip-path: circle(0px at 50% 100%);
                  opacity: 0;
                  transition: clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1),
                    opacity 400ms cubic-bezier(0.65, 0, 0.35, 1);
                  rect {
                    fill: #1c1c1c;
                  }
                  &:hover {
                    clip-path: circle(200% at 50% 0%);
                    opacity: 1;
                  }
                }
                &.chstatic:hover {
                  & + .floating {
                    clip-path: circle(200% at 50% 0%);
                    opacity: 1;
                  }
                }
              }
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
            .chevron-container-right {
              position: relative;
              svg {
                align-self: center;
                position: relative;
                z-index: 10;
                /*
                rect {
                  transition: fill 200ms cubic-bezier(0.33, 1, 0.68, 1);
                  will-change: fill;
                }*/
                &.floating {
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  z-index: 11;
                  clip-path: circle(0px at 50% 100%);
                  opacity: 0;
                  transition: clip-path 700ms cubic-bezier(0.65, 0, 0.35, 1),
                    opacity 400ms cubic-bezier(0.65, 0, 0.35, 1);
                  rect {
                    fill: #1c1c1c;
                  }
                  &:hover {
                    clip-path: circle(200% at 50% 0%);
                    opacity: 1;
                  }
                }
                &.chstatic:hover {
                  & + .floating {
                    clip-path: circle(200% at 50% 0%);
                    opacity: 1;
                  }
                }
              }
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

            .next-media {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0px;
              top: 0px;
              z-index: 20;
              visibility: hidden;
              img {
                width: 100%;
                height: 100%;
                filter: grayscale(100%);
                object-fit: cover;
              }
            }

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
              width: 110%;
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
                overflow: hidden;
                position: relative;
                img {
                  width: 100%;
                  filter: grayscale(100%);
                  &.t1n {
                    position: absolute;
                    top: 0px;
                    left: 100%;
                  }
                  &.t2n {
                    position: absolute;
                    top: 0px;
                    left: 100%;
                  }
                }
              }
            }
          }
          .info-bottom {
            grid-area: d;
            box-sizing: border-box;
            padding-top: 5px;
            clip-path: inset(0% 100% 0% 0%);
            z-index: 40;
            &.reveal {
              clip-path: inset(0% 0% 0% 0%);
            }

            // prettier-ignore
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
            clip-path: inset(0% -1000% -1000% 0%);
          }
        }
        .parrafo-content {
          transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
          clip-path: inset(0% 100% -1000% 0%);
          &.reveal {
            clip-path: inset(0% -1000% -1000% 0%);
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

/*  Proyectos - Mob  */
@media screen and (max-width: 580px) {
  .proyectos-interior {
    .mobile-layer {
      width: 100vw;
      height: calc(100vh);
      background-color: white;
      position: fixed;
      z-index: 120;
      box-sizing: border-box;
      padding-top: 80px;
      nav.endk-breadcrumb {
        display: inline-block;
        box-sizing: border-box;
        padding-left: 35px;
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
      h2 {
        font-size: 40px;
        box-sizing: border-box;
        padding: 20px 35px 10px 35px;
      }
      .bajada {
        box-sizing: border-box;
        padding: 20px 35px 10px 35px;
        color: #7f7b6b;
        font-size: 16px;
        font-weight: 700;
      }
      .parrafos {
        box-sizing: border-box;
        padding: 0px 35px 10px 35px;
        font-size: 13px;
        font-weight: 300;
        color: #1c1c1c;
        margin-bottom: 20px;
      }
      figure {
        position: relative;
        width: 100%;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
        &:before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0;
          z-index: 1;
          background-image: url("~/assets/img/plus_bg.svg");
          background-repeat: no-repeat;
          background-position: 50%;
        }
        img {
          width: 100vw;
          height: 60vw;
          object-fit: cover;
          filter: grayscale(100%);
        }
      }

      .sep-mobp {
        margin-top: 40px;
        margin-bottom: 140px;
        display: flex;
        justify-content: center;
      }
    }

    .content-mobile-interior {
      position: fixed;
      width: 100vw;
      height: calc(100vh);
      z-index: 130;
      background-color: white;
      overflow-y: auto;
      box-sizing: border-box;
      padding-top: 71px;
      box-sizing: border-box;
      figure {
        padding: 0;
        margin: 0;
        img {
          width: 100%;
          height: 50vh;
          object-fit: cover;
          opacity: 0;
          transition: opacity 300ms cubic-bezier(0.65, 0, 0.35, 1);
          &.reveal {
            opacity: 1;
          }
        }
      }
      h3 {
        font-size: 24;
        font-weight: 700;
        color: #000000;
        padding: 20px 35px;
        box-sizing: border-box;

        clip-path: inset(0% 100% 0% 0%);
        transition: clip-path 300ms cubic-bezier(0.65, 0, 0.35, 1);
        &.reveal {
          clip-path: inset(0% 0% 0% 0%);
        }
      }
      .subtitulo {
        font-size: 18px;
        font-weight: 700;
        color: #7f7b6b;
        padding: 20px 35px;
        box-sizing: border-box;
        clip-path: inset(0% 100% 0% 0%);
        transition: clip-path 300ms cubic-bezier(0.65, 0, 0.35, 1);
        &.reveal {
          clip-path: inset(0% 0% 0% 0%);
        }
      }
      .parrafos {
        font-size: 14px;
        font-weight: 300;
        color: #1c1c1c;
        padding: 20px 35px;
        box-sizing: border-box;
        padding-bottom: 50px;
        clip-path: inset(0% 100% 0% 0%);
        transition: clip-path 300ms cubic-bezier(0.65, 0, 0.35, 1);
        &.reveal {
          clip-path: inset(0% 0% 0% 0%);
        }
      }
      .nav-interior-mobil {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0px 35px;
        margin-bottom: 130px;
        button.chev {
          outline: none;
          border: transparent;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
<template>
  <div class="proyectos-interior interior">
    <XyzTransition xyz="fade down-100%" v-if="!dektop">
      <div
        ref="cmobileInterior"
        class="content-mobile-interior"
        v-show="interiordetallemob"
      >
        <div class="layer-mobile-inteirior">
          <figure>
            <img
              :class="{ reveal: transitionInteriorMobi }"
              :src="casos[index].main_caso"
              alt=""
            />
          </figure>

          <h3
            v-html="casos[index].interior.titulo_trabajo"
            :class="{ reveal: transitionInteriorMobi }"
          ></h3>
          <div
            class="subtitulo"
            :class="{ reveal: transitionInteriorMobi }"
            v-html="casos[index].interior.bajada_trabajo"
          ></div>
          <div
            class="parrafos"
            v-html="interiorParrafo"
            :class="{ reveal: transitionInteriorMobi }"
          ></div>

          <div class="nav-interior-mobil">
            <button class="button" dc="Volver" v-on:click="volverDetalleMob()">
              Volver
            </button>

            <button class="chev" v-on:click="moveMobilePrev()">
              <v-icon name="chevron_left" scale="2.6" />
            </button>
            <button class="chev" v-on:click="moveMobileNext()">
              <v-icon name="chevron_right" scale="2.6" />
            </button>
          </div>
        </div>
      </div>
    </XyzTransition>
    <XyzTransition xyz="fade down-100%" v-if="!dektop">
      <div
        class="mobile-layer"
        v-show="despliegueTotal"
        :style="mobileLayerStyle"
      >
        <nav class="endk-breadcrumb" :class="{ invert: invertNav }">
          <li>
            <NuxtLink to="/">Inicio /</NuxtLink>
          </li>
          <li><NuxtLink to="/proyectos">Proyectos /</NuxtLink></li>
          <li>
            <NuxtLink to="/" class="active">{{ titulo }}</NuxtLink>
          </li>
        </nav>
        <h2>{{ titulo }}</h2>
        <div class="bajada">
          {{ titulo_interior_proyecto }}
        </div>
        <div class="parrafos">
          <p>
            {{ descripcion_interior_proyecto }}
          </p>
        </div>

        <figure v-for="(p, index) in casos" v-on:click="detalleMob(index)">
          <img :src="p.main_caso" alt="" />
        </figure>

        <div class="sep-mobp">
          <button class="button" dc="Volver" v-on:click="volver_proyectos">
            Volver
          </button>
        </div>
      </div>
    </XyzTransition>
    <!--
    Don not touch bellow this point
    -
    -
    -
    -
    -->
    <XyzTransition xyz="fade down-100%" v-if="dektop">
      <div class="proyectos-despliegue" v-show="despliegueTotal">
        <div class="place-navbar">
          <XyzTransition xyz="fade up-100%">
            <div class="endk-top-navbar" v-if="endkTopNavbar">
              <nav class="endk-breadcrumb" :class="{ invert: invertNav }">
                <li>
                  <NuxtLink to="/">Inicio /</NuxtLink>
                </li>
                <li><NuxtLink to="/proyectos">Proyectos /</NuxtLink></li>
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
                  <div class="chevron-container-left">
                    <v-icon
                      v-show="endkChevron"
                      v-on:click="prevProject()"
                      name="chevron_left"
                      scale="2"
                      class="chstatic"
                    />
                    <v-icon
                      class="floating"
                      v-on:click="prevProject()"
                      name="chevron_left"
                      scale="2"
                    />
                  </div>
                </XyzTransition>
                <span></span>
              </div>
              <div class="media" :style="styleMedia">
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
                    ref="floatMedia"
                    alt=""
                  />
                </XyzTransition>
                <img
                  class="floatMedia-clip"
                  :style="clipPath"
                  :src="media.current_main"
                  alt=""
                />

                <div class="next-media" ref="nextMedia">
                  <img :src="media.placeNextMedia" alt="" rel="preload" />
                </div>
              </div>
              <div class="info">
                <span :class="{ reveal: endkSubTitle }">{{
                  titulo_interior_proyecto
                }}</span>
                <p class="desc" :class="{ reveal: endkParrafo }">
                  {{ descripcion_interior_proyecto }}
                  <!--
                    {{ index }} -
                    {{ auxBack }}
                  -->
                </p>
              </div>

              <div class="thumbs" :class="{ 'ly-detalle': lyDetalle }">
                <nav class="proyecto-carusel">
                  <li>
                    <XyzTransition
                      xyz="fade down-50%"
                      class="ovxyz-custom-time2"
                    >
                      <img
                        class="t1m"
                        v-if="endkT1"
                        :src="media.placeNextThumb1"
                        alt="t1"
                        ref="t1m"
                        rel="preload"
                      />
                    </XyzTransition>
                    <img
                      class="t1n"
                      v-if="endkT1"
                      :src="media.NextThumb1"
                      alt=""
                      ref="t1n"
                    />
                  </li>
                  <li>
                    <XyzTransition
                      xyz="fade down-50%"
                      class="ovxyz-custom-time2"
                    >
                      <img
                        class="t2m"
                        v-if="endkT2"
                        :src="media.placeNextThumb2"
                        alt="t2"
                        rel="preload"
                        ref="t2m"
                      />
                    </XyzTransition>
                    <img
                      class="t2n"
                      v-if="endkT2"
                      :src="media.NextThumb2"
                      alt=""
                      ref="t2n"
                    />
                  </li>
                </nav>
              </div>

              <div
                class="info-bottom"
                :class="{ reveal: endkInfoBotom, 'ly-detalle': lyDetalle }"
                :style="styleInfoBotom"
              >
                <div class="line-date">
                  <div class="line">
                    <span></span>
                  </div>
                  <div class="date">
                    {{ dataInfoBotom.fecha }}
                  </div>
                </div>

                <div class="house-name-owner">
                  <span>{{ dataInfoBotom.line_1 }}</span>
                  <p>{{ dataInfoBotom.line_2 }}</p>
                </div>
              </div>
              <div class="rc" :class="{ 'ly-detalle': lyDetalle }">
                <span></span>
                <span></span>
                <span></span>
                <XyzTransition xyz="fade up-5" class="ovxyz-custom-time3">
                  <div class="chevron-container-right">
                    <v-icon
                      v-show="endkChevron"
                      v-on:click="nextProject()"
                      name="chevron_right"
                      scale="2"
                      class="chstatic"
                    />
                    <v-icon
                      v-on:click="nextProject()"
                      class="floating"
                      name="chevron_right"
                      scale="2"
                    />
                  </div>
                </XyzTransition>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="place-bottom" :class="{ 'ly-detalle': lyDetalle }">
          <XyzTransition xyz="fade down-100%">
            <button
              dc="Descargar proyectos"
              v-if="endkTopNavbar"
              class="button"
              v-on:click="downloadCatalogo"
            >
              Descargar proyectos
            </button>
          </XyzTransition>
        </div>
        <!--
        interiorTitle: "",
      interiorSubTitle: "",
      interiorParrafo: "",
        -->
        <div class="place-detalle" :style="interiorStyleTransition">
          <div class="int-place-detalle">
            <h4
              class="alt"
              :class="{ reveal: interiorRevealTitle }"
              v-html="interiorTitle"
            ></h4>
            <br />
            <span
              class="subtitulo"
              :class="{ reveal: interiorRevealSubTitle }"
              v-html="interiorSubTitle"
            ></span>
            <div
              class="parrafo-content"
              :class="{ reveal: interiorRevealParrafo }"
              v-html="interiorParrafo"
            ></div>
          </div>
        </div>
      </div>
    </XyzTransition>
  </div>
</template>
<script>
import axios from "axios";
import { TweenMax } from "gsap";
import slugify from "slugify";

export default {
  meta: {
    section: "proyectos-interior",
    parent: "proyectos",
  },
  async asyncData({ route, store }) {
    const { data: dataParent } = await axios.get(
      `https://static.endemik.cl/proyectos`
    );
    if (dataParent.hasOwnProperty("lista_proyectos")) {
      store.commit("proyectos/setProyectos", dataParent.lista_proyectos);
      store.commit("proyectos/setCatalogo", dataParent.documento_proyectos);
      store.commit("proyectos/setTitulo", dataParent.titulo);
      store.commit("proyectos/setContenido", dataParent.texto_inicial);
    }

    const { section, detalle } = route.params;
    if (section === "proyectos-interior") {
      return {};
    }

    let { data } = await axios.get(`https://static.endemik.cl/${section}`);
    data.section = section;
    if (detalle) {
      let casos = data.casos;
      let intialIndex = casos.findIndex((i) => slugify(i.line_1) === detalle);
      data.detalle = true;
      data.interiordetallemob = true;
      data.index = intialIndex;

      if (intialIndex < 0) {
        return {};
      }

      return data;
    }

    return data;
  },
  data() {
    return {
      transitionInteriorMobi: true,
      interiordetallemob: false,
      interiorTitle: "",
      interiorSubTitle: "",
      interiorParrafo: "",
      proximo: 0,
      arrayMedia: [],
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
        placeNextMedia:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAAXNSR0IArs4c6QAAABpJREFUGBlj/G9p+Z+BBMBEglqw0lENxIQYAMNdAoDZFtz0AAAAAElFTkSuQmCC",
        overhidden: false,
        placeNextThumb1: "",
        placeNextThumb2: "",
        NextThumb1: "",
        NextThumb2: "",
      },
      isAnimating: false,
      auxBack: 0,
      auxNext: 0,
      dataInfoBotom: {
        line_1: "",
        line_2: "",
        fecha: "",
      },
      index: 0,
    };
  },
  computed: {
    mobileLayerStyle() {
      return this.interiordetallemob
        ? { "overflow-y": "hidden" }
        : { "overflow-y": "auto" };
    },
    dektop() {
      return Number(window.innerWidth) > 580;
    },
    catalogo() {
      return this.$store.getters["proyectos/getCatalogo"];
    },
    styleInfoBotom() {
      if (this.isAnimating) {
        return {
          transition: `opacity 300ms cubic-bezier(0.33, 1, 0.68, 1), transform 300ms cubic-bezier(0.33, 1, 0.68, 1), clip-path 300ms cubic-bezier(0.33, 1, 0.68, 1)`,
        };
      }
      return {
        transition: `opacity 800ms cubic-bezier(0.33, 1, 0.68, 1), transform 800ms cubic-bezier(0.33, 1, 0.68, 1), clip-path 600ms cubic-bezier(0.33, 1, 0.68, 1)`,
      };
    },
    styleMedia() {
      //return { overflow: "visible" };

      return { overflow: this.media.overhidden ? "hidden" : "visible" };
    },
    interiorStyleTransition() {
      if (this.placeInterior) {
        return {
          left: "60vw",
        };
      }
    },
    transitionStyle() {
      if (this.isAnimating) {
        return { transition: "none" };
      }

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

      /*
      if (this.lyDetalle) {
        console.log("aqui");
        return {
          transition: `transition: transform 400ms cubic-bezier(0.33, 1, 0.68, 1),
                filter 400ms cubic-bezier(0.33, 1, 0.68, 1),
                width 400ms cubic-bezier(0.33, 1, 0.68, 1),
                height 400ms cubic-bezier(0.33, 1, 0.68, 1);`,
        };
      }*/

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
  watch: {
    auxNext(n) {
      this.proximo = n;
    },
    proximo(n) {
      console.log("proximo", n);
    },
  },
  created() {
    if (this.casos) {
      this.arrayMedia = this.casos.map((c) => {
        return { b: c.main_caso, s: c.thumb_caso };
      });
    }
  },
  mounted() {
    // console.log("loaded proyectos detalle");
    this.showLayout();
    // window.onpopstate = (e) => {
    // console.log("e", e);
    // };

    this.imageTarget = this.$refs.placeMedia;

    if (this.casos) {
      this.media.current_main = this.arrayMedia[this.index].b;
      if (this.index > 0) {
        if (this.arrayMedia.length > this.index + 1) {
          this.media.placeNextThumb1 = this.arrayMedia[this.index + 1].s;
        }

        if (this.arrayMedia.length === this.index + 1) {
          this.media.placeNextThumb1 = this.arrayMedia[0].s;
          this.media.placeNextThumb2 = this.arrayMedia[1].s;
        }

        if (this.arrayMedia.length === this.index + 2) {
          this.media.placeNextThumb2 = this.arrayMedia[0].s;
        }
        if (this.arrayMedia.length > this.index + 2) {
          this.media.placeNextThumb1 = this.arrayMedia[this.index + 1].s;
          this.media.placeNextThumb2 = this.arrayMedia[this.index + 2].s;
        }
      } else {
        this.media.placeNextThumb1 = this.arrayMedia[1].s;
        this.media.placeNextThumb2 = this.arrayMedia[2].s;
      }

      this.interiorTitle = this.casos[this.index].interior.titulo_trabajo;
      this.interiorSubTitle = this.casos[this.index].interior.bajada_trabajo;
      // prettier-ignore
      this.interiorParrafo = this.casos[this.index].interior.descripcion_trabajo;
      this.dataInfoBotom.line_1 = this.casos[this.index].line_1;
      this.dataInfoBotom.line_2 = this.casos[this.index].line_2;
      this.dataInfoBotom.fecha = this.casos[this.index].fecha;
    } else {
      this.$router.push("/404");
    }

    if (this.detalle && this.dektop) {
      const trigger = this.$refs.placeMedia;
      setTimeout(() => {
        trigger.click();
      }, 2000);
    }
  },
  methods: {
    moveMobilePrev() {
      this.transitionInteriorMobi = false;

      setTimeout(() => {
        this.index =
          this.index - 1 === -1 ? this.arrayMedia.length - 1 : this.index - 1;
        this.transitionInteriorMobi = true;

        window.history.pushState(
          "1",
          "Proyectos - Detalle",
          "/proyectos/" +
            this.section +
            "/" +
            slugify(this.casos[this.index].line_1)
        );
      }, 320);
    },
    moveMobileNext() {
      this.transitionInteriorMobi = false;

      setTimeout(() => {
        this.index =
          this.index + 1 === this.arrayMedia.length ? 0 : this.index + 1;
        this.transitionInteriorMobi = true;
        window.history.pushState(
          "1",
          "Proyectos - Detalle",
          "/proyectos/" +
            this.section +
            "/" +
            slugify(this.casos[this.index].line_1)
        );
      }, 320);
    },
    volverDetalleMob() {
      setTimeout(() => {
        this.$refs.cmobileInterior.scrollTop = 0;
      }, 400);
      this.interiordetallemob = false;

      window.history.pushState(
        "1",
        "Proyectos - Detalle",
        "/proyectos/" + this.section
      );
    },
    detalleMob(index) {
      this.index = index;
      this.interiorTitle = this.casos[this.index].interior.titulo_trabajo;
      this.interiorSubTitle = this.casos[this.index].interior.bajada_trabajo;
      this.interiorParrafo = this.casos[
        this.index
      ].interior.descripcion_trabajo;

      this.dataInfoBotom = this.casos[this.index];

      this.interiordetallemob = true;

      window.history.pushState(
        "1",
        "Proyectos - Detalle",
        "/proyectos/" + this.section + "/" + slugify(this.dataInfoBotom.line_1)
      );
    },
    downloadCatalogo() {
      window.open(this.catalogo, "Download");
    },
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
      if (this.lyDetalle) {
        window.history.pushState(
          "1",
          "Proyectos - Detalle",
          "/proyectos/" +
            this.section +
            "/" +
            slugify(this.dataInfoBotom.line_1)
        );
      }
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
      if (!this.isAnimating) {
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
      }
    },
    handleMaskLeave(e) {
      this.showLayer = false;
      this.$store.commit("cursor/setCursor", false);
    },
    volver_proyectos() {
      if (this.lyDetalle) {
        this.setMotionDetalle();
        /*setTimeout(() => {
          
        }, 800);*/
        console.log("volver");
        window.history.pushState(
          "1",
          "Proyectos - Detalle",
          "/proyectos/" + this.section
        );
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
    nextProject() {
      if (!this.isAnimating) {
        this.endkInfoBotom = false;
        this.moveThumbsNext();
        this.moveMainNext();
        const cindex =
          this.index + 1 === this.arrayMedia.length ? 0 : this.index + 1;
        setTimeout(() => {
          this.dataInfoBotom.line_1 = this.casos[cindex].line_1;
          this.dataInfoBotom.line_2 = this.casos[cindex].line_2;
          this.dataInfoBotom.fecha = this.casos[cindex].fecha;
          this.endkInfoBotom = true;
        }, 320);
      }
      this.changeDetalle();
    },
    prevProject() {
      if (!this.isAnimating) {
        this.endkInfoBotom = false;
        this.moveMainPrev();
        this.moveThumbsPrev();

        setTimeout(() => {
          this.dataInfoBotom.line_1 = this.casos[this.proximo].line_1;
          this.dataInfoBotom.line_2 = this.casos[this.proximo].line_2;
          this.dataInfoBotom.fecha = this.casos[this.proximo].fecha;
          this.endkInfoBotom = true;
        }, 320);
      }
      this.changeDetalle();
    },
    moveThumbsNext() {
      const t1m = this.$refs.t1m;
      const t2m = this.$refs.t2m;
      const t1n = this.$refs.t1n;
      const t2n = this.$refs.t2n;

      let index_next = 0;

      if (this.index + 2 < this.arrayMedia.length) {
        this.media.NextThumb1 = this.arrayMedia[this.index + 2].s;
        index_next = this.index + 2;
      }
      if (this.index + 2 === this.arrayMedia.length) {
        this.media.NextThumb1 = this.arrayMedia[0].s;
        index_next = 0;
      }
      if (this.index + 2 > this.arrayMedia.length) {
        this.media.NextThumb1 = this.arrayMedia[1].s;
        index_next = 1;
      }

      this.media.NextThumb2 =
        index_next + 1 === this.arrayMedia.length
          ? this.arrayMedia[0].s
          : this.arrayMedia[index_next + 1].s;

      TweenMax.set(t1n, {
        left: "100%",
        x: "0%",
      });
      TweenMax.to(t1n, 0.6, {
        x: "-100%",
        ease: "linear.easeNone",
      });
      TweenMax.to(t1m, 0.6, {
        x: "-100%",
        ease: "linear.easeNone",
      });

      TweenMax.set(t2n, {
        left: "100%",
      });
      TweenMax.to(t2n, 0.6, {
        x: "-100%",
        ease: "linear.easeNone",
      });
      TweenMax.to(t2m, 0.6, {
        x: "-100%",
        ease: "linear.easeNone",
      });

      setTimeout(() => {
        this.media.placeNextThumb1 = this.media.NextThumb1;
        this.media.placeNextThumb2 = this.media.NextThumb2;
        TweenMax.set(t1n, {
          left: "100%",
          x: "0",
        });
        TweenMax.set(t1m, {
          left: "100%",
          x: "0",
        });

        TweenMax.set(t2n, {
          left: "100%",
          x: "0",
        });
        TweenMax.set(t2m, {
          left: "100%",
          x: "0",
        });
      }, 700);
    },
    moveMainNext() {
      this.auxNext =
        this.index + 1 === this.arrayMedia.length ? 0 : this.index + 1;

      this.isAnimating = true;
      this.media.overhidden = true;
      this.media.placeNextMedia =
        this.index + 1 === this.arrayMedia.length
          ? this.arrayMedia[0].b
          : this.arrayMedia[this.index + 1].b;

      const nextMedia = this.$refs.nextMedia;
      const floatMedia = this.$refs.floatMedia;

      TweenMax.set(nextMedia, {
        left: "100%",
        x: "0%",
        visibility: "visible",
      });
      TweenMax.to(floatMedia, 0.6, {
        x: "-100%",
        ease: "linear.easeNone",
      });

      TweenMax.to(nextMedia, 0.6, {
        x: "-100%",
        ease: "linear.easeNone",
      });

      setTimeout(() => {
        this.media.current_main = this.media.placeNextMedia;
        TweenMax.set(floatMedia, {
          x: "0%",
        });
        TweenMax.set(nextMedia, {
          left: "0",
          visibility: "hidden",
        });

        this.isAnimating = false;
        this.media.overhidden = false;
        this.index =
          this.index + 1 === this.arrayMedia.length ? 0 : this.index + 1;
      }, 700);
    },
    moveMainPrev() {
      this.auxBack =
        this.index - 1 < 0
          ? this.arrayMedia.length - (this.index + 1)
          : this.index - 1;

      this.proximo =
        this.index - 1 < 0
          ? this.arrayMedia.length - (this.index + 1)
          : this.index - 1;

      this.isAnimating = true;
      this.media.overhidden = true;
      this.media.placeNextMedia =
        this.index - 1 < 0
          ? this.arrayMedia[this.arrayMedia.length - (this.index + 1)].b
          : this.arrayMedia[this.index - 1].b;

      const nextMedia = this.$refs.nextMedia;
      const floatMedia = this.$refs.floatMedia;

      TweenMax.set(nextMedia, {
        right: "100%",
        x: "-100%",
        visibility: "visible",
      });

      TweenMax.to(floatMedia, 0.6, {
        x: "100%",
        ease: "linear.easeNone",
      });

      TweenMax.to(nextMedia, 0.6, {
        x: "0%",
        ease: "linear.easeNone",
      });

      setTimeout(() => {
        this.media.current_main = this.media.placeNextMedia;
        TweenMax.set(floatMedia, {
          x: "0%",
        });
        TweenMax.set(nextMedia, {
          right: "0",
          visibility: "hidden",
        });

        this.isAnimating = false;
        this.media.overhidden = false;
        this.index =
          this.index - 1 === -1 ? this.arrayMedia.length - 1 : this.index - 1;
      }, 700);
    },
    moveThumbsPrev() {
      const t1m = this.$refs.t1m;
      const t2m = this.$refs.t2m;
      const t1n = this.$refs.t1n;
      const t2n = this.$refs.t2n;

      const backdiff1 =
        this.arrayMedia.length - (this.auxBack + 2) < 0
          ? this.arrayMedia.length - (this.auxBack + 1)
          : this.auxBack + 1;

      // console.log("backdiff1", backdiff1);
      this.media.NextThumb1 = this.arrayMedia[backdiff1].s;
      if (backdiff1 === 0) {
        // console.log("calculo 2", 1);
        this.media.NextThumb2 = this.arrayMedia[1].s;
      } else if (backdiff1 === this.arrayMedia.length - 1) {
        // console.log("calculo 2", 0);
        this.media.NextThumb2 = this.arrayMedia[0].s;
      } else {
        // console.log("calculo 2", backdiff1 + 1);
        this.media.NextThumb2 = this.arrayMedia[backdiff1 + 1].s;
      }

      TweenMax.set(t1n, {
        left: "0%",
        x: "-100%",
      });
      TweenMax.to(t1n, 0.6, {
        x: "0%",
        ease: "linear.easeNone",
      });
      TweenMax.to(t1m, 0.6, {
        x: "100%",
        ease: "linear.easeNone",
      });

      TweenMax.set(t2n, {
        left: "0%",
        x: "-100%",
      });
      TweenMax.to(t2n, 0.6, {
        x: "0%",
        ease: "linear.easeNone",
      });
      TweenMax.to(t2m, 0.6, {
        x: "100%",
        ease: "linear.easeNone",
      });

      setTimeout(() => {
        this.media.placeNextThumb1 = this.media.NextThumb1;
        this.media.placeNextThumb2 = this.media.NextThumb2;
        TweenMax.set(t1n, {
          left: "100%",
          x: "0",
        });
        TweenMax.set(t1m, {
          left: "100%",
          x: "0",
        });

        TweenMax.set(t2n, {
          left: "100%",
          x: "0",
        });
        TweenMax.set(t2m, {
          left: "100%",
          x: "0",
        });
      }, 700);
    },
    changeDetalle() {
      if (this.lyDetalle) {
        // console.log("change");
        this.interiorRevealTitle = false;
        this.interiorRevealSubTitle = false;
        this.interiorRevealParrafo = false;

        setTimeout(() => {
          // prettier-ignore
          this.interiorTitle = this.casos[this.proximo].interior.titulo_trabajo;
          // prettier-ignore
          this.interiorSubTitle = this.casos[this.proximo].interior.bajada_trabajo;
          // prettier-ignore
          this.interiorParrafo = this.casos[this.proximo].interior.descripcion_trabajo;
        }, 600);

        setTimeout(() => {
          this.interiorRevealTitle = true;
          this.interiorRevealSubTitle = true;
          this.interiorRevealParrafo = true;

          window.history.pushState(
            "1",
            "Proyectos - Detalle",
            "/proyectos/" +
              this.section +
              "/" +
              slugify(this.casos[this.proximo].line_1)
          );
        }, 650);
      }
    },
  },
};
</script>
