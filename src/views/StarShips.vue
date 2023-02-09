<template>
<div class="container justify-content-center">
  <div><menuCabecera/></div>
  
    <div class="list-group bg-dark">
      <h1>STARSHIPS</h1>
    <button @click="getShips" class= "btn p-2 mb-2 text-warning bg-dark">Get Ships</button>


   
 
  <router-link :to="{ name:'cardDetail', params:{ id :index  },  }"
  v-for="(starship, index) of starships.results" :key="index">
    <button class= "btn p-2 mb-3  text-light bg-dark"> SHIP: {{ starship.name }} MODEL: {{ starship.model }}</button>
    </router-link> 
  
  
     </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapActions,  } from 'vuex'
import menuCabecera from '@/components/MenuCabecera.vue'
import bienvenida from '@/components/Bienvenida.vue'

export default {
  name: 'starShips',
  components: {
    bienvenida,
    menuCabecera,
  
    },

 /* created() {
    const url=('https://swapi.dev/api/starships/?result=7')
    const peticion=fetch(url)
    peticion
    .then(response => response.json())
    .then(starships=> {console.log (starships)})
    .catch(()=> console.log("Se ha producido un error"))
  },*/
 

computed: {
    ...mapState(['starships'])
},
methods: {
    ...mapActions(['getShips']),

   
}}
</script>

<style>
.router-link-active{
  color: rgb(218, 182, 25)
}
.router-link{
  color: rgb(207, 88, 19)
}
</style>