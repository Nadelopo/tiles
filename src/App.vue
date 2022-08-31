<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style lang="sass">
*
  margin: 0
  box-sizing: border-box
  font-family: Roboto

.container
  margin: 0 auto
  max-width: 744px

.btn
  background: #0F54B9
  box-shadow: 0px 4px 6px rgba(15, 84, 185, 0.3)
  border-radius: 21px
  padding: 7px 22px
  color: #fff
  border: none
  font-size: 16px
  cursor: pointer
  transition: .3s
  &:hover
    box-shadow: 0 0 8px 4px #5b7eb1e3

.line
  border: 1px solid #DBDBDB
</style>
