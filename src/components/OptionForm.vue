<script setup>
import { toRefs } from 'vue'
import IconMen from '@/components/common/Icon/IconMen.vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

const { icon, label } = toRefs(props)
</script>

<template>
  <div class="options-form d-flex flex-column justify-content-center align-items-center">
    <span class="mb-3">
      <icon-men :name="icon" />
    </span>
    <p class="mb-0">{{ label }}</p>
  </div>
</template>

<style lang="scss">
@use '../scss/variables' as *;

.options-form {
  width: 170px;
  height: 143px;
  border: 1px solid $color-gray;
  border-radius: 10px;
  cursor: pointer;

  span {
    display: inline-block;
    padding: 16px;
    background-color: $colot-primary-10;
    border-radius: 8px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
  }
}
</style>
