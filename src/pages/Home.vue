<script setup>
import Footer from '../components/Footer.vue'
import FirstBlock from '../components/Home/FirstBlock.vue'
import SecondBlock from '../components/Home/SecondBlock.vue'
import ThirdBlock from '../components/Home/ThirdBlock.vue'
import FourthBlock from '../components/Home/FourthBlock.vue'
</script>

<template>
  <div class="container">
    <div class="grid"><FirstBlock /> <SecondBlock /></div>
    <ThirdBlock />
    <FourthBlock />
  </div>
  <Footer />
</template>

<style scoped lang="sass">
.grid
  display: flex
  flex-direction: column
  gap: 10px
  margin-bottom: 10px
  @media (max-width: 460px)
    flex-direction: column-reverse
</style>
