<template>
  <div id="app" >
    <body class="bg-dark h">
   <div class="container-fluid justify-content-center bg-dark"></div>
 
  
  <router-view/>
  </body> </div>
</template>


<script>



export default {
  name: 'App',
  components: {
   
}
 }

</script>
<style>
body {
   background-color:#212529;
   text-align: left;
   color: rgb(204, 191, 75);
}
.router-link-active{
  color: rgb(218, 182, 25)
}
.router-link{
  color: rgb(207, 88, 19)
}
</style>





