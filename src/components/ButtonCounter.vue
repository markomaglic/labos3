<template>
  <p>Example of component using state and not parameters.</p>
  <button v-on:click="count++">You clicked me {{ count }} times.</button>
</template>


<script>
export default {
  data: function () {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped>
div {
  text-align: left;
  padding-left: 40px;
}
p {
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>
