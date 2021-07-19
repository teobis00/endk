<style lang="less" scoped>
.endk-section-proyectos {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  position: relative;

  .line2 {
    width: 12%;
    height: auto;
    align-self: flex-start;
    position: relative;
    z-index: 20;
    display: inline-block;
    svg {
      display: inline-block;
      vertical-align: top;
      z-index: 20;
      position: relative;
    }
    .fixer {
      width: 100%;
      height: 100%;
      transform: translateY(-100%);
      position: relative;
      h1 {
        position: absolute;
        left: 25%;
        bottom: 16%;
        clip-path: inset(0% 100% 0% 0%);
        transition: clip-path 300ms cubic-bezier(0.65, 0, 0.35, 1);
        will-change: clip-path;
        line-height: 150px;
        @media screen and (min-width: 1440px) {
          font-size: calc(104px + 40%);
          line-height: calc(174px + 20%);
        }
      }
      &.reveal {
        h1 {
          clip-path: inset(0% 0% 0% 0%);
        }
      }
    }

    .info-seccion {
      position: absolute;
      right: -20%;
      top: 100%;
      width: 30vw;
      margin-left: 20%;
      .button {
        max-width: 210px;
        width: 210px;
        float: right;
        margin-top: 27px;
      }
      .mobile-only-proyectos {
        display: none;
      }
    }
  }

  .galeria-proyectos {
    position: absolute;
    left: 55vw;
    width: 245vw;
    top: 0px;
    height: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    .media-realative-proyectos {
      cursor: none;
      width: auto;
      height: 100%;
      position: sticky;
      left: 0px;
      text-align: center;
      img {
        display: inline-block;
        height: 100%;
      }
      .place-curve-text {
        width: 160px;
        position: absolute;
        left: 7.2%;
        top: 38%;
        height: auto;
        transform: translateX(-48%) translateY(-76px);
        z-index: 90;
      }
      .marker {
        z-index: 100;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-25px) translateX(-25px;);
        transition: all 380ms cubic-bezier(0.33, 1, 0.68, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          width: 12px;
          height: 12px;
          background-color: black;
          display: inline-block;
          border-radius: 50%;
          animation: pulse-black 2s infinite;
          padding: 0px;
          margin: 0px;
          pointer-events: none;
          transform: scale(1);
          transition: all 380ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        &:hover {
          transform: translateY(-25px) translateX(-25px;) scale(1.3);
          background-color: rgba(33, 33, 33, 0.1);
          span {
            background-color: #424242;
            transform: scale(2);
            animation: none;
          }
        }
      }

      .marker2 {
        z-index: 100;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid black;
        position: absolute;
        left: 57.5%;
        top: 32%;
        transform: translateY(-25px) translateX(-25px;);
        transition: all 380ms cubic-bezier(0.33, 1, 0.68, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          width: 12px;
          height: 12px;
          background-color: black;
          display: inline-block;
          border-radius: 50%;
          animation: pulse-black 2s infinite;
          padding: 0px;
          margin: 0px;
          pointer-events: none;
          transform: scale(1);
          transition: all 380ms cubic-bezier(0.33, 1, 0.68, 1);
        }
        &:hover {
          transform: translateY(-25px) translateX(-25px;) scale(1.3);
          background-color: rgba(33, 33, 33, 0.1);
          span {
            background-color: #424242;
            transform: scale(2);
            animation: none;
          }
        }
      }

      .full-column-name {
        width: 70px;
        box-shadow: 0px 1px 3px 2px rgba(33, 33, 33, 0.4);
        transform: translateX(-50%);
        height: 102vh;
        position: absolute;
        left: 57.5%;
        top: -1vh;
        background-color: #807d74;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        transition: all 380ms cubic-bezier(0.33, 1, 0.68, 1);
        opacity: 0;
        &.reveal {
          opacity: 1;
          .ptitle {
            clip-path: inset(0% 0% 0% 0%);
          }
        }
        .ptitle {
          transition: clip-path 400ms cubic-bezier(0.33, 1, 0.68, 1);
          clip-path: inset(0% 100% 0% 0%);
          white-space: nowrap;
          width: auto;
          display: inline-block;
          height: auto;
          font-size: 42px;
          color: white;
          transform: rotate(-90deg) translateX(50%);
          transform-origin: 50% 50%;
          text-align: center;
          top: 0px;
        }
      }
    }
  }
}

.circle-cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
  &--outer {
    width: 40px;
    height: 40px;
    border: 1px solid rgb(38, 50, 56);
    z-index: 12000;
    opacity: 0.2;
  }
  &--inner {
    width: 5px;
    height: 5px;
    left: -2.5px;
    top: -2.5px;
    z-index: 11000;
    background: #263238;
    svg {
      transform: translateX(-50%) translateY(-50%);
    }
  }
  &--text {
    z-index: 11000;
    font-size: 50px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
    color: transparent;
    font-weight: 700;
    transform-origin: 0 0;
    display: inline-block;
    width: auto;
    white-space: nowrap;
    left: 0px;
    top: 0px;
  }
}

