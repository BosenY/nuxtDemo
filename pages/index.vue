<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <button @click="increment">{{ counter }}</button><br>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
    <nuxt-link class="button" to="/children/child1">
      跳转到child1  2333s
    </nuxt-link>
  </section>
</template>

<style scoped>
    .title {
        margin: 50px 0;
    }

    .button {
        margin-top: 50px;
        margin-left: 20px;
    }
</style>
<script>
import { mapState } from 'vuex'

export default {
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch ({ store }) {
    store.commit('increment')
  },
  computed: mapState([
    'counter'
  ]),
  methods: {
    increment () { this.$store.commit('increment') }
  }
}
</script>
