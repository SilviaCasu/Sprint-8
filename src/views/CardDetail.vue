<script>
import { mapState, mapActions  } from 'vuex'


import cabecera from '@/components/Cabecera.vue';
import cardPilots from '@/views/CardPilots.vue';

export default {
name: 'cardDetail',
components: {
   cabecera,
cardPilots,
   
},
computed: {
    ...mapState(['starships','pilot'])
},
methods: {
    ...mapActions(['getShips','getPilot']),
    

   
}

}
</script>


<template> 
<div>
    <div class="cabecera"><cabecera/></div>
    <div class="container " >
  <div class="row bg-dark mt-5">
 
    <div class ="col-1" >   <button class= "btn  btn-warning p-2 btn-md" @click="$router.go(-1), $event='showNav'">Back</button></div>
    <div class ="col-11">
      <div class="card_detail ">
      <div class="container justify-content-center bg-dark">
      <div class="card bg-white   " style="max-width: 90%;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="https://starwars-visualguide.com/assets/img/starships/5.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-4">
          <div class="card-body text-dark">
            <h5 class="card-title"> Name: {{starships.results[$route.params.id].name}} </h5>
                <div class="card-text"><small class="text-muted"> Model: {{starships.results[$route.params.id].model}} </small></div>  
                <div class="card-text"><small class="text-muted">Manufacturer : {{starships.results[$route.params.id].manufacturer}} </small></div> 
                <div class="card-text"><small class="text-muted"> Class:   {{starships.results[$route.params.id].starship_class}} </small></div>
                <div class="card-text"><small class="text-muted"> Cost:   {{starships.results[$route.params.id].cost_in_credits}} credits </small></div>
                <div class="card-text"><small class="text-muted"> Length:   {{starships.results[$route.params.id].length}} </small></div>
                <div class="card-text"><small class="text-muted"> Speed:   {{starships.results[$route.params.id].max_atmosphering_speed}} </small></div>
                <div class="card-text"><small class="text-muted"> Minimum Crew:   {{starships.results[$route.params.id].crew}} </small></div>
                <div class="card-text"><small class="text-muted"> Passengers:   {{starships.results[$route.params.id].passengers}} </small></div>
                <div class="card-text"><small class="text-muted"> Cargo capacity:   {{starships.results[$route.params.id].cargo_capacity}} </small></div>
                <div class="card-text"><small class="text-muted"> Hyperdrive rating:   {{starships.results[$route.params.id].hyperdrive_rating}} </small></div>
                <div class="card-text"><small class="text-muted"> MGLT:   {{starships.results[$route.params.id].MGLT}} </small></div>
                <div class="card-text"><small class="text-muted"> Consumables:   {{starships.results[$route.params.id].consumables}} </small></div>
 <div> 
       </div>
        </div>  </div>
     </div>
     </div>
   
          </div>
       
        </div>
        <div class ="col-1" > </div>
    <div class ="col-11">   <div class="row justify-content-start"> <cardPilots/>  </div></div>
     
  
        </div>
   
      </div>
     
      </div>
      <div> <router-view/></div>
           
      </div>
     
        
    </template>
    
   