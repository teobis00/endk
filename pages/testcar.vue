<style lang="less">
.test-slick {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content-slick {
    width: 80%;
    height: 40%;
  }
}

.slick-slide {
  display: block;
  transition: all 300ms linear;
  transform: scale(0.6);
  opacity: 0;
  div {
    img {
      height: 100%;
    }
  }
}

.slick-center {
  transform: scale(1);
  opacity: 1;
  div {
    img {
    }
  }
}
</style>
<template>
  <div class="test-slick">
    <div class="content-slick">
      <slick ref="slick" :options="slickOptions">
        <img src="~/assets/img/coleccion/bt1.png" alt="" />
        <img src="~/assets/img/coleccion/bt1.png" alt="" />
        <img src="~/assets/img/coleccion/bt1.png" alt="" />
        <img src="~/assets/img/coleccion/bt1.png" alt="" />
        <img src="~/assets/img/coleccion/bt1.png" alt="" />
      </slick>
    </div>
  </div>
</template>

<script>
import "slick-carousel/slick/slick.css";
import Slick from "vue-slick";

export default {
  name: "testcar",
  layout: "blank",
  components: { Slick },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        centerPadding: "0px",
        initialSlide: 1,
        slidesToShow: 3,
      },
    };
  },
};
</script>
