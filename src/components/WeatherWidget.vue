<template>
  <div>
    <div v-if="this.$store.state.dataIsRecived" class="weather-widget">     
      <p class="weather-widget__city">{{ weather.name }}</p>
      <p class="weather-widget__description">{{ weather.weather[0].description }}</p>
      <h2 class="weather-widget__temp">{{(weather.main.temp -273.15).toFixed(1)}}<span>°C</span></h2>
      <p class="weather-widget__status">the average humidity is {{ weather.main.humidity }} %</p>
    </div>
    <div v-else class="weather-widget"> 
      <img src="spinner.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      weather() {
        return this.$store.state.weather // gets weather state from Vuex store
      }
    },
    created() {
      this.$store.dispatch("updateWeather"); // dispatch "updateWeather" when component is created
    }
  }
</script>

<style lang="scss" scoped>
  .weather-widget {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #429EA6;
    padding: 10vh;
    border-radius: 24px;
  }

  .weather-widget__city {
    font-size: 50px;
    margin: 0;
  }

  .weather-widget__temp {
    display: flex;
    align-items: flex-start;
    color: #16F4D0;
    font-size: 200px;
    font-weight: 200;
    margin: 0;

    span {
      font-size: 30px;
      font-weight: 400;
      margin-top: 35px;
    }
  }

 .weather-widget__description {
    font-size: 20px;
    margin: 0;
    color: rgb(21, 80, 74);
  }

  .weather-widget__status {
    font-size: 20px;
    margin: 0;
  }
</style>
