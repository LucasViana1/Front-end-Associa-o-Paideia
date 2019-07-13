<!--entender como foi implementada a pagina do facebook ao site-->
<template>
  <b-container>
    <center class="mt-4 mb-4">
      <h5>Para ficar por dentro das noticias, curta nossa página no Facebook!</h5>
    </center>
    <center>
      <div class="fb-page" data-href="https://www.facebook.com/pg/focuscursinho" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/pg/focuscursinho" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/pg/focuscursinho">Focus Cursinho</a></blockquote></div>
    </center>
    
  </b-container>
</template>

<script>

export default {
  name: 'Noticias',
  
   mounted() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
