<template>
    <fragment>
    <nav class="navbar">
            <div class="nav-wrapper">
            <a href="#"  data-target="slide-out"   class="sidenav-trigger button-collapse hide-on-large-only"><i class="material-icons">menu</i></a>
            <a style="margin-left:20%;" class="brand-logo">{{ $route.name }}</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a class="modal-trigger" href="#changepw"> Change Password</a></li>
                <li><a >Logout</a></li>
            </ul>
            </div>
    </nav>
    <sidebar></sidebar>
    </fragment>
</template>
<script>
import Sidebar from '@/components/Partials/Sidebar.vue';
export default {
    components: 
    {
        "sidebar":Sidebar,
    },
      mounted() {
   
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    this.$store.dispatch("loadCart");
  },
  updated() {
      var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  },
}
</script>
<style lang="scss" scoped>
        @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
        nav 
        {
            background: rgb(65,237,143);
            background: linear-gradient(93deg, rgba(65,237,143,1) 4%, rgba(0,129,78,1) 89%);
        }

        nav li a 
        {
             font-family: 'Quicksand', sans-serif;
        }

        .brand-logo 
        {
            text-shadow:1px 1px 1px black;
            font-weight:bold;
        }

</style>