<template>
  <div>
    <div class="root">
      <div class="first">
        <div class="first__top">
          <div class="first__text">Наши сотрудники</div>
          <div class="first__text">Просветляет понимающий тест</div>
        </div>
        <div class="first__text">Конформизм</div>
      </div>
      <div class="second">
        <div class="second__top">Интроекция</div>
        <div class="second__bottom">Наши сотрудники</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.root
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 10px
  grid-template-areas: "left left right" "left left right"
  font-size: 14px
.first
  grid-area: left
  display: grid
  grid-template-rows: 1fr 1fr
  gap: 10px
  &__top
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 10px
  &__text
    min-height: 155px
    background: #E8EBED
    display: flex
    align-items: end
    padding: 15px
.second
  display: grid
  grid-area: right
  grid-template-rows: 1fr 1fr
  gap: 10px
  &__top, &__bottom
    display: flex
    align-items: end
    font-size: 14px
    padding: 15px
  &__top
    background: #90BCE8
  &__bottom
    background: #FEBF26

@media (max-width: 460px)
  .root
    grid-template-rows: 1fr auto
    grid-template-columns: 1fr
    grid-template-areas: "left" "right"
  .second
    grid-template-rows: unset
    grid-template-columns: 1fr 1fr
    &__top, &__bottom
      aspect-ratio: 1 / 1
</style>
