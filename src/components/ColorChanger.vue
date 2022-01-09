<template>
  Click me to change colors and dimension!
  <button
    v-bind:class="{ black: !clicked, blue: clicked }"
    v-on:click="clicked = !clicked"
  ></button>
</template>

<script>
export default {
  data: () => ({
    clicked: false,
  }),
};
</script>

<style>
.black {
  background-color: black;
  width: 100px;
  height: 100px;
}
.blue {
  width: 200px;
  height: 200px;
  background-color: blue;
}
</style>