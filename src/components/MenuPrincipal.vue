<template>
   <div>
      <nav class=" nav justify-content-start">
  <router-link :to="{name: 'bienvenida'}" class="nav-link active" aria-current="page">HOME</router-link>
  <router-link :to="{name:'starShips'}" class="nav-link" >STARSHIPS</router-link>
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

<style scoped>
nav {
   background-color:black;
    color: c3c3c3;
}

.nav-link-active{
  color: white;
  font-size:smaller;
  font-weight: bold;
  
}



.nav-link:link{  color:  white;
  font-size:smaller;
  font-weight: bold;
  

}

.nav-link:visited{  color: white;
  font-size:smaller;
  font-weight: bold;

}
.nav-link:hover{  color:  white;
  font-size:smaller;
  font-weight: bold;
  border-bottom:1px solid; 
  border-color: rgb(218, 205, 33);
  }
</style>