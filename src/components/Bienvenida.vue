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
 <div class="col  m-5 ">
 <h3>Welcome to Starwars</h3>
 <div class="h4 pb-2 mb-4  border-bottom border-secondary text-primary" style="--bs-text-opacity: .5"></div></div>
      <h5>Can you see the starwars ships?</h5>
   
  <br>
  <br>
  
    <router-link class="router-link" :to="{ name: 'starShips'}">click to see the starships </router-link>
   
    <router-view/>
    </div> 
  </template>
  
  <style scoped>


#bienvenida {
min-height: 100%;
min-width: 100%;
text-align: center;
}


h5{
  text-align: center;
 
}
.router-link-active{
  color: white;
  font-size:smaller;
  font-weight: bold;
}


.router-link:link{  color:  white;
  font-size:smaller;
  font-weight: bold;
  }


</style>





  
 

  
  
  
  

