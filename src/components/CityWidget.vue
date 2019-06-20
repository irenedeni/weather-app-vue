<template>
  <div>
    <div v-if="this.$store.state.dataIsRecived" class="weather-input"> 
          <p class="weather-input__text">Choose a city and look up the weather!</p>
          <input v-model="selectedCity" name="city" type="text" placeholder="change city" class="weather-input__field">
          <input class="weather-input__button" type="submit" value="Get weather" v-on:click="newCity()">
        {{this.selectedCity}}
    </div>
    <div v-else class="weather-widget"> 
      <img src="spinner.svg" alt="">
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import { apiKey } from "@/constants"; 


  export default {
    data: function () {
    return {
      selectedCity: null
    }
  },
    computed: {
      weather() {
        return this.$store.state.weather // gets weather state from Vuex store
      }
    },
    created() {
      this.$store.dispatch("updateWeather"); // dispatch "updateWeather" when component is created
    },
    methods: { 
      newCity() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.selectedCity}&?units=metric&appid=${apiKey}`)
        .then(response => {
          // state.weather = response.data; // sets weather obj in state to real weather obj
          // state.dataIsRecived = true; // marks that data was recived
          console.log(response.data)
        })
        .catch(error => { 
          // eslint-disable-next-line
          console.log("There was an error:", error.response); // log it
          state.dataIsRecived = false; // and mark that data wasn't recived
        });
          // .finally(function () {
          //   // always executed
          // });
       console.log(this.selectedCity)

      },
    },
}

</script>

<style lang="scss" scoped>
  .weather-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #429EA6;
    color: #ffffff;
    padding: 40px;
    margin-top: 10vh;
    border-radius: 0.5vh;
  }

  .weather-input__text {
    font-size: 20px;
    margin: 0;
  }
  .weather-input__field {
    font-size: 20px;
    border: none;
    margin-top: 20px;
    padding: 3%;
    border-radius: 0.5vh;
  }
  .weather-input__field:focus {
    outline-color: none;
  }
  .weather-input__button {
    background-color: white;
    border: none;
    font-size: 15px;
    font-weight: 300;
    padding: 3%;
    border-radius: 10vh;
    margin-left: 2.5vh;
    margin-top: 2vh;
  }
  .weather-input__button:hover {
    background-color: rgb(19, 44, 46);
    color: white;
  }
</style>
