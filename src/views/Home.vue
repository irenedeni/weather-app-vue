<template>
  <div class="home">
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from '@/components/WeatherWidget.vue'; 

export default {
  name: "home",
  components: { 
    WeatherWidget
  }
}
</script>

<style lang="scss" scoped> 
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
