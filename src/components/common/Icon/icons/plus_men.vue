<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 32 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 6C17 5.44772 16.5523 5 16 5C15.4477 5 15 5.44772 15 6V13H8C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H15V22C15 22.5523 15.4477 23 16 23C16.5523 23 17 22.5523 17 22V15H24C24.5523 15 25 14.5523 25 14C25 13.4477 24.5523 13 24 13H17V6Z"
      :fill="color[0]"
    />
  </svg>
</template>

<script>
export default {
  name: 'arrow_left',
  props: {
    color: {
      type: Array,
      default: () => ['#344054'],
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
