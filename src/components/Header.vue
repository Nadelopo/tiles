<template>
  <header class="header">
    <div class="wrapper__buttons">
      <router-link :to="{ name: 'Home' }">
        <button class="btn">Home</button>
      </router-link>
      <router-link :to="{ name: 'Chat' }">
        <button class="btn">Chat</button>
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="sass">

.header
  background: #C4C4C4
  display: flex
  justify-content: center
  align-items: center
  min-height: 90px
  font-weight: 400
  font-size: 24px
  margin-bottom: 10px

.wrapper__buttons
  display: flex
  gap: 20px
</style>
