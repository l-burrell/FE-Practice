<template>
  <nav>
    <div id='logo'>Coffee</div>
    <ul>
      <li><a href="#">Flavors</a></li>
      <li><a href="#">Sweeteners</a></li>
      <li><a href="#">Reviews</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  color: grey;
  font-size: 20px;
  justify-content: space-between;
  margin: auto;
  max-width: 1500px;
}
ul li {
  display: inline-block;
  margin: 0 10px;
}
ul li a {
  text-decoration: none;
  color: grey;
}
#logo {
  margin: 20px 10px;
  padding: 0;
}

</style>