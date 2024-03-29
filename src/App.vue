<template>
  <!--<div class="nav-bar">
    <Navigation />
  </div>
 <div class="app">  
  <div class="home">
    <Home />
  </div>
 </div>-->
 <div class="app">
  <newHome />
 </div>
 
</template>

<script setup>

import newHome from './components/newHome.vue'
</script>

<style lang="scss">
:root{
  --bg-color:#080808;
  --text-color:#fff;
  --main-color:#028062;
  --bif-font:6rem;
  --p-font:1.1rem;
}
body {
  margin: 0;
  padding: 0;
  overflow-x:hidden;
  background-color: rgb(16, 15, 15);
}
.app{
  max-height: 10000vh;
  position: relative;
  width: 100%;
  border: 2px solid black;
}


</style>
