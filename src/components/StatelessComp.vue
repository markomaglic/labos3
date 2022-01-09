<template>
  <button>Stateless component</button>
</template>

<script>
export default {
  functional: true,
  render(createElement) {
    return createElement("button", "This is an example of an stateless component");
  },
};
</script>

