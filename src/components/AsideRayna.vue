<script setup>
import { RouterLink, useRoute } from 'vue-router'
import IconMen from './common/Icon/IconMen.vue'
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.name === 'home')
</script>

<template>
  <aside class="aside pt-4 px-2">
    <figure class="px-3 aside-logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </figure>
    <ul class="aside-options p-0 m-0">
      <li>
        <router-link to="/" class="d-flex align-items-center" :class="{ active: isHome }">
          <icon-men width="20" height="20" class="me-3" />
          Formularios
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss">
@use '../scss/_variables.scss' as *;

.aside {
  min-height: 100vh;
  height: 100%;
  background: $color-white;
  border-right: 1px solid $color-gray;

  &-logo {
    margin-bottom: 20px;
  }

  &-options {
    list-style: none;

    a {
      padding: 12px 16px;
      display: block;

      border-radius: 4px;
      font-weight: 500;
      text-decoration: none;
      color: $color-text;
    }

    svg {
      color: $color-gray-70;
    }

    .active {
      background-color: $colot-primary-10;
    }
  }
}
</style>
