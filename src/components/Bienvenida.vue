<template>
  <div id="bienvenida" class="container justify-content-center">
 <div><menuCabecera/></div>
   
    <h1>   Welcome to STARWARS </h1>
  <br>
  <br>
   <button class= "btn p-2 mb-2 text-warning bg-dark">
    <router-link :to="{ name: 'starShips'}">click to see the starships </router-link>
    </button> <router-view/>
    </div> 
  </template>

<script>
import menuCabecera from '@/components/MenuCabecera.vue'

export default {
  name: 'bienvenida',
  components: {
    menuCabecera}
 }
</script>

<style>

body {
   background-color:#0f0f0f;
   text-align: left;
   color: rgb(204, 191, 75);
}

</style>






  
 

  
  
  
  

