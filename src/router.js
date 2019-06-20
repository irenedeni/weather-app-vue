import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue"; 

Vue.use(Router); // tells Vue to action with Router

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [ 
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/why",
      name: "why",
      component: () =>
        import("./views/Why.vue")
    }
  ]
});
