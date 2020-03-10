<template>
  <div id="app">
    <Home />
    <Menu />
    <Mix />
    <Specials />
    <Newsletter />
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Mix from './components/Mix.vue'
import Specials from './components/Specials.vue'
import Newsletter from './components/Newsletter.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Menu,
    Mix,
    Specials,
    Newsletter,
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
