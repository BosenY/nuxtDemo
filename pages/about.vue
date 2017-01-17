<template>
  <section class="container">
    <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <el-button type="primary" @click="increment">{{ counter }}</el-button><br>
    <h2 class="info" v-if="name === 'client'">
      Please refresh the page
    </h2>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
  </section>
</template>
<script>
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        data({
            req
        }) {
            return {
                name: req ? 'server' : 'client'
            }
        },
        head() {
            return {
                title: `About Page (${this.name}-side)`
            }
        },
        computed: {
            ...mapGetters([
                'counter'
            ])
        },
        methods: {
            ...mapActions([
                'increment'
            ])
        }
    }
</script>

<style scoped>
    .title {
        margin-top: 50px;
    }
    
    .info {
        font-weight: 300;
        color: #9aabb1;
        margin: 0;
        margin-top: 10px;
    }
    
    .button {
        margin-top: 50px;
    }
</style>