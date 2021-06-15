<style lang="less">
html {
  height: -webkit-fill-available;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

.endk-window-with {
  width: 100vw;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  &.no-scroll {
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
.endk-scroll-container {
  width: 980vw;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: auto;
    display: inline-block;
  }

  .place-section-inicio {
    width: 100vw;
    height: 100vh;

    @media screen and (max-width: 1024px) {
      width: 100vw;
      height: auto;
      display: inline-block;
    }
  }
  .place-section-coleccion {
    width: 100vw;
    height: 100vh;
    position: relative;
    .sep-prev-section-coleccion {
      width: 4vw;
      height: 100vh;
      position: absolute;
      left: 0;
      top: 0;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    @media screen and (max-width: 1024px) {
      width: 100vw;
      height: auto;
      display: inline-block;
    }
  }
  .place-section-3 {
    width: 80vw;
    height: 100vh;
    @media screen and (max-width: 1024px) {
      width: 100vw;
    }
  }
  .place-section-proyectos {
    width: 300vw;
    height: 100vh;
  }

  .place-section-mitigacion {
    width: 300vw;
    height: 100vh;
  }
}

.anim-inicio {
  animation-name: pulse;
  animation-duration: 1200ms;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
}
@keyframes pulse {
  0% {
    transform: scale(2.3);
  }
  50% {
    transform: scale(2.6);
  }
  100% {
    transform: scale(2.3);
  }
}
.cursor {
  position: absolute;
  z-index: 150;
  transition: top 800ms ease-out, left 800ms ease-out;
}

.info-aux {
  width: 60px;
  height: auto;
  position: fixed;
  z-index: 10000000;
  left: 0px;
  top: 0px;
  background-color: rgb(255, 205, 210);
  min-height: 40px;
}
</style>

<template>
  <div
    class="endk-window-with"
    :class="{ 'no-scroll': disableScroll }"
    ref="scrollContent"
    v-on:wheel="wscroll"
    v-on:scroll="bscroll"
  >
    <!--
    <div class="info-aux">
      ppro: {{ p1 }} <br />
      ps3 : {{ p2 }}
    </div>
  -->
    <XyzTransition xyz="fade">
      <div
        class="overlay_blur"
        style=" display:flex; justify-content: center; align-items: center; opacity:1;width:100vw;height:100vh; position:fixed; z-index:200; background-color:rgba(255,255,255,0.7); background-size:cover; background-image:url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNiA3OS4xNjQ3NTMsIDIwMjEvMDIvMTUtMTE6NTI6MTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4zIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVBRDYxRjdEQUM3NzExRUI5RUMyQTM4RjE4RUJCNjUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVBRDYxRjdFQUM3NzExRUI5RUMyQTM4RjE4RUJCNjUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUFENjFGN0JBQzc3MTFFQjlFQzJBMzhGMThFQkI2NTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUFENjFGN0NBQzc3MTFFQjlFQzJBMzhGMThFQkI2NTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEB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'); background-position: center right;"
        v-if="nl"
      >
        <figure style="margin:0; padding:0;">
          <svg
            aria-hidden="true"
            width="104"
            height="30.58823529411765"
            viewBox="0 0 102 30"
            focusable="false"
            class="fa-icon anim-inicio"
            style="font-size: 6.5em; transform:scale(2.3)"
          >
            <g>
              <defs>
                <style>
                  .a,
                  .b {
                    fill: #fff;
                  }
                  .a {
                    fill-rule: evenodd;
                  }
                </style>
              </defs>
              <g transform="translate(-519.223 -1344.187)">
                <path
                  d="M529.055,1344.187h92.673v20.837l-10.145,10.145H519.223v-21.149Z"
                ></path>
                <path
                  class="a"
                  d="M706.681,1367.556v5.531h.766a2.927,2.927,0,0,0,1.957-.648,2.693,2.693,0,0,0,.766-2.162,3.188,3.188,0,0,0-.369-1.555,1.876,1.876,0,0,0-1.075-.921,4.017,4.017,0,0,0-1.334-.246Zm-1.95-1.691H707.8a4.2,4.2,0,0,1,3.161,1.234,4.476,4.476,0,0,1,1.2,3.253,4.353,4.353,0,0,1-1.238,3.246,4.46,4.46,0,0,1-3.284,1.221h-2.9Z"
                  transform="translate(-133.811 -15.637)"
                ></path>
                <path
                  class="a"
                  d="M823.027,1366.071h2.123v3.76h.03l3.271-3.76h2.6l-3.744,4.248,3.9,4.648h-2.551l-3.474-4.16h-.03v4.16h-2.123Z"
                  transform="translate(-219.141 -15.786)"
                ></path>
                <rect
                  class="b"
                  width="1.993"
                  height="8.953"
                  transform="translate(599.433 1350.228)"
                ></rect>
                <path
                  class="a"
                  d="M765.069,1365.865h2.172l1.724,5.066,1.768-5.066h2.1l1.213,8.953H772.2l-.82-5.864-1.944,5.864h-.883l-2.027-5.864-.744,5.864H763.9Z"
                  transform="translate(-176.494 -15.637)"
                ></path>
                <path
                  class="a"
                  d="M736.735,1365.9h5.88v1.773h-3.944v1.807h3.944v1.746h-3.944v1.855h3.944v1.773h-5.88Z"
                  transform="translate(-156.896 -15.659)"
                ></path>
                <path
                  class="a"
                  d="M674.187,1365.865h1.9v8.953h-1.875l-4.125-5.8v5.8h-1.929v-8.953h1.9l4.132,5.755Z"
                  transform="translate(-107.427 -15.637)"
                ></path>
                <path
                  class="a"
                  d="M638.975,1365.865h5.881v1.773h-3.944v1.807h3.944v1.746h-3.944v1.855h3.944v1.773h-5.881Z"
                  transform="translate(-86.38 -15.637)"
                ></path>
                <rect
                  class="b"
                  width="5.948"
                  height="1.623"
                  transform="translate(579.796 1360.965)"
                ></rect>
              </g>
            </g>
          </svg>
        </figure>
      </div>
    </XyzTransition>

    <endk-menu
      :showMenu="nl"
      v-on:gotoScroll="gotoScroll"
      :scrollX="scrollX"
    ></endk-menu>

    <div class="endk-scroll-container">
      <!--------- Section Inicio ---------->
      <div ref="index" class="place-section-inicio" data-scroll-section>
        <endk-section-inicio :startAnim="nl" />
      </div>

      <!--------- Section Coleccion ---------->
      <div ref="coleccion" class="place-section-coleccion" data-scroll-section>
        <div class="sep-prev-section-coleccion"></div>
        <endk-section-coleccion />
      </div>
      <!--------- Section Proyectos ---------->
      <div ref="seccion3" class="place-section-3" data-scroll-section>
        <endk-section-3 />
      </div>

      <!--------- Section Proyectos ---------->
      <div ref="proyectos" class="place-section-proyectos" data-scroll-section>
        <endk-section-proyectos />
      </div>
      <!--------- Section Inicio ---------->
      <div class="place-section-place-section-mitigacion" data-scroll-section>
        <endk-section-mitigacion />
      </div>
    </div>

    <Nuxt />
  </div>
</template>

<script>
import endkSectionInicio from "~/components/sections/endk-section-inicio";
import endkSectionColeccion from "~/components/sections/endk-section-coleccion";
import endkSection3 from "~/components/sections/endk-section-3";
import endkMenu from "~/components/endkMenu";
import endkSectionProyectos from "~/components/sections/endk-section-proyectos";
import endkSectionMitigacion from "~/components/sections/endk-section-mitigacion";

export default {
  middleware: "handle",
  components: {
    endkMenu,
    endkSectionInicio,
    endkSectionColeccion,
    endkSectionProyectos,
    endkSection3,
    endkSectionMitigacion,
  },
  data() {
    return {
      config: {
        lerps: {
          dot: 1,
          circle: 0.18,
          custom: 0.23,
        },
        scale: {
          ratio: 0.18,
          min: 0.5,
          max: 1,
        },
        opacity: 0.1,
      },
      nl: true,
      ops: {
        smooth: true,
        lerp: 0.3,
        direction: "horizontal",
        smartphone: {
          smooth: true,
          direction: "vertical",
          lerp: 0.3,
        },
        tablet: {
          smooth: true,
          direction: "vertical",
          lerp: 0.3,
        },
      },
    };
  },
  mounted() {
    if (process.browser) {
      window.onNuxtReady((app) => {
        console.log("Nuxt ready!");
        this.nl = false;
      });
    }
    this.$store.commit("app/setWindowWidth", window.innerWidth);
    this.$nextTick(function() {
      // this.$nuxt.$loading.start();
      // setTimeout(() => this.$nuxt.$loading.finish(), 500);
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);

    this.$store.commit("app/setScroll", { x: 0, y: 0 });

    /*---- Handle scrollTo base on PATH ---- */

    this.$store.subscribe((mutation, state) => {
      //   // catch only app/Section type mutation
      if (mutation.type === "app/setSection") {
        console.log("mutation payload", mutation.payload);

        const gSection =
          mutation.payload.hasOwnProperty("parent") &&
          mutation.payload.parent !== ""
            ? mutation.payload.parent
            : mutation.payload.section;

        this.gotoScroll(gSection);
      }
    });

    /* Execute if url section != from index */
    if (this.$store.getters["app/getSection"].section !== "index") {
      setTimeout(() => {
        const gSection =
          this.$store.getters["app/getSection"].hasOwnProperty("parent") &&
          this.$store.getters["app/getSection"].parent !== ""
            ? this.$store.getters["app/getSection"].parent
            : this.$store.getters["app/getSection"].section;
        this.gotoScroll(gSection);
      }, 1800);
    }
    /* ------------------------------------- */
  },
  computed: {
    p1() {
      return this.$store.getters["app/getPProyectos"].p;
    },
    p2() {
      return this.$store.getters["app/getPSection3"].p;
    },
    disableScroll() {
      return this.$store.getters["app/getDetalleColeccionOpen"];
    },
    scrollX() {
      return this.$store.getters["app/getX"];
    },
  },
  methods: {
    bscroll(e) {
      this.$store.commit("app/setScroll", {
        x: this.$refs.scrollContent.scrollLeft,
        y: 0,
      });
    },
    wscroll(e) {
      if (this.disableScroll) {
        return false;
      }

      this.$refs.scrollContent.scrollLeft += e.deltaY;

      this.$store.commit("app/setScroll", {
        x: this.$refs.scrollContent.scrollLeft,
        y: 0,
      });
    },
    gotoScroll(s) {
      console.log("s", s);
      const ww = this.$store.getters["app/getWindowWidth"];

      let pos = ww > 1024 ? this.$refs[s].offsetLeft : this.$refs[s].offsetTop;

      let xy = ww > 1024 ? { y: 0, x: pos } : { y: pos - 71, x: 0 };

      this.$gsap.to(this.$refs.scrollContent, {
        // for construction
        // duration: 0,
        duration: 0.6,
        scrollTo: xy,
      });
    },
    onResize() {
      this.$store.commit("app/setWindowWidth", window.innerWidth);
    },
  },
  watch: {
    $route(r) {
      // console.log("variable", r);
    },
  },
};
</script>
