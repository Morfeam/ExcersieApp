<template>
    <div class="container">
  <div class="notification is-primary">
    <p class = "title is-4">Welcome back Admin!</p>
  </div>

    <hr>

    <div class="columns has-background-light">
     <div class="column is-half">
         <p class="title is-3">Other Admin Functions:</p>
        <div class="buttons">
        <button class="button is-primary">Primary</button>
        </div>

    <div class="buttons">
    <button class="button is-info">Info</button>
    <button class="button is-success">Success</button>

    </div>
    <div class="buttons">
    <button class="button is-warning">Warning</button>
    <button class="button is-danger">Danger</button>

    </div>
     </div>
     <div class="column is-half">
         <p class="title is-3">Account Setup:</p>
       <div class = 'level section'>
<div class = 'level-item'>
<form  action="../newUser">
    <p class="title is-3">Create a User's Account:</p>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="firstname" placeholder="First Name" v-model="Fname">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="lastname" placeholder="Last Name" v-model="Lname">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="DOB" placeholder="Date of Birth" v-model="Dateofbirth">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email" v-model="mail">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Confirm Password" v-model="pword">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-primary is-pulled-right" type="submit" @click="register()">
      Create User Account
    </button>
  </p>

</div>

</form>


</div>
</div>
     </div>
    </div>


    <hr>

    <div class="columns has-background-light is-centered">
    <div class ="">
    <p class = "title is-3">User Information</p>
      <table class='table'> 
          <thead><tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>User Created At</th>
                <th>Password</th>
                <th>DOB</th>
                <th>Type</th>
                <th>Email</th>
                <th>Delete</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in userList " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.FirstName}}</td>
                    <td>{{x.LastName}}</td>
                    <td>{{x.created_at}}</td>
                    <td>{{x.Password}}</td>
                    <td>{{x.DOB}}</td>
                    <td>{{x.User_Type}}</td>
                    <td>{{x.Email}}</td>
                    <td> <button class="button is-danger">Delete User</button></td>
                </tr>
            </tbody>
        </table>
        <br>
        </div>
  
      </div>
    <hr>

    <div class="columns has-background-light is-centered">
    <div class ="column">
    <p class = "title is-3">Exercise Types List</p>
      <table class='table'> 
          <thead><tr>
                <th>Id</th>
                <th>Date Created</th>
                <th>Exercise Name</th>
                <th>Delete</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in exercises " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.created_at}}</td>
                    <td>{{x.Name}}</td>
                    <td><button class="button is-danger">Delete Exercise</button></td>
                </tr>
            </tbody>
        </table>
        <br>
        </div>
        <div class = "column">

              <div class ="column">
    <p class = "title is-3">Follower Data</p>
      <table class='table'> 
          <thead><tr>
                <th>Id</th>
                <th>Date Created</th>
                <th>Follower</th>
                <th>Follower Name</th>
                <th>Following</th>
                <th>Following Name</th>
                <th>Delete</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in follows " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.created_at}}</td>
                    <td>{{x.Follower_id}}</td>
                    <td>{{userList[x.Follower_id-1].FirstName}} {{userList[x.Follower_id-1].LastName}}</td>
                    <td>{{x.Following_id}}</td>
                    <td>{{userList[x.Following_id-1].FirstName}} {{userList[x.Following_id-1].LastName}}</td>
                    <td><button class="button is-danger">Remove Follower</button></td>
                </tr>
            </tbody>
        </table>
        <br>
        </div>

          </div>
      </div>
    <hr>

      <div class="columns has-background-light is-centered">
    <div class ="column">
    <p class = "title is-3">All Workouts</p>
      <table class='table'> 
                        <thead><tr>
                              <th>Id</th>
                              <th>Date (Created_at)</th>
                              <th>Owner ID</th>
                              <th>Privacy Setting</th>
                              <th>Time</th>
                              <th>Exercise Type</th>
                              <th>Notes</th>
                              <th>Distance</th>
                              <th>Other Info</th>
                              <th>Delete Workout</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in allWorkouts " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <td>{{x.id}}</td>
                                 <td>{{x.created_at}}</td>
                                 <td>{{x.Owner_id}}</td>
                                 <td>{{x.Privacy_Setting}}</td>
                                 <td>{{x.Time}} min.</td>
                                 <td>{{x.Exercise_Type}}</td>
                                 <td>{{x.Note}}</td>
                                 <td>{{x.Distance}} miles</td>
                                 <td>{{x.Other_Info}}</td>
                                 <td><button class="button is-danger">Delete Workout</button></td>
                              </tr>
                           </tbody>
                        </table>
                      
        <br>
        </div>

        </div>

        <hr>

      </div>
</template>

<script>
import { getWorkouts} from "@/models/workouts";
import {  getList, getUserID} from "@/models/users";
import { getAllFollows} from "@/models/followers";
import { getExerciseList} from "@/models/exercise_types";
import session from "@/models/session";
export default {
    data(){
        return {
            userList: [],
            exercises: [],
            follows: [],
            allWorkouts: [],
        }
    },
    async created(){
        this.userList = await getList();
        this.exercises = await getExerciseList();
        this.follows = await getAllFollows();
        this.allWorkouts = await getWorkouts();
    },
    components: {
        
    },
    methods: {

    }
    
}
</script>

<style>

</style>