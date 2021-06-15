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
  }
}
</style>
<template>
  <div class="proyectos-interior interior">
    <XyzTransition xyz="fade down-100%">
      <div class="proyectos-despliegue" v-show="despliegueTotal">
        <XyzTransition xyz="fade up-100%">
          <div class="endk-top-navbar" v-if="endkTopNavbar">
            <nav class="endk-breadcrumb">
              <li>
                <NuxtLink to="/">Inicio /</NuxtLink>
              </li>
              <li><NuxtLink to="/">Proyectos /</NuxtLink></li>
              <li>
                <NuxtLink to="/" class="active">Mobiliario en obra</NuxtLink>
              </li>
            </nav>

            <button class="button" v-on:click="volver_proyectos">
              Volver
            </button>
          </div>
        </XyzTransition>
        <div class="place-title"></div>
      </div>
    </XyzTransition>
  </div>
</template>
<script>
export default {
  meta: {
    section: "proyectos-interior",
    parent: "proyectos",
  },
  data() {
    return {
      despliegueTotal: false,
      endkTopNavbar: false,
    };
  },
  mounted() {
    console.log("loaded coleccion detalle");
    this.$store.commit("app/setDetalleColeccionOpen", true);
    this.showLayout();
  },
  methods: {
    volver_proyectos() {
      this.endkTopNavbar = false;

      setTimeout(() => {
        this.despliegueTotal = false;
      }, 600);

      setTimeout(() => {
        this.$router.push("/proyectos");
      }, 1400);
    },
    showContent() {
      this.despliegueTotal = true;
      setTimeout(() => {
        this.endkTopNavbar = true;
      }, 600);
    },
    showLayout() {
      setTimeout(() => {
        this.showContent();
      }, 600);
    },
  },
};
</script>
