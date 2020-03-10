<template>
  <div id="app">
    <Home />
    <Menu />
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Menu,
    Footer,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #597306;
}
</style>
