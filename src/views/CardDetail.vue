<template>
 <router-view/>
    <div>   
    <div class="Card bg-dark">
      
    </div>
</div>
</template>

<script>
import menuCabecera from '@/components/MenuCabecera.vue';
import card from '@/components/Card.vue'
import { mapState, mapActions } from 'vuex'
export default {
name: 'cardDetail',
components: [
    card,
    menuCabecera
], 
props:{
    d:10,
},
computed: {
    ...mapState(['starships'])
},
methods: {

    ...mapActions(['getShips']),
    
  
},



} 
</script>