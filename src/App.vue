<template>
  <div class="app_body">
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
body {
  text-align: center;
},
input[type=text] {
  width: 96%;
  border-radius: 4px;
  border: none;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  margin-bottom: 10px;
  padding: 5px;
}
a, 
a:hover,
a:focus,
a:visited {
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 6px;
  background-color: #026aa7;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.navbar > .logo {
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: rgba(0,0,0,0);
  color: rgba(255,255,255, .4);
}
.navbar > .right {
  position: absolute;
  right: 10px;
}
.navbar-menu-link {
  display: inline-block;
  padding: 5px 10px;
  background: rgba(255,255,255,.5);
  border-radius: 3px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.container {
  margin-top: 43px;
  padding: 5px 20px 60px;;
}
.title {
    padding: 15px 0;
}
.btn {
  padding: 4px 16px;
  min-height: 32px;
  vertical-align: top;
  border: none;
  border-radius: 4px;
}
.btn-success {
  background-color: #5aac44;
  box-shadow: 0 1px 0 #519839;
  color: white;
}
.text-white {
  color: #ffffff;
}
.text-grey {
  color: #838c91;
}
.text-darkgrey {
  color: #4d4d4d;
}
</style>