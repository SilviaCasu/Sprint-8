<template>
  
<div  id="container" class="container-fluid justify-content-center">
  <div><cabecera/></div>
  <div class="row">
    <div class="col  m-5 ">
    <div class="list-group ">
      <h3>Starships</h3>
      <div class="h4 pb-2 mb-4  border-bottom border-secondary"></div>
      <h5>Here you can see all the starwars ships</h5>
    <button @click="getShips(1), showNav()"  class= "btn p-2 mb-2 text-white">Get Ships</button>


  
 
  <router-link :to="{ name:'cardDetail', params:{ id :index  },  }"
  v-for="(starship, index) of starships.results" :key="index">
    <button class= "btn p-2 mb-3  text-light bg-dark"> SHIP: {{ starship.name }} MODEL: {{ starship.model }}</button>
    </router-link>  
     </div>
     </div>
  </div>
</div>

<div class="container  justify-content-center ">
<nav aria-label="Page navigation ">
  <ul  v-show ="setDefaultNav"  class="pagination" id="pagination">
    <li  v-if=" this.TotPages >= 2"  class="page-item"><a class="page-link" @click=" changePage('prev')">Previous</a></li>
    <li  v-if=" this.TotPages > 1 " class="page-item"><a class="page-link " >{{ page }}</a></li>
    <li  v-if=" this.TotPages <= 4  " class="page-item"><a class="page-link" @click=" changePage('next') ">Next</a></li>
  </ul>
</nav>
</div>
  
</template>

<script>
// @ is an alias to /src

import { mapState, mapActions,  } from 'vuex'
import cabecera from '@/components/Cabecera.vue'


export default {
  name: 'starShips',
  components: {
       cabecera,
      },
    props:{
    
    },
    data() {
      return {
       page:1,
       TotPages :1,
       setDefaultNav:false,
      }
    },


 

    computed: {
    ...mapState(['starships','pilot'])
},
    show(){

}, 
    methods: {
    ...mapActions(['getShips','getPilot']),
    
   
    changePage(accion) {
     this.TotPages =  Math.ceil(this.starships.count/10);

        if (this.page < this.TotPages && accion=='next')
        
        {  
          this.page = this.page + 1;
    }
       
       else if (this.page >= 2 && accion == 'prev') {
          this.page = this.page -1;
               }
                    
       this.getShips(this.page); 
      
    },

    showNav() {
      this.setDefaultNav = true;
    }

    }

}

</script>

<style>

body {
   background-color:black;
    color: rgba(255, 255, 255, 0.925);
}
.router-link-active{
  color: rgb(218, 182, 25)
}
.router-link{
  color: white
}
h5{
  text-align: center;
}

#container {
 background-color:black;
 color: white;
min-height: 100%;
min-width: 100%;

}
</style>