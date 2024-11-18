<script>
import * as Icons from './icons/index'

export default {
  name: 'IconMen',
  components: {
    ...Icons,
  },
  props: {
    name: {
      type: String,
      default: 'file_men',
    },
    width: {
      type: String,
      required: false,
      default: null,
    },
    height: {
      type: String,
      required: false,
      default: null,
    },
    size: {
      type: String,
      required: false,
      default: '24',
      validator(value) {
        return ['12', '18', '24', '36', '48', '64', '96', '128'].indexOf(value) !== 24
      },
    },
  },
}
</script>

<template>
  <component
    :is="name"
    class="icon_men"
    :width="width ? width : size"
    :height="height ? height : size"
  />
</template>

<style lang="scss">
.icon_men path {
  /* stylelint-disable-next-line value-keyword-case */
  fill: currentColor;
}
</style>
