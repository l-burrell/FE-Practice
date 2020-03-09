<template>
  <div id="app">
    <Navigation />
    <Welcome />
    <h2>Take a sip of this!</h2>
    <Flavors />
    <div class="color">
      <h2>Need to sweeten the deal?</h2>
      <Sweeteners />
    </div>
    <h2>Heres what others are saying</h2>
    <Reviews />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Welcome from "./components/Welcome.vue";
import Flavors from './components/Flavors.vue';
import Sweeteners from './components/Sweeteners.vue';
import Reviews from './components/Reviews.vue';

export default {
  name: "App",
  components: {
    Navigation,
    Welcome,
    Flavors,
    Sweeteners,
    Reviews,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
section {
  margin: 20px;
  padding: 30px;
  height: 40vh;
}
h2 {
  font-size: 50px;
}
.color {
  background-color: hsl(110, 80%, 80%);
}
div {
  margin: 0;
  padding: 10px 0;
}
</style>
