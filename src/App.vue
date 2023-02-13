<script lang="ts">
import AuthForm from "./components/AuthForm.vue";
import axios from "axios";

export default {
  components: { AuthForm },
  data() {
    return {
      forecasts: [] as any[]
    }
  },
  async created() {
    const response = await axios.get('http://localhost:5260/WeatherForecast')
    this.forecasts = response.data
  }
};
</script>

<template>
  <AuthForm />
  <div>
    <ul v-for="forecast in forecasts" :key="forecast.date">
      <li>{{ forecast.date }}: {{ forecast.temperatureC }}°C</li>
    </ul>
  </div>
</template>

<style scoped>

</style>
