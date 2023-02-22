<template>
    
<div>
    <div><cabecera/></div>
<div class="container-fluid  bg-dark text-warning">
  <div class="row align-items-start ">
    <div class="col-4">
      
    </div>
<div class="col ">
     <div  class="display-flex">
      
<small> Already have en account? </small>
<router-link class="router-link" :to="{ name: 'login' }">  Login </router-link><br>
        <h3 align=" center">Create your Starwars account</h3>
      
    <form class="form mt-3" @submit.prevent="handleSubmit">
        <label>First name</label>
        <input type="text" class="form-control" placeholder="First name" aria-label="First name" required v-model="first_name" :state="check">
        <label>Last name</label> 
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" required v-model="last_name">
        <label>Username</label>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" required  v-model="username">
        <label>E-mail</label>
        <input type="email" class="form-control" placeholder="E-mail" aria-label="E-mail" required  v-model="email">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" required v-model="password">
       
        <button class="btn btn-light border-3 border-warning  mt-3" type="submit" value="Submit">Sign up</button>
    </form>
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
  name: 'register',
  components:{
    cabecera

  },
  data() {
    return {
        first_name: '',
        last_name: '',
        username:'',
        email: '',
        password:'',
        
    }
  },
  computed :{
    check (){
    return this.first_name.length > 2 ? true : false
    }
  },
  
 
    mounted() {
    if (localStorage.first_name) {
      this.first_name = localStorage.first_name;
    } 
  },
 methods:{
    handleSubmit (){
localStorage.setItem('first_name', this.first_name);
localStorage.setItem('last_name', this.last_name);
localStorage.setItem('email', this.email);
localStorage.setItem('password', this.password);
localStorage.setItem('username', this.username);


    }
  },

}




</script>