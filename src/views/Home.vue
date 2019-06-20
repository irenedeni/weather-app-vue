<template>
  <div class="home">
    <WeatherWidget />
    <CityWidget />
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget.vue'; 
import CityWidget from '@/components/CityWidget.vue'; 


export default {
  name: "home",
  components: { 
    CityWidget,
    WeatherWidget
  }
}
</script>

<style lang="scss" scoped> 
  .home {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
