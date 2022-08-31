<template>
  <div>
    <div class="root">
      <div class="left">
        Гений непредвзято понимает под собой конфликт. Закон внешнего мира,
        очевидно, реально подчеркивает аксиоматичный здравый смысл. Культ
        джайнизма включает в себя поклонение Махавире и другим тиртханкарам,
        поэтому закон исключённого третьего индуцирует изоморфный ротор.
      </div>
      <div class="right__top">Чувство однократно</div>
      <div class="right__bottom">Морено</div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.root
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 10px
  grid-template-areas: "left left right__top" "left left right__bottom"
.left
  padding: 30px 46px 53px 25px
  grid-area: left
  background: #A2A9B7
  overflow-y:  auto
  text-align: center
  color: #fff
  aspect-ratio: 1/1
  @media (max-width: 460px)
    padding: 20px 20px 3px 10px
.right__top, .right__bottom
  background: #A2A9B7
  padding: 15px
  color: #fff
  display: flex
  align-items: end
  font-size: 14px
  @media (max-width: 460px)
    padding: 10px
.right__top
  grid-area: right__top
.right__bottom
  grid-area: right__bottom
</style>

<!-- grid-auto-columns: 1fr  grid-auto-flow: row -->
