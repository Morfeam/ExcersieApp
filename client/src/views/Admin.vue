<template>

  <div id = "grad1"><br> 

    <div class="container">
  <div class="notification is-primary">
    <p class = "title is-4">Welcome back Admin!</p>
  </div>

    <hr>

    <div class="columns has-background-light">
     <div class="column is-half">

      <form>
  <p class="title is-3">Workout Setup:</p>

  <div class="columns">

    <div class="column">

      <div class="field">
          <label class="label">User Id</label>
         <input class="input" type="" name="uID" placeholder="User ID" v-model="uID">
      </div>
      
      </div>

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

     </div>

     <div class="column is-half">
         <p class="title is-3">Account Setup:</p>
       <div class = 'level section'>
<div class = 'level-item'>

<form>

  <p class="title is-3">Create an Account:</p>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="Fname" placeholder="First Name" v-model="Fname">
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
    <input class="input" type="Lname" placeholder="Last Name" v-model="Lname">
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
    <input class="input" type="DateofBirth" placeholder="Date of Birth" v-model="DateofBirth">
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
    <input class="input" type="password" placeholder="Confirm Password" v-model="password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email" v-model="email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-primary is-pulled-right" @click.prevent="signmeup">
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
                                 <td><button class="button is-danger" name="Workout_delete">Delete Workout</button></td>
                              </tr>
                           </tbody>
                        </table>
                      
        <br>
        </div>

        </div>

        <hr>

      </div>

      <br></div>
</template>

<script>
import { getWorkouts, addWorkout} from "@/models/workouts";
import {  getList, getUserID, addUser} from "@/models/users";
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
        async signmeup(){
        const data = await addUser(this.Fname, this.Lname, this.DateofBirth, this.password, 6, this.email);
        this.status.push('Registration Successful');
      },
      async addTheWorkout(){
        const data = await addWorkout(this.uID,this.privacy, this.tme, this.exType, this.Note, this.dist, " ");
        this.status.push('Add Workout Successful');
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