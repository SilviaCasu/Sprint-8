<script>
import { mapState, mapActions  } from 'vuex'



export default {
name: 'cardPilots',
components: {
   
},
data() {
  return {
    name:'',
    
  }
 },
computed: {
    ...mapState(['starships','pilot', 'urlPilot', 'name'])
},

pilotsList (){
  return getPilot(urlPilot);
},

methods: {
    ...mapActions(['getShips','getPilot']),
    

   
}

}
</script>


<template> 

<div class="card bg-white m-5  " style="max-width: 300px;">
 
<div class="card-body text-dark">
  <div class="row g-0">
        <div class="col-md-4">
          <img src="@/assets/pilota.png" class="img-fluid rounded-start" alt="...">
        </div>
<h5 class="card-title"> RELATED PILOTS: 
  
  <div  v-for="(urlPilot, index) of starships.results[$route.params.id].pilots" :key="index">
  <p class="card-text">{{getPilot(urlPilot)}}  </p> 
   
    </div>
   
    </h5>


</div>
</div>
   </div>
   
     
           
    
</template>