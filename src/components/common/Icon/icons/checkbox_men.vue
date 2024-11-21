<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11.25" fill="white" stroke="#F56630" stroke-width="1.5" />
    <circle cx="12" cy="12" r="6" :fill="color[0]" />
  </svg>
</template>

<script>
export default {
  name: 'arrow_left',
  props: {
    color: {
      type: Array,
      default: () => ['#F56630'],
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
}
</script>
