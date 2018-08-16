<template>
     <div class="swiper-container"
        ref="slider">
        <div class="swiper-wrapper">
            <router-link v-for="(slide,index) in slides" :to="{name:'Bookdetails',params: { id : slide.id }}" class="swiper-slide"
                  tag="div" :key="index">
                <img :src="slide.img_url"/>
            </router-link>
        </div>
        <div class="swiper-pagination"
            ref="pagination"></div>
    </div>
</template>
<script>
export default {
}
</script>

<style>
.swiper-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.swiper-wrapper {
  height: 200px;
}

.swiper-slide img {
  max-width: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: ["slides"],
  mounted() {
    new Swiper(this.$refs.slider, {
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      //   autoplay: 2500
      autoplayDisableOnInteraction: false,
      //   clickable: true,
      autoplay: {
        delay: 2500
      },
      pagination: {
        el: this.$refs.pagination, //ref标记是标准的html属性取代了v-ref
        type: "bullets"
      }
    });
  }
};
</script>