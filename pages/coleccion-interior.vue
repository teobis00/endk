<style lang="less">
:root {
  --itemDuration: 800ms;

  --xDirectionA: -20%;
  --itemScaleA: 1;

  --xDirectionB: -7%;
  --itemScaleB: 0.8;

  --easingA: ease-in;
  --easingB: ease-out;
}
.coleccion-interior {
  position: fixed;
  width: calc(100vw);
  height: 100vh;
  left: 0px;
  top: 0px;
  .coleccion-despliegue {
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-left: 71px;
    background-image: url(~/assets/img/aux_bg_interior.png);
    background-position: 0% 0%;
    background-repeat: repeat-y;
    .coleccion-info-left {
      z-index: 50;
      width: calc(70%);
      height: 100vh;
      background-color: white;
      box-sizing: border-box;
      padding: 23px;
      position: relative;
      .endk-top-navbar {
        height: 28px;
        width: 100%;
        display: grid;
        grid-template-columns: auto 85px;
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
        }
        .button {
          min-width: 0px;
          width: 85px;
        }
      }
      .place-title {
        width: 100%;
        text-align: center;
        margin-top: 18px;
        height: 67px;
        h2 {
          display: inline-block;
        }
      }
      .place-media {
        overflow: hidden;
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 10px;
        position: relative;
        img {
          height: 100%;
        }
        .aux-floating-image {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            height: 100%;
          }
        }

        @media screen and (max-height: 740px) {
          height: 40%;
        }
      }
      .place-subtitle {
        width: 100%;
        display: inline-block;
        text-align: center;
        height: 36px;
        h4 {
          clip-path: inset(0% 70% 0% 0%);
          transition: clip-path 310ms cubic-bezier(0.65, 0, 0.35, 1);
          will-change: clip-path;
          &.reveal {
            clip-path: inset(0% 0% 0% 0%);
          }
        }
      }
      .place-desc {
        width: 100%;
        display: inline-block;
        text-align: center;
        p.desc {
          display: inline-block;
          max-width: 40%;
          clip-path: inset(0% 130% 0% 0%);
          transition: clip-path 310ms cubic-bezier(0.65, 0, 0.35, 1);
          will-change: clip-path;
          &.reveal {
            clip-path: inset(0% 0% 0% 0%);
          }
        }
      }
      .endk-content-carousel-coleccion {
        width: 100%;
        height: 20vh;
        min-height: 95px;
        position: absolute;
        z-index: 60;
        left: 0px;
        bottom: 0px;

        @media screen and (max-height: 740px) {
          height: 105px;
        }

        .endk-carousel-coleccion {
          display: grid;
          grid-template-columns: 1fr 6fr 1fr;
          width: 100%;
          max-width: 860px;
          margin: 0px auto;
          .chevron-left {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
          .chevron-right {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .carousel {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .marker-list {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              left: 0px;
              top: 0px;
              width: 100%;
              height: 100px;
              .marker-pos {
                width: 500px;
                position: relative;
                height: 100%;
                &:before {
                  content: "";
                  display: inline-block;
                  width: 100px;
                  height: 600px;
                  background-color: #f0f0f0;
                  top: -10px;
                  position: absolute;
                  left: 100px;
                  border-radius: 12px 12px 0 0;
                }
              }
            }

            .content-list {
              width: 500px;
              height: 100%;
              display: flex;
              position: relative;
              align-items: flex-start;
              overflow: hidden;
              .moving-slider {
                display: flex;
                justify-content: center;
                align-items: center;
                transition: transform 520ms cubic-bezier(0.65, 0, 0.35, 1);
                transition-delay: 100ms;
                .item {
                  width: 100px;
                  height: 80px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  box-sizing: border-box;
                  padding-top: 10px;
                  img {
                    height: 100%;
                    z-index: 20;
                  }
                }
              }
            }
          }
        }
      }
      .nav-mobile-only {
        display: none;
      }
    }
    .coleccion-side-media {
      z-index: 40;
      width: 30%;
      height: 100vh;
      position: absolute;
      right: 0px;
      top: 0px;
      background-image: url("~/assets/img/side_foto.png");
      background-size: cover;
      background-position: 50%;
    }
  }
}

.ovxyz-media-a {
  --xyz-translate-y: 0;
  --xyz-translate-x: var(--xDirectionA);
  --xyz-scale-x: var(--itemScaleA);
  --xyz-scale-y: var(--itemScaleA);
  --xyz-opacity: 0;
  --xyz-duration: var(--itemDuration);
  --xyz-ease: ease-in;
}

