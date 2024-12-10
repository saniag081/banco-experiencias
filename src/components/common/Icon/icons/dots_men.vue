<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 2.66663C9 3.21891 8.55228 3.66663 8 3.66663C7.44772 3.66663 7 3.21891 7 2.66663C7 2.11434 7.44772 1.66663 8 1.66663C8.55228 1.66663 9 2.11434 9 2.66663Z"
      :fill="color[0]"
    />
    <path
      d="M9 7.99996C9 8.55224 8.55228 8.99996 8 8.99996C7.44772 8.99996 7 8.55224 7 7.99996C7 7.44767 7.44772 6.99996 8 6.99996C8.55228 6.99996 9 7.44767 9 7.99996Z"
      :fill="color[0]"
    />
    <path
      d="M8 14.3333C8.55228 14.3333 9 13.8856 9 13.3333C9 12.781 8.55228 12.3333 8 12.3333C7.44772 12.3333 7 12.781 7 13.3333C7 13.8856 7.44772 14.3333 8 14.3333Z"
      :fill="color[0]"
    />
  </svg>
</template>

<script>
export default {
  name: 'dots_men',
  props: {
    color: {
      type: Array,
      default: () => ['black'],
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
