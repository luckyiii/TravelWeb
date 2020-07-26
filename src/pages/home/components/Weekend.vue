<template>
    <div>
        <div class="title">周末游</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of list"
                :key="item.id">
                <div class="item-img-wrap">
                    <img :src="item.imgUrl" class="item-img"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
      line-height .8rem
      background #eee
      text-indent .2rem
    .item-img-wrap
      overflow hidden
      height 0
      padding-bottom 33.9%
      .item-img
        width 100%
    .item-info
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #CCC
        ellipsis()
</style>
