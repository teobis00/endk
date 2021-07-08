<style lang="less">
:root {
  --itemDuration: 800ms;

  --xDirectionA: -7%;
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
        }
      }
      .place-desc {
        width: 100%;
        display: inline-block;
        text-align: center;
        p.desc {
          display: inline-block;
          max-width: 40%;
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
            display: inline-block;
            vertical-align: middle;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            .item {
              display: flex;
              justify-content: center;
              align-items: flex-end;
            }
          }
        }
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
@media screen and (max-width: 1024px) {
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
          .endk-carousel-coleccion {
            .chevron-left {
              justify-content: flex-start;
            }
            .carousel {
              overflow: hidden;
              width: 80%;
            }
            .chevron-right {
              justify-content: flex-end;
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
              <img v-show="showMediaA" :src="endkMediaA" alt="" />
            </XyzTransition>
            <!-- main image -->

            <!-- next image -->
            <div class="aux-floating-image">
              <XyzTransition class="ovxyz-media-b">
                <img v-show="showMediaB" :src="endkMediaB" alt="" />
              </XyzTransition>
            </div>
            <!-- next image -->
          </div>
          <div class="place-subtitle">
            <XyzTransition xyz="fade left-4">
              <h4 v-show="showSubTitle">Armchair Nº03</h4>
            </XyzTransition>
          </div>
          <div class="place-desc">
            <XyzTransition xyz="fade left-4">
              <p class="desc" v-show="showDesc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </XyzTransition>
          </div>
          <XyzTransition xyz="fade down-100%">
            <div
              class="endk-content-carousel-coleccion"
              v-if="endkContentCarouselColeccion"
            >
              <div class="endk-carousel-coleccion">
                <div class="chevron-left">
                  <v-icon name="chevron_left" scale="2" />
                </div>
                <ul class="carousel">
                  <li class="item">
                    <img src="~/assets/img/coleccion/t5.png" alt="" />
                  </li>
                  <li class="item">
                    <img src="~/assets/img/coleccion/t1.png" alt="" />
                  </li>
                  <li class="item">
                    <img src="~/assets/img/coleccion/t2.png" alt="" />
                  </li>
                  <li class="item">
                    <img src="~/assets/img/coleccion/t3.png" alt="" />
                  </li>
                  <li class="item">
                    <img src="~/assets/img/coleccion/t4.png" alt="" />
                  </li>
                </ul>
                <div class="chevron-right" v-on:click="moveRight">
                  <v-icon name="chevron_right" scale="2" />
                </div>
              </div>
            </div>
          </XyzTransition>
        </div>
        <XyzTransition xyz="fade left-100%">
          <div class="coleccion-side-media" v-if="despliegueMedia"></div>
        </XyzTransition>
      </div>
    </XyzTransition>
    <img src="~/assets/img/coleccion/bt1.png" alt="" width="0" />
    <img src="~/assets/img/coleccion/bt2.png" alt="" width="0" />
    <img src="~/assets/img/coleccion/bt3.png" alt="" width="0" />
    <img src="~/assets/img/coleccion/bt4.png" alt="" width="0" />
    <img src="~/assets/img/coleccion/bt5.png" alt="" width="0" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
      base: "~/assets/",
      endkColection: [
        {
          name: "Armchair Nº01",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: "img/coleccion/bt1.png",
        },
        {
          name: "Armchair Nº02",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: "img/coleccion/bt2.png",
        },
        {
          name: "Armchair Nº03",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: "img/coleccion/bt3.png",
        },
        {
          name: "Armchair Nº04",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: "img/coleccion/bt4.png",
        },
        {
          name: "Armchair Nº05",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
          image: "img/coleccion/bt5.png",
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
    };
  },
  head: {
    title: "Coleccion interior",
    meta: [{ name: "Endemik" }],
  },
  meta: {
    section: "coleccion-interior",
    parent: "coleccion",
  },
  created() {
    this.endkMediaA = this.base + this.endkColection[0].image;
    this.endkMediaB = this.base + this.endkColection[1].image;
  },
  mounted() {
    console.log("loaded coleccion detalle");
    this.$store.commit("app/setDetalleColeccionOpen", true);
    this.showLayout();
  },
  methods: {
    moveRight() {
      this.index++;
      this.showMediaA = !this.showMediaA;
      this.showMediaB = !this.showMediaB;
    },
    inA() {},
    inB() {},
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
