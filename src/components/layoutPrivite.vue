<script setup>
import HeaderRayna from './HeaderRayna.vue'
import AsideRayna from './AsideRayna.vue'
</script>

<template>
  <div class="layout">
    <div>
      <aside-rayna />
    </div>
    <div>
      <header-rayna />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  display: grid;
  grid-template-columns: 272px 1fr;
}
</style>
