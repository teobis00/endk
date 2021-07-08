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
        margin-top: 26px;
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
          padding: 5px 10px;
          width: 100%;
          border: none;
          height: 42px;
          background-color: #f1f1ef;
          border-radius: 20px;
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
          margin-top: 12px;
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
          }
          font-size: 16px;
          font-weight: 300;
          &.align {
            display: flex;
            align-items: center;
          }
          svg {
            margin-right: 14px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <section class="endk-section endk-section-contacto">
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
        <form action="">
          <fieldset>
            <label for="">Nombre</label><br />
            <input type="text" />
          </fieldset>
          <fieldset>
            <label for="">Mail</label><br />
            <input type="text" />
          </fieldset>
          <fieldset>
            <label for="">Escribe aquí tu mensaje</label><br />
            <textarea></textarea>
          </fieldset>
          <fieldset class="custom-check">
            <input type="checkbox" id="checkbox" name="checkbox" /><label
              for="checkbox"
              class="desc"
              >Mantente informado y recibe actualizaciones</label
            >
          </fieldset>
          <fieldset>
            <button class="button" dc="Enviar">Enviar</button>
          </fieldset>
        </form>
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
            <v-icon name="ws" scale="1.3" /> +56 9 3458 6940
          </li>
          <li class="align">
            <v-icon name="ins" scale="1.3" /> +56 9 3458 6940
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
  name: "endk-section-contacto",
  data() {
    return {};
  },
  methods: {
    goInicio() {
      this.$router.push("/");
    },
  },
};
</script>
