<template lang="pug">
  mixin a(link, name)
    a(href=link, target="_blank" rel="noopener")=name

  div.hello
    h1 {{ msg }}
    p.
      Example of Dlang Vibe.d plus Vue.js application
    h3 Helpful information
    ul
      li: +a("https://dlang.org", "Dlang")
      li: +a("https://vibed.org", "Vibe.d")
      li: +a("https://vuejs.org", "Vue.js")

</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        default: "Welcome to DVpV App"
      }
    }
  }
</script>
