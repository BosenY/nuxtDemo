<template>
<div class="container">
  <p>这里是一个子页面</p>
  <p>{{name}}</p>
  <nuxt-link class="button" to="/">
    Home page
  </nuxt-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data({req}) {
            return {
                name: req ? 'server' : 'client'
            }
        },
          // fetch(context) is called by the server-side
        // and nuxt before instantiating the component

    }
</script>

<style scoped>
    .button {
        margin-top: 50px;
    }
    
    .container {
        margin: 20px;
    }
</style>