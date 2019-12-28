<template>
   <main>
    
      
      <div class="section"></div>
      <span style="background:green;border-radius:20px 0px 20px 0px;">
      <img src="@/assets/images/logo.png" class="responsive-img" />
      </span>
      <h5 class="indigo-text">Heading 1</h5>
      <div class="section"></div>

      <div class="container">
        <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 15px 48px 0px 48px; border: 1px solid #EEE;">

          <form class="col s12" method="post">
            <div class='row'>
              <div class='col s12'>
              </div>
            </div>
            <p>Please Login Here</p>
            <div class='row'>
              <div class='input-field col s12'>
                <span for='email'>Enter your username</span>
                <input class='validate' type='text' name='username' id='username' />
                
              </div>
            </div>

            <div class='row'>
              <div class='input-field col s12'>
                <span for='password'>Enter your password</span>
                <input class='validate' type='password' name='password' id='password' />
                
              </div>
         
            </div>

            <br />
            <center>
              <div class='row'>
                <button type='submit' name='btn_login' class='col s12 btn btn-large waves-effect'>Login</button>
              </div>
            </center>
          </form>
        </div>
      </div>
   
   

    <div class="section"></div>
    <div class="section"></div>
  </main>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">

    @import "@/style/colors.scss";
    

      main {
      flex: 1 0 auto;
      text-align:center;
    }

    button 
    {
        background:$primaryButton !important;
    }

    

    img
    {
        width:80px;
        height:30px;
    }

    .input-field 
    {
        text-align:left;
    }
 

    .input-field input[type=date]:focus + label,
    .input-field input[type=text]:focus + label,
    .input-field input[type=email]:focus + label,
    .input-field input[type=password]:focus + label {
      color: #e91e63;
    }

    .input-field input[type=date]:focus,
    .input-field input[type=text]:focus,
    .input-field input[type=email]:focus,
    .input-field input[type=password]:focus {
      border-bottom: 2px solid #e91e63;
      box-shadow: none;
    }
</style>