<template>
  <div class="card mt-2 mr-2" style="width: 230px">
    <router-link :to="'/weather/' + id" class="mr-3">
      <img class="card-img-top" style="width: 190px" :src="image" />
    </router-link>
    <div class="card-body">
      <h5>{{ name }} </h5>
      <p>{{ temp }}</p>
      <!-- <a :href="url" target="_blank" class="card-link">
        <span class="badge badge-success">{{ url.substring(0, 20) }}...</span>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "temp", "image"],
  computed: {
    idUrl() {
      return "/weather" + this.id;
    },
  },
};
</script>
<style>
</style>