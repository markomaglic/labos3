<template>
  <div id="nav">
    <router-link to="/">Weather</router-link> |
    <router-link to="/about">About and functionalities</router-link> |
    <router-link to="/report">Weather Report</router-link> |
    <router-link to="/components">Stateless and component with state</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #251717;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #0faed6;
}

div.nav
{
  font-size: 20px;
}
</style>
