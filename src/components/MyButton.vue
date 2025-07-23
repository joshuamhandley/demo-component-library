<template>
  <button class="my-button" @click="$emit('click')">
    <slot>Click Me</slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.my-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
.my-button:hover {
  background-color: #368a68;
}
</style>
