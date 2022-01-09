<template>
  <div v-if="selectedWeather">
    Weather #{{ id }}
    <weather-card
      :key="selectedWeather.id"
      v-bind="selectedWeather"
    ></weather-card>
  </div>
  <div v-else>
    <h2>Weather in big cities in Croatia.</h2>
    <div>
      <!-- <weather-card id=1 name="Zagreb" temp=20></weather-card> -->
      <h2>Welcome, {{ user }}!</h2>
      <p>Please write your name to test two-way binding.</p>
      <input v-model="user" />
      <p>One Way binding with input box <input type="text" :value="user" /></p>
      <p>One Way binding as text {{ user }}</p>
      <weather-card
        v-for="weather in allWeather"
        :key="weather.id"
        v-bind="weather"
      ></weather-card>
    </div>
  </div>
  <div class="weather-table">
    <div class="column">
      Zagreb
      <p>{{ time }}</p>
      <p id="temp"> 1℃ </p>
    </div>
    <div class="column">
      Split
      <p>{{ time }}</p>
      <p id="temp"> 7℃ </p>
    </div>
    <div class="column">
      Rijeka
      <p>{{ time }}</p>
      <p id="temp"> 6℃ </p>
    </div>
    <div class="column">
      Zadar
      <p>{{ time }}</p>
      <p id="temp"> 4℃ </p>
    </div>
  </div>
  <div class="weather-table">
    <div class="column">
      Dubrovnik
      <p>{{ time }}</p>
      <p id="temp"> 9℃ </p>
    </div>
    <div class="column">
      Gospic
      <p>{{ time }}</p>
      <p id="temp"> -3℃ </p>
    </div>
    <div class="column">
      Osijek
      <p>{{ time }}</p>
      <p id="temp"> -2℃ </p>
    </div>
    <div class="column">
      Pula
      <p>{{ time }}</p>
      <p id="temp"> 2℃ </p>
    </div>
  </div>
</template>

<script>
import WeatherCard from '../components/WeatherCard.vue';
export default {
  components: { WeatherCard },
  props: ["id"],
  name: "DateComponent",
  data: () => ({
    time: "",
    selectedWeather: null,
    user: "user",
    routeChanges: []
  }),
  methods: {
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
  },
  computed: {
    allWeather() { 
      return this.$store.getters.allWeather;
    }
  },
  watch: {
    $route(to, from) {
      this.routeChanges.push(`Route changed: ${from.path} -> ${to.path} `);
      this.selectedWeather = this.allWeather.find( x => x.id == this.$route.params.id);
    },
  },
  mounted: function () {
    this.time = this.printTime();
  },
};
</script>

<style>
.column {
  display: inline-block;
  width: 360px;
  height: 360px;
  border: 1px solid rgb(0, 0, 0);
  background: transparent url("../assets/weather.png");
  opacity: 0.8;
}
.weather-table {
  padding-top: 40px;
  padding-bottom: 40px;
}
.time {
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
}
#temp
{
  text-align: bottom;
  font-size: 20px;
  padding-top: 230px;
}
</style>
