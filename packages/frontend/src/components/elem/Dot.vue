<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: '#000000',
  },
})
</script>

<template>
  <svg
       width="16"
       height="16"
       viewBox="0 0 16 16"
       version="1.1"
       id="svg1"
       xmlns="http://www.w3.org/2000/svg"
       xmlns:svg="http://www.w3.org/2000/svg">
    <defs
          id="defs1" />
    <g
       id="layer1">
      <circle :style="{ fill: color }"
              style="stroke-width:1.6292"
              id="path1"
              cx="8"
              cy="8"
              r="8" />
    </g>
  </svg>
</template>
