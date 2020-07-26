<template>
  <div class="alphabet">
      <ul class="list">
          <li v-for="(item,key) of cities" :key="key" class="item">{{key}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style  lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        position absolute
        top 1.58rem
        right 0
        bottom  0
        width .4rem
        display flex
        flex-direction column
        justify-content center
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>
