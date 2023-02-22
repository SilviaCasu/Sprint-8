<template>
<div class="container " >
  <div class="row bg-dark mt-5">
        <div class="logo text-center">
      <img src="..\assets\logo.png " class="img-fluid"  alt="...">
    </div>
  </div> 
      <div class="row bg-dark m-3 p-3">
        <div class ="col-6" >
          <menuPrincipal/>
      </div>
      <div class="col-6  justify-content-right">
       <menuLogin/>
      </div>
  </div>
  </div>
</template>
<script >


import menuPrincipal from '@/components/MenuPrincipal.vue'
import menuLogin from '@/components/MenuLogin.vue'
export default {
name: 'cabecera',
components: {
  menuLogin,
  menuPrincipal,
  data() {
    return {
      
    }
  },
},
computed: {
   
},
methods: {
    
}

}
</script>