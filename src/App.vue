<template>
  <div class="app_body">
    <img alt="Vue logo" src="./assets/logo.png">
    <NavBar />
    <router-view />
   </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  .app_body {
    text-align: center;
  }
</style>