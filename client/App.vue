<template lang="pug">
  div(id="app")
    img(src="@/assets/logo.png", alt="Vue logo")
    h2 Test route
    ul
      li: router-link(to="/") Main (vue)
      li: router-link(to="/error404") Error (vue)
      li: a(href="/wi-test") WebInterface page (vibe)
      li: router-link(to="/calc") Calculator (vue + vibed with generated REST API)
    router-view
</template>

<script>

export default {
  name: 'App',
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  max-width: 600px;
  margin: 0 auto 10px;
}
li {
  display: inline-block;
  margin: 0 10px 10px;
}
a {
  color: #42b983;
}
</style>
