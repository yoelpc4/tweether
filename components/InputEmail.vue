<template>
  <div>
    <label>
      {{ title }}
    </label>

    <input type="email" :value="value" v-bind="$attrs" v-on="listeners" />
  </div>
</template>

<script>
import input from '~/mixins/input'

export default {
  name: 'InputEmail',

  mixins: [input],

  props: {
    title: {
      required: true,
      type: String,
    },
    value: {
      default: null,
      type: String,
    },
  },
}
</script>

<style scoped>
div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  margin: 0 -14px;
  padding: 0 14px;
}

div:first-of-type {
  border-top: 1px solid rgba(0, 0, 0, 0.13);
}

label {
  font-size: 13px;
  color: rgba(81, 81, 112, 0.66);
  text-transform: uppercase;
  display: block;
  margin-top: 8px;
}

input {
  width: 100%;
  box-sizing: border-box;
  font-size: 17px;
  padding-top: 8px;
  padding-bottom: 13px;
  border: none;
}

input:focus {
  border: none;
  outline: none;
}
</style>
