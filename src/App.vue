<template>
  <div id="app" >
    <body class="bg-dark">
   <div class="container-fluid justify-content-center bg-dark"></div>
 
  
  <router-view/>
  </body> </div>
</template>


<script>
import menuCabecera from '@/components/MenuCabecera.vue';


export default {
  name: 'App',
  components: {
    menuCabecera,
   
}
 }

</script>



