<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
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

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="men-input">
    <label class="d-flex flex-column">
      <span v-if="mandatory && label">{{ label }} <i>*</i></span>
      <span v-if="!mandatory && label">{{ label }}</span>
      <textarea
        :placeholder="placeholder"
        class="mt-2"
        :value="modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
        v-bind="$attrs"
      ></textarea>
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

  textarea {
    padding: 16px;
    border: 1px solid $color-geray-30;
    color: $color-geray-30;
    background: $color-white;
    border-radius: 6px;
  }
}
</style>
