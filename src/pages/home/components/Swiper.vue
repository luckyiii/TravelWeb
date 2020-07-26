<template>
  <div class="swiper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '../../../static/images/banner1.jpg'
      }, {
        id: '0002',
        imgUrl: '../../../static/images/banner2.jpg'
      }, {
        id: '0003',
        imgUrl: '../../../static/images/banner3.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .swiper >>> .swiper-pagination-bullet-active
        background #ffffff
    .swiper
        height 3rem
        background #eee
        overflow hidden
        .swiper-img
            width 100%
            height 3rem
</style>
