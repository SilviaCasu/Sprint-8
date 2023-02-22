<template>
    <div>
      <nav class=" nav nav-dark bg-dark justify-content-end">
          <router-link :to="{name:'login'}" class="nav-link active" aria-current="page">Login</router-link>|
        <router-link :to="{name:'register'}" class="nav-link">Register</router-link>
      </nav>
  
  </div>
</template>
<style>
.nav-link-active{
  color: rgb(218, 182, 25)
}


.nav-link{  color: white;
  font-size: medium;

}
</style>


