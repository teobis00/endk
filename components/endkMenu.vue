<style lang="less">
.endk-menu {
  width: 70px;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 100;
  transition: transform 600ms cubic-bezier(0.65, 0, 0.35, 1);
  transform: translateX(-71px);

  .endk-menu-overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: rgba(52, 52, 52, 0.6);
    z-index: 99;
  }

  &.showMenu {
    transform: translateX(0px) !important;
  }

  .endk-menu-container {
    width: 70px;
    height: 100vh;
    background-color: white;
    border-right: 1px solid #dedede;
    transition: width 600ms cubic-bezier(0.65, 0, 0.35, 1);
    will-change: width;
    position: relative;
    z-index: 100;
    &.open {
      width: 420px;
      .endk-menu-controls {
        clip-path: inset(0% 0px 0% 0%);
      }
      .endk-menu-link {
        clip-path: inset(0% 0px 0% 0%);
      }
      .endk-bg-typos {
        clip-path: inset(0% 0px 0% 0%);
      }
      .endk-menu-info {
        clip-path: inset(0% 0px 0% 0%);
      }
    }
    .endk-menu-controls {
      width: 420px;
      height: 50px;
      display: grid;
      grid-template-columns: 1fr 280px 1fr;
      clip-path: inset(0% 350px 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      position: relative;
      z-index: 90;
    }

    .endk-menu-button {
      button {
        outline: none;
        display: inline-block;
        width: 70px;
        background-color: transparent;
        border: transparent;
        margin-top: 10px;
        cursor: pointer;
        box-sizing: border-box;
        padding: 10px 20px 30px 20px;
        position: relative;
        .line {
          display: inline-block;
          width: 28px;
          height: 3px;
          border-radius: 3px;
          background-color: #7f7b6b;
          line-height: 0px;
          position: absolute;
          left: 20px;
          &.l1 {
            top: 10px;
          }
          &.l2 {
            top: 18px;
          }
          &.l3 {
            top: 26px;
          }
        }
      }
    }

    .endk-close-button {
      button {
        outline: none;
        width: 70px;
        background-color: transparent;
        border: transparent;
        margin-top: 10px;
        cursor: pointer;
        box-sizing: border-box;
        padding: 10px 10px 20px 10px;
      }
    }

    .endk-menu-link {
      width: 300px;
      clip-path: inset(0% 200px 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      position: relative;
      z-index: 90;
      ul {
        display: inline-block;
        margin-top: 31px;
        padding-left: 50px;
        li {
          width: 100%;
          list-style: none;
          display: inline-block;
          margin-bottom: 27px;

          &.endk-logo-mobile {
            display: none;
          }
          &.endk-close-menu-mobile {
            display: none;
          }

          a {
            color: #555555;
            text-decoration: none;
            font: normal normal bold 20px/16px Open Sans;
          }
        }

        &:hover > li {
          opacity: 0.6;
        }

        &:hover > li:hover {
          opacity: 1;
        }
      }
    }

    .endk-menu-info {
      position: absolute;
      width: 300px;
      bottom: 53px;
      left: 52px;
      z-index: 90;
      clip-path: inset(0% 300px 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      p {
        color: #1c1c1c;
        font-size: 14px;
        font-weight: 300;
        font-family: "Open Sans", sans-serif;
      }
      figure {
        padding: 0;
        margin: 0;
        svg {
          display: inline-block;
        }
      }
    }

    .endk-bg-typos {
      position: absolute;
      z-index: 80;
      width: 300px;
      clip-path: inset(0% 250px 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      bottom: 0px;
      left: 0px;
      .bg-typo-item {
        display: flex;
        align-items: flex-end;
      }
    }
  }
}
.ovxyz-link-group {
  --xyz-translate-x: 50%;
  --xyz-opacity: 0;
  --xyz-in-delay: 0.45s;
  --xyz-out-delay: 0s;
}

.ovxyz-info-group {
  --xyz-translate-x: 50%;
  --xyz-opacity: 0;
  --xyz-in-delay: 0.6s;
  --xyz-out-delay: -0.1s;
}

@media screen and (max-width: 1024px) {
  .endk-menu {
    width: 100vw;
    height: 70px;
    background-color: white;
    border-bottom: 1px solid #dedede;

    transform: translateY(-71px);
    &.showMenu {
      transform: translateY(0px) !important;
    }
    .endk-menu-container {
      width: 0vw;
      height: 100vh;

      .endk-menu-link {
        width: 320px;
        ul {
          margin-top: 0px;
          li {
            &.endk-logo-mobile {
              display: inline-block;
              figure {
                margin: 0;
                padding: 0;
              }
            }
            &.endk-close-menu-mobile {
              display: inline-block;
              text-align: center;
            }

            a {
              font-size: 28px;
            }
          }

          button {
            outline: none;
            width: 70px;
            background-color: transparent;
            border: transparent;
            margin-top: 10px;
            cursor: pointer;
            box-sizing: border-box;
            padding: 10px 10px 20px 10px;
          }
        }
      }
      .endk-menu-info {
        bottom: 153px;
        .endk-logo-desktop {
          display: none;
        }
      }
    }
  }
}
</style>
<template>
  <div class="endk-menu" :class="{ showMenu: tshowMenu }">
    <!-- style="transform:matrix(1, 0, 0, 1, -100, 0)"> -->
    <!--   Overlay -->
    <XyzTransition xyz="fade">
      <div
        class="endk-menu-overlay"
        v-if="isOpen"
        v-on:click="isOpen = false"
      ></div>
    </XyzTransition>
    <!-- / Overlay -->
    <div class="endk-menu-container" :class="{ open: isOpen }">
      <div class="endk-menu-controls">
        <div class="endk-menu-button">
          <button v-on:click="openMenu">
            <XyzTransitionGroup xyz="fade left-100% stagger-2 delay-0.3">
              <span class="line l1" v-if="!isOpen" key="l1"></span>
              <span class="line l2" v-if="!isOpen" key="l2"></span>
              <span class="line l3" v-if="!isOpen" key="l3"></span>
            </XyzTransitionGroup>
          </button>
        </div>

        <div class="sep"></div>

        <div class="endk-close-button">
          <button v-on:click="isOpen = false">
            <v-icon scale="1.4" :name="'cerrar'" />
          </button>
        </div>
      </div>

      <nav class="endk-menu-link">
        <XyzTransition class="ovxyz-link-group">
          <ul v-if="isOpen">
            <li class="endk-logo-mobile">
              <figure>
                <v-icon name="logo" scale="13" />
              </figure>
            </li>

            <li>
              <NuxtLink to="/" v-on:click.native="isOpen = false"
                >01. Inicio</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/coleccion" v-on:click.native="isOpen = false"
                >02. Colección</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/proyectos">03. Proyectos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sustentabilidad">04. Sustentabilidad</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/nosotros">05. Nosotros</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contacto">06. Contacto</NuxtLink>
            </li>

            <li class="endk-close-menu-mobile">
              <button v-on:click="isOpen = false">
                <v-icon scale="1.4" :name="'cerrar'" />
              </button>
            </li>
          </ul>
        </XyzTransition>
      </nav>

      <XyzTransition class="ovxyz-info-group">
        <div class="endk-menu-info" v-if="isOpen">
          <p>
            Los Araucanos 2696, Providencia. <br />
            +56 2 33402953 | +56 9 34586940 <br />
            info@endemik.cl
          </p>
          <figure class="endk-logo-desktop">
            <v-icon name="logo" scale="6.5" />
          </figure>
        </div>
      </XyzTransition>
      <XyzTransitionGroup xyz="down-100% stagger-1 delay-1">
        <div class="endk-bg-typos" key="t1" v-if="isOpen">
          <div class="bg-typo-item bg-typo-1 xyz-nested">
            <v-icon scale="45.1" name="bgtypo1" />
          </div>
          <div class="bg-typo-item bg-typo-2 xyz-nested" v-if="isOpen" key="t2">
            <v-icon scale="28" name="bgtypo2" />
          </div>
          <div class="bg-typo-item bg-typo-3 xyz-nested" v-if="isOpen" key="t3">
            <v-icon scale="24.6" name="bgtypo3" />
          </div>
        </div>
      </XyzTransitionGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: "endk-menu",
  data() {
    return {
      tshowMenu: false,
      isOpen: false,
    };
  },
  props: ["showMenu", "scrollX"],
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
    linkto() {
      console.log("ya poh");
      this.$router.push("/coleccion");
    },
    gotoScroll(s) {
      this.$emit("gotoScroll", s);
    },
  },
  watch: {
    showMenu(n) {
      setTimeout(() => {
        this.tshowMenu = true;
      }, 1000);
    },
  },
};
</script>
