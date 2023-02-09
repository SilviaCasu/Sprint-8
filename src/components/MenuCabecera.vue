<template>
  <div>
<div class="container text-center" >
<div class="row bg-dark">

  <div class="logo text-center">
  <img src="..\assets\logo.png " class="img-fluid"  alt="...">
  </div>
  </div>
  <nav class="navbar bg-dark justify-content-center" data-bs-theme="dark">
    <div class="nav ">
    <router-link :to="{name: 'bienvenida'}">Home</router-link> |
    <router-link :to="{name:'starShips'} ">StarShips</router-link>
    </div>
</nav>
</div>
<router-view/>
</div>
</template>

<style>

</style>