.ovxyz-media-b {
  --xyz-translate-y: 0;
  --xyz-translate-x: var(--xDirectionB);
  --xyz-scale-x: var(--itemScaleB);
  --xyz-scale-y: var(--itemScaleB);
  --xyz-opacity: 0;
  --xyz-duration: var(--itemDuration);
  --xyz-ease: ease-out;
}
@media screen and (max-width: 580px) {
  .coleccion-interior {
    .coleccion-despliegue {
      padding-left: 0px;
      overflow-y: auto;
      overflow-x: hidden;
      .coleccion-info-left {
        box-sizing: border-box;
        padding-top: 88px;
        width: 100%;

        .endk-top-navbar {
          grid-template-columns: 1fr;
          .button {
            display: none;
          }
        }

        .place-title {
          h2 {
            font-size: 40px;
          }
        }
        .place-media {
          height: 35%;
        }
        .place-desc {
          p.desc {
            max-width: 100%;
          }
          margin-bottom: 20px;
        }

        .endk-content-carousel-coleccion {
          position: relative;
          height: 16vh;
          .endk-carousel-coleccion {
            .chevron-left {
              justify-content: flex-start;
            }
            .carousel {
              width: 80%;
              .content-list {
                width: 200px;
              }
              .marker-list {
                .marker-pos {
                  &:before {
                    height: 110px;
                    border-radius: 12px;
                  }
                }
              }
            }
            .chevron-right {
              justify-content: flex-end;
            }
          }
        }
        .nav-mobile-only {
          display: flex;
          span {
            font-size: 14px;
            font-weight: 700;
            color: #7f7b6b;
            line-height: 16px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            i {
              display: inline-block;
              width: 34px;
              svg {
                transform: rotate(-90deg);
              }
            }
          }
        }
      }

      .coleccion-side-media {
        position: relative;
        width: 100%;
      }
    }
  }
}
</style>
<template>
  <div class="coleccion-interior interior">
    <XyzTransition xyz="fade down-100%">
      <div class="coleccion-despliegue" v-show="despliegueTotal">
        <div class="coleccion-info-left">
          <div class="endk-top-navbar">
            <XyzTransition xyz="fade up-100%">
              <nav class="endk-breadcrumb" v-if="endkTopNavbar">
                <li>
                  <NuxtLink to="/">Inicio /</NuxtLink>
                </li>
                <li><NuxtLink to="/">Colección /</NuxtLink></li>
                <li>
                  <NuxtLink to="/" class="active">Armchair Nº03</NuxtLink>
                </li>
              </nav>
            </XyzTransition>
            <XyzTransition class="fade up-100%">
              <button
                v-if="endkTopNavbar"
                class="button"
                dc="Volver"
                v-on:click="volver_coleccion"
              >
                Volver
              </button>
            </XyzTransition>
          </div>

          <div class="place-title">
            <XyzTransition xyz="fade left-4">
              <h2 v-show="showTitle">Colección Milan</h2>
            </XyzTransition>
          </div>
          <div class="place-media">
            <!-- main image -->
            <XyzTransition class="ovxyz-media-a">
              <endk-simple-car
                v-show="showMediaA"
                :indice="indice"
                :slides="slides"
              />
            </XyzTransition>
            <!-- main image -->
          </div>
          <div class="place-subtitle">
            <XyzTransition xyz="fade left-4">
              <h4 v-show="showSubTitle" :class="{ reveal: showinfo }">
                {{ titulo }}
              </h4>
            </XyzTransition>
          </div>
          <div class="place-desc">
            <XyzTransition xyz="fade left-4">
              <p class="desc" v-show="showDesc" :class="{ reveal: showinfo }">
                {{ desc }}
              </p>
            </XyzTransition>
          </div>
          <XyzTransition xyz="fade down-100%">
            <div
              class="endk-content-carousel-coleccion"
              v-if="endkContentCarouselColeccion"
            >
              <div class="endk-carousel-coleccion">
                <div class="chevron-left" v-on:click="moveLeft">
                  <v-icon name="chevron_left" scale="2" />
                </div>
                <ul class="carousel">
                  <li class="marker-list">
                    <div class="marker-pos"></div>
                  </li>
                  <div class="content-list">
                    <div class="moving-slider" :style="listStyle">
                      <li class="item" v-for="(t, index) in auxBottomList">
                        <img :src="t" alt="" />
                      </li>
                    </div>
                  </div>
                  <!--
                  -->
                </ul>
                <div class="chevron-right" v-on:click="moveRight">
                  <v-icon name="chevron_right" scale="2" />
                </div>
              </div>
            </div>
          </XyzTransition>
          <div class="nav-mobile-only">
            <span>
              <i>
                <v-icon name="doublechevron" scale="1" />
              </i>
              Ver Colección Completa
            </span>
            <button class="button" dc="volver" v-on:click="volver_coleccion">
              Volver
            </button>
          </div>
        </div>
        <XyzTransition xyz="fade left-100%">
          <div class="coleccion-side-media" v-if="despliegueMedia"></div>
        </XyzTransition>
      </div>
    </XyzTransition>
  </div>
