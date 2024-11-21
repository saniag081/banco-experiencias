<template>
  <div
    class="switch-container"
    :class="{ 'switch-on': modelValue }"
    @click="toggleSwitch"
    role="switch"
    :aria-checked="modelValue"
    tabindex="0"
    @keydown.space.prevent="toggleSwitch"
    @keydown.enter.prevent="toggleSwitch"
  >
    <div class="switch-handle"></div>
  </div>
</template>

<script>
export default {
  name: 'SwitchToggle',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    toggleSwitch() {
      this.$emit('update:modelValue', !this.modelValue)
    },
  },
}
</script>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.switch-container {
  width: 39px;
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
}
.switch-container.switch-on {
  background-color: $color-primary-50;
}
.switch-handle {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  top: 2px;
  transition: transform 0.3s ease;
}
.switch-container.switch-on .switch-handle {
  transform: translateX(15px);
}
</style>
