<template>
    <fragment>
     <ul id="slide-out" class="sidenav sidenav-fixed">
        <div class="dashboard_banner">
                  <img src="@/assets/images/logo.png" class="responsive-img" />
                <h6 class="white-text darken-2">heading1</h6> 
                <h6 class="white-text darken-2">heading2</h6>  
                <img class="responsive-img " />
        </div>
         <li><a ><i class="material-icons">home</i>Home</a></li>
       

      
        </ul>
    
      
     <ul id="slide-out" class="sidenav">
      <div class="dashboard_banner">
                <img src="@/assets/images/logo.png" class="responsive-img" />
                     <h6 class="white-text darken-2">heading1</h6> 
                <h6 class="white-text darken-2">heading2</h6>  
                <img class="responsive-img " />
        </div>
        <li><a ><i class="material-icons">home</i>Home</a></li>
       

      
    </ul>
    </fragment>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" >
   
   @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

.sidenav 
{
    width:15%;
}

.sidenav li a 
{
    font-family: 'Quicksand', sans-serif;
    color:black;
}

.dashboard_banner 
{
    text-align: center;
    padding:5px;
    padding-top:10px;
    background-color:green;
}

.dashboard_banner h6 
{
    font-family: 'Quicksand', sans-serif;
    text-shadow:2px 2px 2px black;
}

.dashboard_banner img 
{
    width:25%;
    margin:0px !important;
    padding:0px !important;
}

#slide-out 
{
    margin:0px !important; 
}


</style>