@keyframes pulse-black {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
/*  Proyectos - Mob  */
@media screen and (max-width: 580px) {
  .endk-section-proyectos {
    display: inline-block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding-right: 35px;
    padding-top: 40px;
    .line2 {
      width: 100%;
      height: auto;
      svg {
        display: none !important;
      }
      .fixer {
        display: inline-block;
        width: 100%;
        height: auto;
        transform: none;
        h1 {
          position: relative;
          left: 0px;
          top: 0px;
          clip-path: inset(0% 0% 0% 0%);
          font-size: 51px;
          line-height: 51px;
          text-align: right;
        }
      }
      .info-seccion {
        transform: none !important;
        opacity: 1 !important;
        position: relative;
        left: 0;
        top: 0;
        margin: 0;
        width: 100%;
        text-align: right;
        .contenido-proyectos-inicial {
          padding-left: 35px;
        }
        > .button {
          display: none !important;
        }
        .mobile-only-proyectos {
          display: inline-block;
          button {
            display: inline-block;
            min-width: auto;
            max-width: 400px !important;
            width: auto;
            padding: 0 20px;
            white-space: nowrap;
          }
          margin-bottom: 50px;
        }
      }
    }
    .galeria-proyectos {
      width: 100%;
      position: relative;
      left: 0px;
      top: 0px;
      transform: none !important;
      display: inline-block;
      .media-realative-proyectos {
        position: relative;
        height: auto;
        width: 100vw;
        animation: movemedia 22s linear alternate;
        animation-iteration-count: infinite;
        img {
          width: 400vw;
        }
        .place-curve-text,
        .marker {
          display: none !important;
        }
        .full-column-name {
          display: none !important;
        }
      }
    }
  }
}

@keyframes movemedia {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-300%);
  }
}
</style>

<template>
  <section class="endk-section endk-section-proyectos">
    <div class="line2">
      <svg
        viewBox="-1 0 100 40"
        fill="blue"
        style="background-color:transparent"
      >
        <path d="M -1,2 L 0,2 L 40,35 L -1,45 z" fill="white" />
        <path
          id="line-path2"
          d="M -1,2 L 0,2 L 40,35"
          fill="transparent"
          stroke="gray"
          stroke-width="1"
        />
        <circle
          cx="40"
          cy="35"
          r="2"
          stroke="black"
          stroke-width="0"
          fill="gray"
          :visibility="visibleSpot2"
        />
      </svg>

      <div class="fixer" :class="{ reveal: reveal }">
        <h1>{{ titulo }}</h1>
      </div>
      <div class="info-seccion" :style="infoSectionStyle">
        <div class="contenido-proyectos-inicial" v-html="bajada"></div>
        <button
          class="button"
          dc="Descargar proyectos"
          v-on:click="downloadCatalogo"
          :style="buttonSectionStyle"
        >
          Descargar proyectos
        </button>

        <div class="mobile-only-proyectos">
          <button
            v-for="(p, index) in lista_proyectos"
            class="button"
            :dc="p.titulo"
            v-on:click="goInterior(p.path)"
            :key="`pm${p.id}`"
          >
            {{ p.titulo }}
          </button>
        </div>
      </div>
    </div>

    <div class="galeria-proyectos" :style="imageContentStyle">
      <div class="media-realative-proyectos">
        <img
          src="~/assets/img/proyectos.jpg"
          alt=""
          v-on:mouseover="showCursor = true"
          v-on:mouseleave="showCursor = false"
        />
        <div
          class="place-curve-text"
          v-for="(p, index) in lista_proyectos"
          :key="`m${p.id}`"
          :style="{ left: `${p.position.left}%`, top: `${p.position.top}%` }"
        >
          <endk-curve-text :text="p.titulo" :showtext="actionHover(index)" />
        </div>
        <div
          class="marker"
          v-for="(p, index) in lista_proyectos"
          :key="`p${p.id}`"
          :style="{ left: `${p.position.left}%`, top: `${p.position.top}%` }"
          v-on:mouseover="handleMouseEnter($event, p.id, index)"
          v-on:mouseleave="handleMouseLeave($event, p.id, index)"
          v-on:click="goInterior(p.path)"
        >
          <span></span>
        </div>
        <!--
        <div
          class="marker2"
          :style="barTitleStyle"
          v-on:mouseover="handleMouseEnter2($event, { esto: 1 })"
          v-on:mouseleave="handleMouseLeave2"
          v-on:click="goInterior"
        >
          <span></span>
        </div>
        -->
        <div class="full-column-name" :class="{ reveal: showBar }">
          <div class="ptitle">
            Mobiliario
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressBar from "progressbar.js";
import { TweenMax } from "gsap";

