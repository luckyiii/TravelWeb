<template>
  <div class="swiper">
    <swiper :options="swiperOption"  v-if="swiperShow">
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  },
  computed: {
    swiperShow () {
      return this.list.length !== 0
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
