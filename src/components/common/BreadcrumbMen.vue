<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import IconMen from './Icon/IconMen.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const { items } = toRefs(props)
</script>

<template>
  <div class="breadcrumb">
    <ul class="p-0 m-0">
      <li
        v-for="(item, index) in items"
        :key="item?.label"
        class="d-flex align-items-center justify-content-center"
      >
        <span v-if="index === 1" class="mx-3 divider">/</span>

        <router-link v-if="index === 0" :to="item?.href">
          <span class="btn-back d-flex align-items-center justify-content-center">
            <icon-men name="arrow_left" width="12" height="12" />
          </span>
        </router-link>

        <router-link v-if="item?.href" :to="item?.href">
          <p class="m-0 d-flex align-items-center justify-content-center">
            {{ item.label }}
          </p>
        </router-link>

        <span v-else>
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@use '../../scss/_variables.scss' as *;

.breadcrumb {
  ul {
    display: flex;
    align-items: center;
    list-style: none;

    a {
      text-decoration: none;
      color: $color-gray-70;
      font-weight: 500;
    }

    span {
      color: $color-red;
      font-weight: 500;
    }
  }

  .btn-back {
    padding: 6px;
    background: $color-white;
    border: 1px solid $color-gray;
    border-radius: 4px;
    color: $color-black;
    margin-right: 12px;
  }

  .divider {
    color: $color-geray-30;
  }
}
</style>
