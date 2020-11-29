<template>

    <div id = "grad1"><br> <br>
      <div class="container">

   <div class="columns has-background-light">
   <div class ="column">

      <center>
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
     
     <div class="columns">
      <div class="column ">
         <p class="subtitle is-4">Example of User Page</p>
          <router-link to="/User" class="button is-primary">User</router-link>
          <hr>
      </div>
      <div class="column ">  
         <p class="subtitle is-4">Example of Admin Page</p>
          <router-link to="/Admin" class="button is-info">Admin</router-link>
          <hr>
      </div>
      <div class="column ">  
         <p class="subtitle is-4">Login / Signup</p>
          <router-link to="/Login" class="button is-secondary">Login</router-link>
          <router-link to="/Signup" class="button is-dark">Signup</router-link>
          <hr>
      </div>
    </div>

    <hr>

    <div class="columns">
      <div class="column ">
         <p class="subtitle is-4">Recent Implementations</p>
           <ul type="">
             <li>Attaching comments to posts in Feed Page</li>
             <li> Admins Creating Exercise Types</li>
             <li>Creating Posts via cards, based on Public Workout lists</li>
             <li>User Friendly Formatting and design of all Pages</li>
             <li>Login page interupt before user logging in, to view Feed and User pages</li>
           </ul>
          <hr>
      </div>
      <div class="column ">  
         <p class="subtitle is-4">Still to Come</p>
          <ul type="">
             <li>User Logins Capture</li>
             <li>Notifications to User via Status or notifications on all pages</li>
             <li>Passing correct names and emails to correct posts in Feed page</li>
             <li>Update to Search features in Feed page</li>
             <li>Loading user pages unique to User Login Capture</li>
           </ul>
          <hr>
      </div>
    </div>

    <p class="subtitle is-5">For more information regarding updates and implementations please go to: <a href="https://github.com/Morfeam1/ExerciseApp3">My Github Page</a></p>
      </center>

    <br>
</div></div>
<br></div></div>
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

<style>
#grad1{
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background: rgb(189,189,189);
   background: linear-gradient(180deg, rgba(189,189,189,1) 0%, rgba(168,126,193,1) 100%);
    }

</style>
