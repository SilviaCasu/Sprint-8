<template>
    
<div>
    <div><cabecera/></div>
<div class="container-fluid  bg-dark text-warning">
  <div class="row align-items-start ">
    <div class="col-4">
      
    </div>
<div class="col ">
     <div  class="display-flex">
      
        <h6> Enter your email and password to login.</h6>
<small> Don't have en account?</small>
<router-link class="router-link" :to="{ name: 'register' }"> Sign up</router-link>
<h3>Login to Starwars</h3>

    <form class="" @submit.prevent="handleSubmit">
      
        <label>E-mail</label>
        <input type="email" class="form-control" placeholder="E-mail" aria-label="First name" required  v-model="email">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" required v-model="password">
        <button class="btn btn-light border-3 border-warning  mt-3" type="submit" value="Submit">Sign in</button>
       <br>
        <router-link class="router-link" :to="{ name: 'forgotPassword' }">Forgot your password?</router-link> </form>
    <p>E-mail: {{ email }}</p>
    <p>password: {{ password }}</p>
   
    </div>
    </div>
    <div class="col-4">
    </div>
    </div>  
    </div>
</div>


</template>

<script>
import cabecera from '@/components/Cabecera.vue'
export default {
  name: 'login',
  components:{
    cabecera

  },
  data() {
    return {
        email: '',
        password:'',
       
    }
  },
  methods :{
  handleSubmit (){
        const data = {
        email : this.email,
        password : this.password,
        }
        
       // console.log (data);

        if (this.email==localStorage.email && this.password==localStorage.password) {
        console.log ("ok"); console.log('Hello' + localStorage.username) ;
    } else {
      alert("User not found");
    }



    }
  },
  
}
</script>

