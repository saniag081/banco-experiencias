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
})

const { label, icon, href } = toRefs(props)
</script>

<template>
  <component
    :is="href ? RouterLink : 'button'"
    v-bind="$attrs"
    class="btn-men"
    :class="{ primary: primary, secundary: !primary }"
    :to="href"
    @click="
      (event) => {
        $emit('click')
        event.target.focus()
      }
    "
  >
    <icon-men v-if="icon" :name="icon" class="me-2" />
    {{ label }}
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
}
</style>
