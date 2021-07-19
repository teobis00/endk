<style lang="less" scoped>
.endk-section-contacto {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .variable-bg {
    position: absolute;
    right: -10px;
    top: 0px;
    width: 52vw;
    height: 100vh;
    z-index: 10;
    background-image: url("~/assets/img/bg_contacto.jpg");
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .back-to-inicio {
    width: auto;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 20;
    .button {
      transform: rotate(-90deg);
      margin-left: -40px;
      margin-right: -36px;
    }
  }

  .endk-content-contacto {
    position: relative;
    z-index: 20;
    width: 80%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-column-gap: 9vw;
    align-items: center;
    .endk-left-contacto {
      h1 {
        font-size: 70px;
        line-height: 70px;
        margin-bottom: 5px;
        margin-left: -4px;
      }
      p {
        margin-bottom: 20px;
        font-size: 17px;
      }
      fieldset {
        border: none;
        margin: 0;
        padding: 0;
        margin-top: 18px;

        span {
          display: inline-block;
          font-size: 12px;
          font-weight: 300;
          float: right;
          padding-top: 4px;
          margin-right: 20px;
          margin-bottom: -21px;
        }

        label {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #1c1c1c;
          margin-bottom: 4px;
          width: 100%;
          display: inline-block;
        }
        input[type="text"],
        textarea {
          box-sizing: border-box;
          padding: 5px 14px;
          width: 100%;
          border: none;
          height: 42px;
          background-color: #f1f1ef;
          border-radius: 20px;
          outline: none;
          &:focus {
            background-color: #c6c6c6;
          }
        }
        textarea {
          height: 146px;
          resize: none;
          padding: 15px 15px;
        }

        button {
          float: right;
          margin-top: -15px;
        }

        &.custom-check {
          margin-top: 18px;
          label {
            position: relative;
            cursor: pointer;
            font-size: 14px;
            color: #1c1c1c;
            font-weight: 300;
            &:before {
              content: "";
              -webkit-appearance: none;
              background-color: #f1f1ef;
              border: none;
              width: 9px;
              height: 9px;
              border-radius: 24%;
              padding: 10px;
              display: inline-block;
              position: relative;
              vertical-align: middle;
              cursor: pointer;
              margin-right: 12px;
            }
          }
          input {
            display: none;
          }

          input:checked + label:after {
            content: "";
            display: block;
            position: absolute;
            top: 5px;
            left: 11px;
            width: 6px;
            height: 13px;
            border: solid #000000;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
          }
        }
      }
    }
    .endk-right-contacto {
      align-items: center;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          padding: 0;
          margin: 0;
          margin-bottom: 26px;
          span {
            font-size: 16px;
            color: #1c1c1c;
            display: inline-block;
          }

          a {
            display: none;
          }

          font-size: 16px;
          font-weight: 300;
          &.align {
            display: flex;
            align-items: center;
          }
          &.whatsapp {
            font-size: 16px;
            padding-bottom: 10px;
            height: 0px;
            padding: 0px;
            margin: 0;
            border-bottom: 0px solid #c7c7c7;
            transition: all 380ms cubic-bezier(0.65, 0, 0.35, 1);
            position: relative;
            clip-path: inset(0% 0% 0% 0%);
            &.reveal {
              height: 60px;
              border-bottom: 3px solid #c7c7c7;
              margin-bottom: 20px;
              clip-path: inset(0% 0% -300% 0%);
            }
            .qr {
              width: 160px;
              height: 160px;
              position: absolute;
              right: 0px;
              top: 68px;
              z-index: 20;
            }
            a.showdesk {
              text-decoration: none;
              font-weight: 700;
              display: inline-block;
              color: black;
            }
          }
          svg {
            margin-right: 14px;
          }
        }
      }
    }
  }
}

