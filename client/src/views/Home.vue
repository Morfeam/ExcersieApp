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
    <br>

        <p class="content subtitle is-5">Search By:</p>
                <button class="button is-primary" name="submit" @click.prevent="SearchByUser">
                Users  </button>
                <button class="button is-white" name="submit" @click.prevent="SearchByWorkout">
                Workouts  </button>
                <button class="button is-success" name="submit" @click.prevent="SearchByExerciseType">
                Exercise Types  </button>

    <b-field label="">
                    <b-autocomplete
                        rounded
                        v-model="name"
                        :data="filteredDataArray"
                        placeholder="Search"
                        icon="magnify"
                        clearable
                        @select="option => selected = option">
                        <template slot="empty">No results found</template>
                    </b-autocomplete>
                </b-field>
                <p class="content"><b>Selected:</b> {{ selected }}</p>
                

    <br>
    <br>
    <br>
    <br>
    <br>
    <p class="subtitle is-5">For more information regarding updates and implementations please go to: <a href="https://github.com/Morfeam1/ExerciseApp3">My Github Page</a></p>
      </center>

    <br>
</div></div>
<br></div></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getExerciseList} from "@/models/exercise_types";
import {  getList, getUserID, getListofNames} from "@/models/users";
import { getPublicWorkouts } from "@/models/workouts";
export default {
        data() {
            return {
                exercises: [],
                userNames: [],
                pubWorkouts: [],
                theData: [],
                data: [
                    'Angular',
                    'Angular 2',
                    'Aurelia',
                    'Backbone',
                    'Ember',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: '',
                selected: null
            }
        },
        async created(){
         this.exercises = await getExerciseList();
         this.users = await getList();
         this.pubWorkouts = await getList();
         this.userNames = await getListofNames();
        },
        methods: {
            async SearchByUser(){
            this.theData = await getListofNames();
            },
            async SearchByWorkout(){
            this.theData = await getPublicWorkouts(3);
            },
            async SearchByExerciseType(){
            this.theData = await getExerciseList();
            },
        },
        computed: {
            filteredDataArray() {
                return this.theData.filter((option) => {
                    return option
                        this.theData
                })
            }
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