</template>
<script>
import endkSimpleCar from "~/components/endkSimpleCar";

export default {
  data() {
    return {
      initialList: -2900,
      titulo: "",
      desc: "",
      index: 0,
      indice: 0,
      showinfo: true,
      base: "~/assets/",
      auxBottomList: [],
      endkColection: [
        {
          name: "Armchair Nº01",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: "/coleccion/bt1.png",
        },
        {
          name: "Armchair Nº02",
          text:
            "Adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer",
          image: "/coleccion/bt2.png",
        },
        {
          name: "Coffee Table Nº01",
          text:
            "Tincidunt ut laoreet dolore magna aliquam erat volutpat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ",
          image: "/coleccion/bt3.png",
        },
        {
          name: "Armchair Nº03",
          text:
            "Donec non odio in sem aliquam facilisis. Integer placerat sem ullamcorper tempor tincidunt. Vestibulum pharetra luctus dui ac efficitur.",
          image: "/coleccion/bt4.png",
        },
        {
          name: "Oak Cabinet Nº01",
          text:
            "Integer ac aliquam libero. Praesent nisl ligula, commodo sit amet risus id, eleifend commodo lorem. Suspendisse euismod",
          image: "/coleccion/bt5.png",
        },
      ],
      endkMediaA: "",
      endkMediaB: "",
      endkTopNavbar: false,
      endkContentCarouselColeccion: false,
      showTitle: false,
      showMediaA: false,
      showMediaB: false,
      showSubTitle: false,
      showDesc: false,
      despliegueTotal: false,
      despliegueMedia: false,
      animating: false,
    };
  },
  computed: {
    listStyle() {
      return { transform: `translateX(${this.initialList}px)` };
    },
  },
  head: {
    title: "Coleccion interior",
    meta: [{ name: "Endemik" }],
  },
  meta: {
    section: "coleccion-interior",
    parent: "coleccion",
  },
  components: {
    endkSimpleCar,
  },
  created() {
    this.slides = this.endkColection.map((i) => i.image);

    let auxind = 0;
    for (let i = 0; i < 60; i++) {
      this.auxBottomList.push(this.endkColection[auxind].image);
      auxind = auxind + 1 < this.endkColection.length ? auxind + 1 : 0;
    }

    // this.auxBottomList
  },
  mounted() {
    console.log("loaded coleccion detalle");
    this.$store.commit("app/setDetalleColeccionOpen", true);
    this.titulo = this.endkColection[this.index].name;
    this.desc = this.endkColection[this.index].text;
    this.showLayout();
  },
  methods: {
    changeInfo() {
      this.showinfo = false;
      setTimeout(() => {
        this.titulo = this.endkColection[this.index].name;
        this.desc = this.endkColection[this.index].text;
        this.showinfo = true;
      }, 330);
    },
    moveRight() {
      if (this.animating) {
        return false;
      }
      this.changeInfo();
      this.animating = true;
      this.indice++;
      this.initialList = this.initialList - 100;

      this.index =
        this.index + 1 < this.endkColection.length ? this.index + 1 : 0;
      setTimeout(() => {
        this.animating = false;
      }, 630);
    },
    moveLeft() {
      if (this.animating) {
        return false;
      }
      this.changeInfo();
      this.animating = true;
      this.indice--;
      this.initialList = this.initialList + 100;
      this.index =
        this.index - 1 < 0 ? this.endkColection.length - 1 : this.index - 1;
      setTimeout(() => {
        this.animating = false;
      }, 630);
    },
    volver_coleccion() {
      this.despliegueMedia = false;
      this.endkTopNavbar = false;
      this.endkContentCarouselColeccion = false;

      this.showMediaA = false;
      this.showSubTitle = false;
      this.showDesc = false;

      setTimeout(() => {
        this.despliegueTotal = false;
      }, 600);

      setTimeout(() => {
        this.$store.commit("app/setDetalleColeccionOpen", false);
        this.$router.push("/coleccion");
      }, 1100);
    },
    showLayout() {
      this.despliegueTotal = true;
      setTimeout(() => {
        this.showContent();
      }, 600);
    },
    showContent() {
      this.despliegueMedia = true;
      setTimeout(() => {
        this.showTitle = true;
      }, 100);

      setTimeout(() => {
        this.showMediaA = true;
      }, 200);

      setTimeout(() => {
        this.showSubTitle = true;
      }, 300);

      setTimeout(() => {
        this.showDesc = true;
      }, 400);

      setTimeout(() => {
        this.endkTopNavbar = true;
        this.endkContentCarouselColeccion = true;
      }, 600);
    },
  },
};
</script>
