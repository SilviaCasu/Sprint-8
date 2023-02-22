<template>
   <div>
      <nav class=" nav nav-dark bg-dark justify-content-start">
  <router-link :to="{name: 'bienvenida'}" class="nav-link active" aria-current="page">Home</router-link> |
  <router-link :to="{name:'starShips'}" class="nav-link" >StarShips</router-link>
      </nav>
    </div>
</template>
<script>

export default {
   
    name: 'menuPrincipal',
    components:{
       
    }


}
</script>

<style>
.nav-link-active{
  color: rgb(218, 182, 25)
}


.nav-link{  color: white;
  font-size: medium;

}
</style>