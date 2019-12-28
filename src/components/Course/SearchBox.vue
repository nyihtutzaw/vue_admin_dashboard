<template>
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" class="validate">
                        </div>
                        <div class="col s6" style="text-align:right;padding-right:100px;">
                                  <ul class="pagination">
                                        
                                        <li class="active_pagination"><a href="#!">1</a></li>
                                        <li class="waves-effect"><a href="#!">2</a></li>
                                        <li class="waves-effect"><a href="#!">3</a></li>
                                        <li class="waves-effect"><a href="#!">4</a></li>
                                        <li class="waves-effect"><a href="#!">5</a></li>
                                        
                                    </ul>
                        </div>
                    </div>
</template>
<script>
export default {
 
}
</script>
<style lang="scss">
      @import "@/style/colors.scss";
         .active_pagination 
        {
             @extend %active_pagination;
        }
    </style>