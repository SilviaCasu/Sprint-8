<template>
  
   <div><menuCabecera/></div>
    <div class="card ">
     
    
    </div>
</template>

<script>
import { mapState, mapActions,  } from 'vuex'
import menuCabecera from '@/components/MenuCabecera.vue'
export default {
  name: 'card',
  components: {
    menuCabecera,
   
   },
   methods:{
    
   }, 
   computed: {
    ...mapState(['starships'])
   },
methods: {
    ...mapActions(['getShips'])
}}
  

</script>
<style>

</style>