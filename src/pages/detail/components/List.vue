<template>
    <div class="detailList">
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
    .item-title
        height .8rem
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        .item-title-icon
            display block
            float left
            width .08rem
            height .24rem
            background-image linear-gradient(126deg,#00e0ca 0,#00bfd4 100%)
            border-radius .06rem
            margin-top .26rem
            margin-right .12rem
    .item-children
        padding 0 .2rem
</style>
