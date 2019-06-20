import Vue from "vue";
import Vuex from "vuex";

import service from "@/services/service.js"; 
import { currentWeather } from "@/constants"; 


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
          state.weather = response.data; // sets weather obj in state to real weather obj
          state.dataIsRecived = true; // marks that data was recived
        })
        .catch(error => { 
          // eslint-disable-next-line
          console.log("There was an error:", error.response); // log it
          state.dataIsRecived = false; // and mark that data wasn't recived
        });
    },
  },
  actions: { // here we call mutations that change the state 
    updateWeather(context) {
      context.commit("UPDATE_WEATHER");
    }
  }
});
