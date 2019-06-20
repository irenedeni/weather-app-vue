import axios from "axios";
import { currentWeather } from "@/constants"; 


const apiClient = axios.create({ 
  baseURL: currentWeather,
  withCredentials: false, 
  headers: { 
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getWeather() { 
    return apiClient.get();
  }
}