import endkCurveText from "~/components/endkCurveText";

export default {
  name: "endk-section-proyectos",
  data() {
    return {
      hovers: {},
      customAvance: 0,
      customAvanceTwice: 0,
      clientX: -100,
      clientY: -100,
      isStuck: false,
      outerCursorOriginals: {},
      scursor: true,
      showCursor: false,
      stext: false,
      showBar: false,
    };
  },
  components: {
    endkCurveText,
  },
  mounted() {
    this.bar = new ProgressBar.Path("#line-path2", {
      easing: "linear",
      duration: 200,
    });

    this.$store.getters["proyectos/getProyectos"].forEach((p) => {
      this.hovers[`p${p.id}`] = false;
    });
  },

  computed: {
    catalogo() {
      return this.$store.getters["proyectos/getCatalogo"];
    },
    titulo() {
      return this.$store.getters["proyectos/getTitulo"];
    },
    bajada() {
      return this.$store.getters["proyectos/getContenido"];
    },
    lista_proyectos() {
      return this.$store.getters["proyectos/getProyectos"];
    },
    barTitleStyle() {
      return {};
    },
    imageContentStyle() {
      const p = this.$store.getters["app/getPSection3"].p - 50;
      const x = p > 0 ? 50 - p : 50;
      const xm = x / 3;
      return { transform: `translateX(${x > -1 ? xm : 0}%)` };
    },
    infoSectionStyle() {
      const p = this.$store.getters["app/getPSection3"].p - 50;
      const x = p > 0 ? 50 - p : 50;
      const o = 1 - (x * 2) / 100;
      return { transform: `translateX(${x > -1 ? x : 0}%)`, opacity: o };
    },
    buttonSectionStyle() {
      const p = this.$store.getters["app/getPSection3"].p - 50;
      const x = p > 0 ? 50 - p : 50;
      const o = 1 - (x * 2) / 100;
      return { transform: `translateX(${x > -1 ? x : 0}%)`, opacity: o };
    },
    copacity() {
      return this.scursor ? { opacity: 1 } : { opacity: 0 };
    },
    percent() {
      return this.PProyectos.p;
    },
    PProyectos() {
      return this.$store.getters["app/getPProyectos"];
    },
    reveal() {
      return this.PColleccion > 159;
    },
    visibleSpot2() {
      return this.PColleccion > 159 ? "visible" : "hidden";
    },
    PColleccion() {
      const percent = this.$store.getters["app/getPColleccion"];
      if (percent.hasOwnProperty("p")) {
        return percent.p;
      }
      return undefined;
    },
  },
  watch: {
    hovers(n) {
      console.log("fuck", n);
    },
    third(n) {
      // console.log("third", n);
    },
    PProyectos(n) {
      // console.log("PProyectos", n);
    },
    PColleccion(n) {
      if (n < 110) {
        this.bar.set(0);
        return;
      }
      if (n > 109) {
        this.customAvance = n - 110;
        this.customAvanceTwice = (this.customAvance * 1.6) / 100;

        if (this.customAvance < 50) {
          this.bar.set(this.customAvanceTwice);
        } else {
          this.bar.set(1);
        }
      }
    },
  },
  methods: {
    downloadCatalogo() {
      window.open(this.catalogo, "Download");
    },
    actionHover(index) {
      return this.hovers[index];
    },
    goInterior(path) {
      this.$router.push("/proyectos" + path);
    },
    handleMouseEnter(e, id, index) {
      const objhover = {};
      objhover[`p${id}`] = true;

      this.hovers = Object.assign({}, this.hovers, objhover);
      this.hovers[index] = true;
      const config = {
        stop: true,
        size: 52,
        plusSize: 1,
        showOutter: true,
      };
      this.$store.commit("cursor/setCursor", { e, config });
    },
    handleMouseLeave(e, id, index) {
      // this.stext = false;
      //this.$set(this.hovers, `h${id}`, false);
      const objhover = {};
      objhover[`p${id}`] = true;
      this.hovers = Object.assign({}, this.hovers, objhover);
      this.hovers[index] = false;
      this.$store.commit("cursor/setCursor", false);
    },
    handleMouseEnter2(e, opt) {
      console.log("opt", opt);

      this.showBar = true;
      const config = {
        stop: true,
        size: 52,
        plusSize: 1,
        showOutter: true,
      };
      this.$store.commit("cursor/setCursor", { e, config });
    },
    handleMouseLeave2(e) {
      this.showBar = false;
      this.$store.commit("cursor/setCursor", false);
    },
  },
};
</script>
