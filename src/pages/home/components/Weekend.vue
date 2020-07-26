<template>
    <div>
        <div class="title">周末游</div>
        <ul>
            <li class="item border-bottom"
                v-for="item of recommendList"
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京野生动物园',
        desc: '敢与森林之王近距离接触吗？'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京野生动物园',
        desc: '敢与森林之王近距离接触吗？'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京野生动物园',
        desc: '敢与森林之王近距离接触吗？'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
        title: '北京野生动物园',
        desc: '敢与森林之王近距离接触吗？'
      }]
    }
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
