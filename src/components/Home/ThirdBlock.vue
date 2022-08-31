<script setup>
import { ref } from 'vue'

const refImg = ref(null)
const addEffect = () => refImg.value.classList.add('left__bottom--img--active')
const removeEffect = () =>
  refImg.value.classList.remove('left__bottom--img--active')

const array = [
  ['фамилия', 'мамай'],
  ['Имя и отчество', 'Станиславаленина Владимировна'],
  ['Номер полиса выдан заведомо ложный', '01354879'],
  ['Дата рождения', '01.12.1976'],
  ['Телефон', '+79254218069'],
]
</script>

<template>
  <div>
    <div class="root">
      <div class="left__top">Чувство однократно</div>
      <div
        class="left__bottom"
        @mouseover="addEffect"
        @mouseleave="removeEffect"
      >
        <img
          src="@/assets/imgs/ship.png"
          class="left__bottom--img"
          alt="..."
          ref="refImg"
        />
        <div class="warning__wrapper">
          <div class="warning__wrapper__mark">!</div>
        </div>
      </div>
      <div class="right">
        <div class="right__list">
          <div class="right__list__li" v-for="li in array">
            <div class="right__list__li--points">
              <span>{{ li[0] }}</span>
            </div>
            <div class="right__list__li--last">
              <span>{{ li[1] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.root
  margin: 10px 0
  font-size: 14px
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 10px
  grid-template-areas: "right__top right right " "right__bottom right right "
  @media (max-width: 460px)
    display: none
.right
  padding: 15px
  grid-area: right
  background: #E3EBD3
  overflow-y:  auto
  text-align: center
  color: #000
  aspect-ratio: 1/1
  &__list
    display: flex
    flex-direction: column
    gap: 30px
    &__li
      display: grid
      grid-template-columns: 1fr auto
      gap: 10px
      &--points
        text-align: start
        position: relative
        overflow: hidden
        display: flex
        align-items: end
        span
          max-width: 220px
          display: block
          &::after
            content: ''
            margin-left: 10px
            border-bottom: 1px dashed #000000
            width: 100%
            position: absolute
            bottom: 0
      &--last
        display: flex
        align-items: end
        span
          text-align: end
          max-width: 131px
          display: block
.left__top
  background: #E3EBD3
  color: #000
  display: flex
  align-items: end
  font-size: 14px
  padding: 15px
  grid-area: right__top
.left__bottom
  display: flex
  align-items: center
  justify-content: center
  position: relative
  grid-area: right__bottom
  overflow: hidden
  &--img
    width: 100%
    height: 100%
    position: absolute
    transition: .3s
    overflow: hidden
    &--active
      cursor: pointer
      filter: blur(15px)
      overflow: hidden

.warning__wrapper
  position: relative
  background: #fff
  width: 61px
  height: 61px
  border-radius: 50px
  display: flex
  align-items: center
  justify-content: center
  visibility: hidden
  transition: .3s
  opacity: 0
  &__mark
    font-size: 36px
    line-height: 42px
    color: #F55E62
  .left__bottom:hover &
    visibility: visible
    transition: .3s
    opacity: 1
    cursor: pointer
</style>
