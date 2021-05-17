<style lang="less" scoped>
.endk-section-inicio {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("~/assets/img/bg_main_inicio.png");
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  display: flex;
  .endk-lain-inicio {
    width: 100%;
    box-sizing: border-box;
    padding-left: calc(70px);
    padding-right: 54px;
    display: grid;
    grid-template-columns: 1.2fr auto 90px;

    .endk-inicio-figure-info {
      left: 11px;
      bottom: 90px;
      position: absolute;
      font-size: 12px;
      font-weight: 300;
      color: white;
      transform: rotate(-90deg);
    }
    .endk-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 200px;

      .button {
        margin-top: 27px;
        float: right;
      }

      .aux-h4 {
        height: 48px;
        @media screen and (min-width: 1440px) {
          height: 72px;
        }
      }
      .aux-p {
        height: 50px;
        align-self: flex-start;
        @media screen and (min-width: 1440px) {
          height: 65px;
        }
      }
      .aux-button {
        height: 55px;
        .button {
          margin-top: 27px;
          float: right;
        }
      }
    }
    .endk-media {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}

.ovxyz-inicio-p {
  --xyz-translate-y: 250%;
  --xyz-opacity: 0;
}

.ovxyz-inicio-button {
  --xyz-translate-y: 450%;
  --xyz-opacity: 0;
}

.line_anim {
  stroke-dasharray: 5;
  stroke-dashoffset: 25px;
  animation-name: scrolling;
  animation-duration: 6800ms;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-delay: 400ms;
}

@keyframes scrolling {
  from {
    stroke-dashoffset: 0px;
  }
  to {
    stroke-dashoffset: 50px;
  }
}

.chv {
  animation-name: colorchange;
  animation-duration: 1200ms;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: linear;
}

.ch1 {
  animation-delay: 600ms;
}

@keyframes colorchange {
  0% {
    fill: #84837f;
  }
  50% {
    fill: #413f36;
  }
  100% {
    fill: #84837f;
  }
}
</style>

<template>
  <section class="endk-section endk-section-inicio">
    <img v-if="removeImage" src="/assets/img/bg_main_inicio.png" alt="" />
    <div class="endk-lain-inicio">
      <XyzTransition xyz="fade down-100% rotate-left">
        <div v-if="tstartAnim4" class="endk-inicio-figure-info">
          Casa Pérez Maggi, <br />2020. Arquitectura Mathias Klotz.
        </div>
      </XyzTransition>
      <div class="sep"></div>
      <div class="endk-info">
        <div class="aux-h4">
          <XyzTransition xyz="fade up-100%">
            <h4 v-if="tstartAnim">
              Somos una empresa boutique de diseño<br />
              y arquitectura interior de alto estándar.
            </h4>
          </XyzTransition>
        </div>
        <div class="aux-p">
          <XyzTransition class="ovxyz-inicio-p">
            <p v-if="tstartAnim2">
              Fabricamos una amplia gama de productos diseñados a medida<br />
              con terminaciones de alta calidad.
            </p>
          </XyzTransition>
        </div>
        <div class="aux-button">
          <XyzTransition class="ovxyz-inicio-button">
            <button class="button" v-if="tstartAnim3">Conócenos</button>
          </XyzTransition>
        </div>
      </div>
      <div class="endk-media" :style="styleCallToScroll">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60.599"
          height="54"
          viewBox="0 0 60.599 54"
        >
          <defs>
            <style>
              .asdqwe {
                fill: #83827e;
              }
              .b {
                fill: #84837f;
              }
              .c {
                fill: none;
                stroke: #000;
                stroke-linecap: round;
                stroke-width: 3px;
              }
            </style>
          </defs>
          <g transform="translate(-1271 -341)">
            <g transform="translate(1271 341)">
              <path
                class="asdqwe"
                d="M15.884,0A15.9,15.9,0,0,0,0,15.884V38.116a15.884,15.884,0,1,0,31.768,0V15.884A15.9,15.9,0,0,0,15.884,0ZM28.528,38.116a12.644,12.644,0,1,1-25.288,0V15.884a12.644,12.644,0,1,1,25.288,0Zm0,0"
              />
              <path
                class="b"
                d="M136.866,101.852a1.62,1.62,0,0,0-1.62,1.62v7.456a1.62,1.62,0,0,0,3.24,0v-7.456A1.62,1.62,0,0,0,136.866,101.852Zm0,0"
                transform="translate(-120.982 -91.109)"
              />
              <line
                class="c line_anim"
                y2="7.5"
                transform="translate(15.884 12.3)"
              />
            </g>
            <g transform="translate(164 -56.63)">
              <path
                class="b chv ch1"
                d="M1152.174,436.63c-.093-.043-.194-.077-.286-.13a1.636,1.636,0,0,1-.383-2.281h0a.851.851,0,0,1,.061-.077q1.465-1.838,2.94-3.663l3.237-4.034c.034-.042.06-.088.1-.143l-.137-.182q-3.045-3.795-6.1-7.594a1.665,1.665,0,0,1-.384-1.306,1.323,1.323,0,0,1,.879-1.2.616.616,0,0,0,.072-.038h.388a1.842,1.842,0,0,1,.846.7q2.97,3.711,5.948,7.413.447.56.894,1.11a1.72,1.72,0,0,1,0,2.21q-3.258,4.061-6.524,8.122c-.1.128-.212.25-.31.384a1.756,1.756,0,0,1-.857.713Z"
              />
              <path
                class="b chv ch2"
                d="M1159.121,436.63c-.093-.043-.194-.077-.286-.13a1.636,1.636,0,0,1-.383-2.281h0a.836.836,0,0,1,.06-.077q1.466-1.838,2.94-3.663l3.237-4.034c.034-.042.06-.088.1-.143l-.138-.182q-3.045-3.795-6.1-7.594a1.661,1.661,0,0,1-.385-1.306,1.323,1.323,0,0,1,.879-1.2.608.608,0,0,0,.072-.038h.388a1.842,1.842,0,0,1,.846.7q2.97,3.711,5.948,7.413.447.56.894,1.11a1.72,1.72,0,0,1,0,2.21q-3.258,4.061-6.524,8.122c-.1.128-.212.25-.31.384a1.756,1.756,0,0,1-.857.713Z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import endkDataScroll from "~/components/endkDataScroll";

export default {
  components: {
    endkDataScroll,
  },
  name: "endk-section-inicio",
  props: ["startAnim"],
  data() {
    return {
      removeImage: true,
      tstartAnim: false,
      tstartAnim2: false,
      tstartAnim3: false,
      tstartAnim4: false,
    };
  },
  computed: {
    percent() {
      const percent = 1 - this.$store.getters["app/getPInicio"].p / 10;
      return percent;
    },
    debugPos() {
      return this.$store.getters["app/getDebugPos"];
    },
    PInicio() {
      return this.$store.getters["app/getPInicio"];
    },
    styleCallToScroll() {
      return { opacity: this.percent };
    },
  },
  watch: {
    startAnim(n) {
      this.removeImage = false;
      setTimeout(() => {
        this.tstartAnim = true;
      }, 1000);
      setTimeout(() => {
        this.tstartAnim2 = true;
      }, 1400);
      setTimeout(() => {
        this.tstartAnim3 = true;
      }, 1800);
      setTimeout(() => {
        this.tstartAnim4 = true;
      }, 2100);
    },
  },
};
</script>
