<template>
  <div>
    <div class="root">
      <div class="first">
        <div class="first__text">Однако</div>
        <div class="first__top">
          <div class="first__text">Точка перегиба</div>
          <div class="first__text__right">Длина вектора</div>
        </div>
      </div>
      <div class="second">
        <div class="second__top">Лидерство</div>
        <div class="second__bottom">Невероятный гений</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.root
  display: grid
  font-size: 14px
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 10px
  grid-template-areas: "left right right" "left right right"
  @media (max-width: 460px)
    grid-template-rows: 1fr auto
    grid-template-columns: 1fr
    grid-template-areas: "right" "left"
.first
  grid-area: right
  display: grid
  grid-template-rows: 1fr 1fr
  gap: 10px
  &__top
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10px
  &__text, &__text__right
    min-height: 155px
    background: #FFAA87
    display: flex
    align-items: end
    padding: 15px
    &__right
      background: #C7ABD4
.second
  display: grid
  grid-area: left
  grid-template-rows: 1fr 1fr
  gap: 10px
  @media (max-width: 460px)
    grid-template-rows: unset
    grid-template-columns: 1fr 1fr
  &__top, &__bottom
    display: flex
    align-items: end
    font-size: 14px
    padding: 15px
    @media (max-width: 460px)
      aspect-ratio: 1 / 1
  &__top
    background: #FFAA87
  &__bottom
    background: #F55E62
</style>
