import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import WeatherCard from './components/WeatherCard.vue';
import ButtonCounter from './components/ButtonCounter.vue'
import ColorChanger from './components/ColorChanger.vue'
import StatelessComp from './components/StatelessComp.vue'

const ReportComponent = defineAsyncComponent(() => import('./components/ReportComponent.vue'));

const app = createApp(App);
app.use(store);
app.use(router);

app.component('weather-card', WeatherCard);
app.component('report-component', ReportComponent);
app.component ('button-counter', ButtonCounter);
app.component('color-changer', ColorChanger);
app.component('stateless-component', StatelessComp);
app.mount("#app");
