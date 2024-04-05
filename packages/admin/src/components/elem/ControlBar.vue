<template>
  <div id="control-bar">
    <slot></slot>
  </div>
</template>

<style scoped>
#control-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 10px 0;
  /* margin-bottom: 10px; */
  /* border-bottom: 1px solid #e9e9e9; */
}
</style>
