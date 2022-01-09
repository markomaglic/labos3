<template>
  <div class="about">
    <h1> Croatian region weather app. </h1>
    <p> 
      This is an app that shows current temperatures in major cities in Croatia. 
      The temperatures are randomized just for the sake of functionality.
    </p>
  </div>
  <div id="time_temp">
    <p class ="time" v-show="time"><strong>Time:</strong> {{ time }}</p>
    Temperature in C:
    <input v-model="temp"/>
    <p>Temperature in F: {{ tempF }}</p>
  </div>
  <div>
    <color-changer></color-changer>
  </div>
  <div>
    {{ $store.getters.storeExample }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      time: null,
      temp: 0
    }
  },
  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },
  computed: {
    tempF: function () {
      return this.temp * (9/5) + 32
    }
  }
}
</script>

<style scoped>
  div
  {
  text-align: left;
  padding-left:40px;
  padding-bottom: 15px;
  }
  p
  {
    padding-bottom: 10px;
    padding-top: 10px;
  }
</style>
