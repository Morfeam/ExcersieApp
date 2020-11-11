<template>
  <div class="home ">

    <section class="hero is-medium intro">
    <div class="hero-body">
    <div class="container">

      <center>
    <div class="columns">
     <div class="column is-half">
       <hr>
        <p class="title is-2">Matt's Exercise App</p>
        <p class="subtitle is-4">
          Welcome to Matthew M's Exercise App. Everything
          is still under construction and may look rough
          around the edges for now. However, I am actively
          working on these pages to improve functionality
          and presentation.
        </p>
        <hr>
     </div>
     <div class="column is-half">
          <hr>
         <p class="subtitle is-4">Example of User Page</p>
          <router-link to="/User" class="button is-primary">User</router-link>
          <hr>
         <p class="subtitle is-4">Example of Admin Page</p>
          <router-link to="/Admin" class="button is-info">Admin</router-link>
          <hr>
     </div>
    </div>
      </center>

</div>
</div>
</section>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
   
  }
}
</script>
