<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'label',
  },
  placeholder: {
    type: String,
    default: 'placeholder',
  },
  mandatory: {
    type: Boolean,
    default: false,
  },
})

const { label, placeholder, mandatory } = toRefs(props)
</script>

<template>
  <div class="men-input">
    <label class="d-flex flex-column">
      <span v-if="mandatory">{{ label }} <i>*</i></span>
      <span v-if="!mandatory">{{ label }}</span>
      <input type="text" :placeholder="placeholder" class="mt-2" />
    </label>
  </div>
</template>

<style lang="scss">
@use '../../scss/variables' as *;

.men-input {
  span {
    color: $color-blue-10;
    font-size: 14px;

    i {
      color: $color-red-10;
    }
  }

  input {
    padding: 18px 12px;
    border: 1px solid $color-geray-30;
    color: $color-geray-30;
    background: $color-white;
    border-radius: 6px;
  }
}
</style>
