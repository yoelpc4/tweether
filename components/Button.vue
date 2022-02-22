<template>
  <button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped>
button {
  background-color: #eeebf5;
  border: none;
  border-radius: 22px;
  font-size: 16px;
  font-weight: 500;
  color: #6b6b8e;
  padding: 13px 28px;
  text-align: center;
  cursor: pointer;
}

button:focus {
  outline: none;
}

button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
