import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js"; 

Vue.use(Vuex); // tells Vue to action with Vuex

export default new Vuex.Store({
  state: { 
    weather: {},
    dataIsRecived: false
  },

  mutations: { // the state changes here
    UPDATE_WEATHER(state) {
      service
        .getWeather() // call the function from service.js that returns the data from API
        .then(response => {
          state.weather = response.data; // set weather obj in state to real weather obj
          state.dataIsRecived = true; // mark that data was recived
          console.log(state.weather.main)
        })
        .catch(error => { // if there was an error
          console.log("There was an error:", error.response); // log it
          state.dataIsRecived = false; // and mark that data wasn't recived
        });
    }
  },
  actions: { // call mutations that change the state here
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    }
  }
});
