<template>
  <div>
    <div class="root">
      <textarea type="text" class="root__textarea" placeholder="сообщение..." />
      <div class="root__button"><button class="btn">Отправить</button></div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.root
  height: 100%
  &__textarea
    max-width: 590px
    width: 100%
    min-width: 50%
    max-height: 130px
    height: 130px
    border: 1px solid #DBDBDB
    border-radius: 4px
    padding: 10px
    &:focus
      outline: none
  &__button
    margin-top: 20px
</style>
