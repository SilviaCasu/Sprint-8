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
data() {
      return {
        exist:""
      }
    },
computed: {
    ...mapState(['starships','pilot', 'foto', 'url'])
},
methods: {
    ...mapActions(['getShips','getPilot', 'getId']),
    
    getId(url) {
     
      const thenum = url.replace(/\D/g, "");
      const theUrl="https://starwars-visualguide.com/assets/img/starships/"+thenum+".jpg";
      let exist="";

      const img = new Image()
      img.onload = () => {
        this.exist = true
      }
      img.onerror = () => {
        this.exist = false
       
      }
      img.src = theUrl;
    
if(this.exist) {
    return theUrl
} else {
  return "https://starwars-visualguide.com/assets/img/placeholder.jpg"
}
     },


   

   
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
      <div class="card bg-dark   " style="max-width: 90%;">
      <div class="row g-0">
        <div class="col-md-4 m-5 ">
     
          <img :src="getId(starships.results[$route.params.id].url)" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-4">
          <div class="card-body text-light justify-content-right">
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
  <div class="card-text"><small class="text-muted"> foto:   {{starships.results[$route.params.id].url}} </small></div>
       </div><div> 
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
    
   