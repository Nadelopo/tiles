<script setup>
const messages = [
  {
    text: 'Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, - культурные ценности. Произведения искусства, антиквариат, иные предметы коллекционирования – все это имущество, безусловно высокая стоимость которого.',
    side: true,
  },
  {
    text: 'Это означает',
    side: false,
  },
  {
    text: 'доме, офисе, кабинете, мастерской',
    side: true,
    date: '21 октября 2017',
  },
  {
    text: 'Это означает',
    side: false,
  },
  {
    text: 'доме, офисе, кабинете, мастерской',
    side: true,
    date: '28 октября 2017',
  },
  {
    text: 'Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности.',
    side: false,
  },
  {
    text: 'доме, офисе, кабинете, мастерской',
    side: true,
  },
  {
    text: 'Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности.',
    side: false,
  },
]
</script>

<template>
  <div>
    <div class="root">
      <template v-for="message in messages">
        <div :class="message.side ? 'left' : 'right'">
          <div class="avatar--mask">
            <img src="@/assets/imgs/avatar.png" alt="" />
          </div>
          <div class="root__message--text">{{ message.text }}</div>
        </div>
        <div class="date__wrapper" v-if="message.date">
          <div class="date--line"></div>
          <div class="date">{{ message.date }}</div>
          <div class="date--line"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="sass">
.root
  padding: 41px 0 29px 0
  font-size: 14px
  &__message--text
    background: #F1F3F5
    border-radius: 5px
    max-width: 470px
    color: #000
    padding: 15px 15px 7px 22px
  .avatar--mask
    width: 47px
    height: 47px
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)
  .left
    margin: 0 19px 0 15px
    display: flex
    gap: 11px
    margin-bottom: 20px
    line-height: 24px
  .right
    margin: 0 19px 0 15px
    display: flex
    flex-direction: row-reverse
    gap: 11px
    margin-bottom: 20px
    line-height: 24px
  .date
    text-align: center
    margin: 20px 0 16px 0
    &__wrapper
      display: grid
      grid-template-columns: 1fr auto 1fr
      align-items: center
      gap: 28px
    &--line
      width: 100%
      height: 1px
      background: #DBDBDB
</style>
