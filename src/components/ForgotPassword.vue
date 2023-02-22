<template>
    <div class="container-fluid  bg-dark text-warning">
      <div><cabecera/></div>
  <div class="row align-items-start ">
    <div class="col-4">
      
    </div>
<div class="col ">
     <div  class="display-flex">
       
   <form>
        <h2>Reset password</h2>
<small> Fordot your password? Enter your email to reset it</small>

<input type="email" class="form-control" placeholder="E-mail" aria-label="E-mail" required  v-model="email">
<button class="btn btn-light border-3 border-warning  mt-3"> Reset </button>
</form>
<div class="col-4">
    </div>
</div></div></div></div>
</template>
<script>

import cabecera from '@/components/Cabecera.vue'

export default {
  name: 'forgotPassword',
  components:{
   
    cabecera

  },
  data() {
    return {
        email: null,
      
    }
  },
  methods:{
   
  }
}
</script>