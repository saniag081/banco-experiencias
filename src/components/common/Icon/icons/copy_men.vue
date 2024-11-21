<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5 2C12.2909 2 10.5 3.79086 10.5 6V8H6.5C4.29086 8 2.5 9.79086 2.5 12V18C2.5 20.2091 4.29086 22 6.5 22H10.5C12.7091 22 14.5 20.2091 14.5 18V16H18.5C20.7091 16 22.5 14.2091 22.5 12V6C22.5 3.79086 20.7091 2 18.5 2H14.5ZM14.5 14H18.5C19.6046 14 20.5 13.1046 20.5 12V6C20.5 4.89543 19.6046 4 18.5 4H14.5C13.3954 4 12.5 4.89543 12.5 6V8.53513C13.6956 9.22675 14.5 10.5194 14.5 12V14ZM4.5 12C4.5 10.8954 5.39543 10 6.5 10H10.5C11.6046 10 12.5 10.8954 12.5 12V18C12.5 19.1046 11.6046 20 10.5 20H6.5C5.39543 20 4.5 19.1046 4.5 18V12Z"
      :fill="color[0]"
    />
  </svg>
</template>

<script>
export default {
  name: 'copy_men',
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
