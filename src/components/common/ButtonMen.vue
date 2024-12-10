<script setup>
import { toRefs } from 'vue'
import IconMen from './Icon/IconMen.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  primary: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: 'label',
  },
  icon: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const { label, icon, href } = toRefs(props)
</script>

<template>
  <component
    :is="href ? RouterLink : 'button'"
    v-bind="$attrs"
    class="btn-men"
    :class="{ primary: primary, secundary: !primary }"
    :disabled="loading"
    :to="href"
  >
    <icon-men v-if="icon" :name="icon" class="me-2" />
    {{ label }}
    <icon-men v-if="loading" name="loading_men" class="spin" />
  </component>
</template>

<style lang="scss">
@use '../../scss/variables' as *;

.btn-men {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  font-weight: 600;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  vertical-align: middle;

  border: 1px solid transparent;
  border-radius: 8px;

  transition: all 0.15s ease-in-out;

  &.primary {
    background: $color-primary;
    color: $color-white;
  }

  &.secundary {
    background: transparent;
    border: 1.5px solid $color-primary-50;
    color: $color-primary-50;
  }

  /*****************
  * Spin animation *
  *****************/
  & .spin {
    width: 24px;
    height: 24px;

    animation-name: rotate;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
