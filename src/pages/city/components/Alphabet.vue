<template>
  <div class="alphabet">
      <ul class="list">
          <li v-for="item of letters"
              :key="item"
              :ref="item"
              class="item"
              @click="handleLetterClick"
              @touchstart.prevent="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
          >
              {{item}}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  props: {
    cities: Object
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
