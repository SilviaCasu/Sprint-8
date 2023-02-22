<template>
  
<div class="container justify-content-center bg-dark">
  <div><cabecera/></div>
  
    <div class="list-group bg-dark">
      <h1>STARSHIPS</h1>
    <button @click="getShips(1), showNav()"  class= "btn p-2 mb-2 text-warning bg-dark">Get Ships</button>


  
 
  <router-link :to="{ name:'cardDetail', params:{ id :index  },  }"
  v-for="(starship, index) of starships.results" :key="index">
    <button class= "btn p-2 mb-3  text-light bg-dark"> SHIP: {{ starship.name }} MODEL: {{ starship.model }}</button>
    </router-link>  
     </div>
  </div>


<div class="container  justify-content-center bg-dark">
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
   background-color:#212529;
   text-align: left;
   color: rgb(204, 191, 75);
}
.router-link-active{
  color: rgb(218, 182, 25)
}
.router-link{
  color: rgb(207, 88, 19)
}
</style>