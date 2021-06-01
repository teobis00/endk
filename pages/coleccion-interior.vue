<style lang="less">
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
        width: 100%;
        height: 45%;
        display: inline-block;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
        img {
          height: 100%;
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
            <XyzTransition xyz="fade up-100%">
              <button
                v-if="endkTopNavbar"
                class="button"
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
            <XyzTransition xyz="fade left-4">
              <img
                v-show="showMedia"
                src="~/assets/img/coleccion/bt1.png"
                alt=""
              />
            </XyzTransition>
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
                <div class="chevron-right">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      endkTopNavbar: false,
      endkContentCarouselColeccion: false,
      showTitle: false,
      showMedia: false,
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
  mounted() {
    console.log("loaded coleccion detalle");
    this.showLayout();
  },
  methods: {
    volver_coleccion() {
      this.despliegueMedia = false;
      this.endkTopNavbar = false;
      this.endkContentCarouselColeccion = false;

      this.showMedia = false;
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
        this.showMedia = true;
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