.overlay-sending {
  width: 100%;
  background-color: rgba(52, 52, 52, 0.6);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 120;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-progress {
    position: relative;
    background-color: white;
    width: 430px;
    height: auto;
    min-height: 300px;
    border-radius: 23px 23px 23px 23px;
    box-sizing: border-box;
    padding: 30px;
    text-align: center;
    .close {
      position: absolute;
      right: 20px;
      top: 20px;
    }
    > span {
      display: inline-block;

      font-size: 18px;
      color: #7f7b6b;
      line-height: 18px;
      clip-path: inset(100% 0% 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      margin-top: 20px;
      &.reveal {
        clip-path: inset(0% 0% 0% 0%);
      }
    }
    p {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      color: #7f7b6b;
      line-height: 28px;
      clip-path: inset(100% 0% 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      &.reveal {
        clip-path: inset(0% 0% 0% 0%);
      }
    }
    h6 {
      font-size: 16px;
      font-weight: 300;
      color: #1c1c1c;
      margin: 0;
      padding: 0;
      clip-path: inset(100% 0% 0% 0%);
      transition: clip-path 600ms cubic-bezier(0.65, 0, 0.35, 1);
      will-change: clip-path;
      &.reveal {
        clip-path: inset(0% 0% 0% 0%);
      }
    }
    .progress {
      width: 190px;
      height: 190px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 95px;
      margin: 15px auto;
      .circle-bar {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
      }
      span {
        font-size: 24px;
        font-weight: 700;
        color: black;
      }
    }
  }
}

@media screen and (max-width: 580px) {
  .endk-section-contacto {
    display: inline-block;
    padding-top: 30px;
    .variable-bg {
      display: none;
    }
    .back-to-inicio {
      display: none;
    }
    .endk-content-contacto {
      display: inline-block;
      width: 100%;
      .endk-left-contacto {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0px 35px;
        h1 {
          font-size: 51px;
          line-height: 51px;
          width: 100%;
          text-align: center;
        }
        fieldset {
          label {
            font-size: 18px;
          }
          &.custom-check {
            label {
              font-size: 13px;
            }
          }
        }
      }
      .endk-right-contacto {
        background-image: url("~/assets/img/bg_contacto_mobile.jpg");
        background-position: right bottom;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0px 35px;
        padding-bottom: 50vh;
        ul {
          padding-top: 30px;
          box-sizing: border-box;
          li {
            span {
              display: none;
            }
            a {
              display: inline-block;
              text-decoration: none;
              color: black;
            }
            svg {
              pointer-events: none;
            }
          }
        }
      }
    }
  }
  .overlay-sending {
    background-color: white;
    .box-progress {
      border-radius: 0px;
      .close {
        right: 50%;
        top: 105%;
        transform: translateX(50%) scale(2);
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-contacto">
    <XyzTransition xyz="fade">
      <div class="overlay-sending" v-show="showOverlay">
        <div class="box-progress">
          <div class="close" v-on:click="showOverlay = false">
            <v-icon name="plusContacto" scale="1.2" />
          </div>
          <span :class="{ reveal: revealInfo }">Tu mensaje fué</span>
          <p :class="{ reveal: revealInfo }">enviado con éxito</p>
          <div class="progress">
            <div class="circle-bar" ref="circleBar"></div>
            <span>{{ numbers.percent | tnumber }}%</span>
          </div>
          <h6 :class="{ reveal: revealInfo }">
            Nos contactaremos contigo a <br />
            la brevedad
          </h6>
        </div>
      </div>
    </XyzTransition>
    <div class="variable-bg"></div>
    <div class="back-to-inicio">
      <v-icon name="doublechevron" scale="1" />
      <button class="button" v-on:click="goInicio()" dc="Volver al inicio">
        Volver al inicio
      </button>
    </div>

    <div class="endk-content-contacto">
      <div class="endk-left-contacto">
        <h1>Contáctanos</h1>
        <p>Déjanos un mensaje y te contactaremos a la brevedad</p>

        <fieldset>
          <label for="">Nombre</label><br />
          <input type="text" v-model="nombre" maxlength="50" />
          <span v-show="val_nombre">{{ val_nombre }}</span>
        </fieldset>
        <fieldset>
          <label for="">Mail</label><br />
          <input type="text" v-model="email" maxlength="50" />
          <span v-show="val_email">{{ val_email }}</span>
        </fieldset>
        <fieldset>
          <label for="">Escribe aquí tu mensaje</label><br />
          <textarea v-model="mensaje" maxlength="500"></textarea>
          <span v-show="val_mensaje">{{ val_mensaje }}</span>
        </fieldset>
        <fieldset class="custom-check">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            v-model="optim"
          /><label for="checkbox" class="desc"
            >Mantente informado y recibe actualizaciones</label
          >
        </fieldset>
        <fieldset>
          <button class="button" dc="Enviar" v-on:click="sendEmail()">
            Enviar
          </button>
        </fieldset>
      </div>
      <div class="endk-right-contacto">
        <ul>
          <li>
            <span> <strong>Email</strong> </span><br />
            info@endemik.cl
          </li>
          <li>
            <span> <strong>Teléfono</strong> </span><br />
            +56 2 3340 2953 | +56 9 3458 6940
          </li>
          <li>
            <span> <strong>Dirección</strong> </span><br />
            DirecciónLos Araucanos 2696, Providencia.<br />
            (Sector Pedro de Valdivia norte).
          </li>
          <li class="align">
            <v-icon name="ws" scale="1.3" v-on:click="qr = !qr" />
            <span v-on:click="qr = !qr">+56 9 3458 6940</span>
            <a href="https://wa.me/+56934586940" target="_blank"
              >+56 9 3458 6940</a
            >
          </li>
          <li class="whatsapp" :class="{ reveal: qr }">
            haz
            <a
              class="showdesk"
              href="https://wa.me/+56934586940"
              target="_blank"
              >click aquí</a
            >
            para abrir whatsapp en tu computador o escanea el código para abrir
            WhatsApp en tu Móvil
            <XyzTransition xyz="fade narrow-5 small-5">
              <div class="qr" v-show="qr">
                <v-icon name="qr" scale="11" />
              </div>
            </XyzTransition>
          </li>
          <li class="align">
            <v-icon name="ins" scale="1.3" /> www.instagram.com/endemi_k
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ProgressBar from "progressbar.js";
import { TweenMax } from "gsap";

export default {
  mounted() {
    // progressbar.js@1.0.0 version is used
    // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
    this.bar = new ProgressBar.Circle(this.$refs.circleBar, {
      strokeWidth: 3,
      easing: "easeInOut",
      duration: 4400,
      color: "#000000",
      trailColor: "#d1d1d1",
      trailWidth: 3,
      svgStyle: null,
    });
  },
  name: "endk-section-contacto",
  data() {
    return {
      qr: false,
      showOverlay: false,
      revealInfo: false,
      numbers: {
        percent: 0,
      },
      nombre: "",
      email: "",
      mensaje: "",
      val_nombre: 0,
      val_email: 0,
      val_mensaje: 0,
      optim: false,
      bar: undefined,
    };
  },
  filters: {
    tnumber(v) {
      if (v === 0) {
        return "‏‏‎ ‎ ‎ ‎";
      }
      return Math.round(v);
    },
  },
  methods: {
    async sendEmail() {
      this.val_nombre = 0;
      this.val_email = 0;
      this.val_mensaje = 0;

      if (this.nombre === "") {
        this.val_nombre = "Ingresa tu nombre";
        return false;
      }
      if (this.email === "") {
        this.val_email = "Ingresa tu Email";
        return false;
      }

      function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

      //console.log("validateEmail(this.email)", !validateEmail(this.email));
      //return false;

      if (!validateEmail(this.email)) {
        this.val_email = "Ingresa un Email Válido";
        return false;
      }

      if (this.mensaje.length === 0) {
        this.val_mensaje = "Ingresa un Mensaje";
        return false;
      }

      this.showProcess();
      /*
      const { data } = await axios.post("https://static.endemik.cl/contacto/", {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje,
        optin: this.optim ? 1 : 0,
      });
      */

      const bodyFormData = new FormData();
      bodyFormData.append("nombre", this.nombre);
      bodyFormData.append("email", this.email);
      bodyFormData.append("mensaje", this.mensaje);
      bodyFormData.append("optin", this.optim ? 1 : 0);

      const { data } = await axios({
        method: "post",
        url: "https://static.endemik.cl/contacto/",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("r", data);
    },
    showProcess() {
      this.bar.set(0);
      this.numbers.percent = 0;
      this.showOverlay = true;
      this.revealInfo = false;

      this.bar.animate(1); // Number from 0.0 to 1.0
      TweenMax.to(this.numbers, 4.4, { percent: 100 });
      setTimeout(() => {
        this.revealInfo = true;
        this.val_nombre = 0;
        this.val_email = 0;
        this.val_mensaje = 0;

        this.nombre = "";
        this.email = "";
        this.mensaje = "";
        this.optim = false;
      }, 4500);
    },
    goInicio() {
      this.$router.push("/");
    },
  },
};
</script>
