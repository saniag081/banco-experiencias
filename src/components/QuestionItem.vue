<script setup>
import { toRef, toRefs, defineEmits, watch } from 'vue'
import IconMen from './common/Icon/IconMen.vue'
import InputText from './common/InputText.vue'
import SwitchMen from './SwitchMen.vue'

const mandatory = toRef(false)

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const { id } = toRefs(props)

const emit = defineEmits(['delete-item', 'mandatory'])

watch(mandatory, (newValue) => {
  emit('mandatory', { id: id.value, mandatory: newValue })
})
</script>

<template>
  <div class="item-form position-relative">
    <div class="d-flex align-items-center">
      <icon-men name="drag_indicator" class="me-3" />
      <div class="w-100">
        <div class="justify-content-end d-flex">
          <p class="me-3">Obligatorio</p>
          <switch-men v-model="mandatory" />
        </div>
        <div>
          <input-text class="w-100" :primary="false" />
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="item-form_options d-flex flex-column">
      <span>
        <icon-men name="copy_men" />
      </span>
      <span>
        <icon-men name="delete_men" @click="emit('delete-item', id)" />
      </span>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/variables' as *;

.item-form {
  padding: 32px;
  padding-left: 19px;
  background-color: $color-white;
  border: 2px solid $color-white;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid $color-primary-50;
  }

  p {
    color: $color-blue-20;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 26px;
  }

  &_options {
    padding: 16px 8px;
    background-color: $color-white;
    position: absolute;
    right: -74px;
    top: 0px;
    border-radius: 100px;

    span:last-child {
      color: #921803;
    }

    span {
      padding: 8px;
      border: 1px solid $color-gray;
      border-radius: 100%;
    }
  }
}
</style>
