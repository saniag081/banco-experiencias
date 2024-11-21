<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  primary: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: '',
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
      <span v-if="mandatory && label">{{ label }} <i>*</i></span>
      <span v-if="!mandatory && label">{{ label }}</span>
      <input type="text" :placeholder="placeholder" class="mt-2" :class="{ secundary: !primary }" />
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

  .secundary {
    padding: 10px 12px;
    color: $color-geray-30;
    border: none;
    border-bottom: 2px solid $color-red;
    border-radius: 0px;
    background-color: $color-gray-50;
  }
}
</style>
