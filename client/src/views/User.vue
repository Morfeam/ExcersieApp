<template>

   <div id = "grad1"><br> 
        <div class="container">

   <div class="columns has-background-light">
   <div class ="column"> 

  <div class="notification is-primary">
    <p class = "title is-4" v-for=" (x, i) in Thename " 
                           :key="i"
                           :i="i"
                           :post="x">
      Welcome back {{x.FirstName}}!</p>
  </div>
        
<hr>

    <p class = "title is-3">Recent Workouts</p>
    <div class="columns">
        <div class="column is-centered">
        <p class = "title is-5">ID Number</p>
        <p class = "subtitle is-6">Exercise Type</p>
        <p class = "subtitle is-6">Time</p>
        <p class = "subtitle is-6">Date</p>
        <p class = "subtitle is-6">Distance</p>
        <p class = "subtitle is-6">Note</p>
        <p class = "subtitle is-6">Ohther Info</p>
        </div>
        <div class="column" v-for=" (x, i) in 1" 
                      :key="i"
                      :i="i"
                      :post="x">
        <p class = "title is-5">{{list[list.length -1].id}}</p>
        <p class = "subtitle is-6">{{list[list.length -1].Exercise_Type}}</p>
        <p class = "subtitle is-6">{{list[list.length -1].Time}}</p>
        <p class = "subtitle is-6">{{list[list.length -1].created_at}}</p>
        <p class = "subtitle is-6">{{list[list.length -1].Distance}}</p>
        <p class = "subtitle is-6">{{list[list.length -1].Note}}</p>
        <p class = "subtitle is-6">{{list[list.length -1].Other_Info}}</p>
        </div>
    </div>
<hr>

 <form>
  <p class="title is-3">Add a Workout:</p>

  <div class="columns">

     <div class="column">

      <div class="field is-pulled-right">
      <label class="label">Select an Exercise</label>
      <div class="control">
         <div class="select">
            <select v-model="exType">
               <option>
                  Exercises
               </option>
            <option  v-for=" (x, i) in exercises " 
                           :key="i"
                           :i="i"
                           :post="x">
               {{x.Name}} 
               </option>
            </select>
         </div>
      </div>
      </div>

     </div>

     <div class="column">

      <div class="field">
          <label class="label">Set Amount of Time</label>
         <input class="input" type="" name="Time" placeholder="Time"  v-model="tme">
      </div>
      
      </div>

      <div class="column">

      <div class="field">
         <label class="label">Set Distance</label>
         <input class="input" type="" name="Distance" placeholder="Distance"  v-model="dist">
      </div>

      </div>


     <div class="column">

      <div class="field">
         <label class="label">Select a Privacy Setting</label>
      <div class="control">
         <div class="select" >
            <select  v-model="privacy">
               <option>
                  Privacy Settings
               </option>
            <option  v-for=" (x, i) in 3 " 
                           :key="i"
                           :i="i"
                           :post="x">
               {{x}}
               </option>
            </select>
         </div>
         <p>1-only me, 2-only friends, 3-public</p>
      </div>
      </div>

     </div>

   </div>

         <div class="field">

                     <div class="field">
                     <label class="label">Notes</label>
                     <div class="control">
                        <textarea class="textarea" name= "Notes" placeholder="Notes"  v-model="Note"></textarea>
                     </div>
                     </div>

         </div>
<div class="field">
  <p class="control">
    <button class="button is-info is-pulled-right" name="submit" @click.prevent="addTheWorkout">
      Upload Workout
    </button>
  </p>
   <br>
   <br>
</div>
</form>

