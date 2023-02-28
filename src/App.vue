<template>
  <div id="app" >
    <body class="bg-black">
   <div class="container fluid justify-content-center "></div>
 
  
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
   background-color:#000000;
   text-align: left;
   color: white;
}

.link-active{
  color: white;
  font-size:smaller;
  font-weight: bold;
}


.link:link{  color:  white;
  font-size:smaller;
  font-weight: bold;
  

}

.link:visited{  color: white;
  font-size:smaller;
  font-weight: bold;

}
.link:hover{  color:  white;
  font-size:smaller;
  font-weight: bold;
  }
</style>





