import { createStore } from "vuex";

export default createStore({
  state: {
    allWeather: [],
    example: "Example for using store."
  },
  mutations: {},
  getters: {
    allWeather(store) {
      return store.allWeather || [];
    },
    getWeatherById: (state, getters) => (id) => {
      return getters.allWeather.find(weather => weather.id === id);
    },
    storeExample(store) {
      return `${store.example}`;
    }
  },
  actions: {},
  modules: {},
});
