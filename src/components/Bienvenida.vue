<script >
import cabecera from '@/components/Cabecera.vue'

export default {
  name: 'bienvenida',
  components: {
    cabecera}
 }
</script>

<template>
  <div id="bienvenida" class="container justify-content-center">
 <div><cabecera/></div>
   
    <h1>   Welcome to STARWARS </h1>
  <br>
  <br>
   <button class= "btn p-2 mb-2 text-warning bg-dark">
    <router-link :to="{ name: 'starShips'}">click to see the starships </router-link>
    </button> <router-view/>
    </div> 
  </template>



<style>

body {
   background-color:#212529;
   text-align: left;
   color: rgb(204, 191, 75);
}

</style>






  
 

  
  
  
  

