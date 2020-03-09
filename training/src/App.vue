<template>
  <div id="app">
    <Navigation />
    <Home />
    <Blog />
  </div>
</template>

<script>
import Home from "./components/Home";
import Blog from "./components/Blog";
import Navigation from './components/Navigation';

export default {
  name: "App",
  components: {
    Home,
    Blog,
    Navigation,

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
</style>
