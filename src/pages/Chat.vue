<script setup>
import SendMessage from '../components/Chat/SendMessage.vue'
import ListMessages from '../components/Chat/ListMessages.vue'
</script>

<template>
  <div>
    <div class="root">
      <div class="root__back">
        <ListMessages class="root__list" />
        <div class="line"></div>
        <SendMessage class="root__wrapper" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

.root
  width: 100%
  min-height: 100vh
  display: flex
  align-items: center
  justify-content: center
  &__back
    width: 650px
    height: 760px
    background: url('@/assets/imgs/chatBack.png')
    display: flex
    flex-direction: column
  &__wrapper
    padding: 20px 40px 30px 20px
  &__list
    overflow-y: scroll
    height: 100%
</style>