<hr>

      <div class="columns">
         <div class="column">

               <p class = "title is-4">Followers and Following</p>

               <div class="columns">
                  <div class="column is-centered">

                        <p class = "title is-6">Followers: {{Followerlist.length}}</p>
                        <table class='table'> 
                        <thead><tr>
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Follow Back</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in Followerlist " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <th v-bind="fol">{{x.Following_id}}</th>
                                 <td>{{userList[x.Following_id -1].FirstName}}</td>
                                 <td>{{userList[x.Following_id -1].LastName}}</td>
                                 <td>

                                    <button class="button is-secondary is-pulled-right" @click.prevent="followback(x.Following_id)">
                                       Follow back
                                    </button>

                                 </td>
                              </tr>
                           </tbody>
                        </table>

                  </div>
                  <div class="column is-centered">

                     <p class = "title is-6">Following: {{Followinglist.length}}</p>
                     <table class='table'> 
                        <thead><tr>
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in Followinglist " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <th v-bind="unfol">{{x.Follower_id}}</th>
                                 <td>{{userList[x.Follower_id -1].FirstName}}</td>
                                 <td>{{userList[x.Follower_id-1].LastName}}</td>
                                 <td>

                                    <button class="button is-warning is-pulled-right" @click.prevent="unfollow(x.id)">
                                       Unfollow
                                    </button>

                                 </td>
                              
                              </tr>
                           </tbody>
                        </table>

                  </div>
               </div>

         </div>
         <div class="column">

               <p class = "title is-4">Public Workouts</p>
               <div v-for=" (x, i) in 5 " 
                                    :key="i"
                                    :i="i"
                                    :post="x">

                        <p class = "subtitle is-5">Id: {{x}}</p>
                        <p class = "subtitle is-5">Comments: {{x}}</p>
                        <hr>
                        
               </div>
         </div>
      </div>

<hr>

      <p class = "title is-3">All Workouts</p>
      <table class='table '> 
                        <thead><tr>
                              <th>Id</th>
                              <th>Date (Created_at)</th>
                              <th>Privacy Setting</th>
                              <th>Time</th>
                              <th>Exercise Type</th>
                              <th>Notes</th>
                              <th>Distance</th>
                              <th>Other Info</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in list " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <td>{{x.id}}</td>
                                 <td>{{x.created_at}}</td>
                                 <td>{{x.Privacy_Setting}}</td>
                                 <td>{{x.Time}} min.</td>
                                 <td>{{x.Exercise_Type}}</td>
                                 <td>{{x.Note}}</td>
                                 <td>{{x.Distance}} miles</td>
                                 <td>{{x.Other_Info}}</td>
                              </tr>
                           </tbody>
                        </table>


<div>
<p class = "title is-3">Share</p>
    <label class="label">Select a Workout:</label>
      <div class="control">
         <div class="select" >
            <select>
               <option>Workout ID</option>
            <option  v-for=" (x, i) in list " 
                           :key="i"
                           :i="i"
                           :post="x">
               Workout ID: {{x.id}} 
               </option>
            </select>
         </div>
      </div>
      </div>
        <div class="control">
        <textarea class="textarea" placeholder="Comments and Information about Workout"></textarea>
        </div>
        <br>
    <button class="button is-primary is-pulled-right">Submit to Feed</button>
    <br>

   </div>
   </div>


</div>
<br>
</div>

</template>

<script>
import { getUserWorkouts, addWorkout} from "@/models/workouts";
import {  getList, getUserID} from "@/models/users";
import { getFollowers, getFollowing, addFollowing, delFollow} from "@/models/followers";
import { getExerciseList} from "@/models/exercise_types";
import session from "@/models/session";
var user = 1;
export default {
    data(){
        return {
            list: [],
            Thename: [],
            Followinglist: [],
            Followerlist: [],
            userList: [],
            exercises: [],
        }
    },
    props:{
       
    },
    async created(){
        this.list = await getUserWorkouts(user); 
        this.Thename = await getUserID(user); 
        this.Followinglist = await getFollowing(user); 
        this.Followerlist = await getFollowers(user); 
        this.userList = await getList();
        this.exercises = await getExerciseList();
    },
    components: {
        
    },
    methods: {
      async addTheWorkout(){
        const data = await addWorkout(user,this.privacy, this.tme, this.exType, this.Note, this.dist, " ");
        this.status.push('Add Workout Successful');
      },
      async followback(fol){
        const data = await addFollowing(user,fol,1);
        this.status.push('Following Successful');
      },
      async unfollow(unfol){
        const data = await delFollow(unfol);
        this.status.push('Following Successful');
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