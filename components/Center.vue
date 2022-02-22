<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Center',
}
</script>

<style scoped>
div {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
