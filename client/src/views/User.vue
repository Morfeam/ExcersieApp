<template>
        <div class="container">
  <div class="notification is-primary">
    <p class = "title is-4">Welcome back User.FirstName</p>
  </div>
        
<hr>
    <p class = "title is-3">Recent Workouts</p>
    <div class="columns">
        <div class="column">
        <p class = "title is-5">ID Number</p>
        <p class = "subtitle is-6">Exercise Type</p>
        <p class = "subtitle is-6">Time</p>
        <p class = "subtitle is-6">Date (Created_at)</p>
        <p class = "subtitle is-6">Distance</p>
        <p class = "subtitle is-6">Note</p>
        <p class = "subtitle is-6">Ohther Info</p>
        </div>
        <div class="column" v-for=" (x, i) in 3 " 
                      :key="i"
                      :i="i"
                      :post="x">
        <p class = "title is-5">{{x}}</p>
        <p class = "subtitle is-6">Running</p>
        <p class = "subtitle is-6">30 Minutes</p>
        <p class = "subtitle is-6">11/15/20</p>
        <p class = "subtitle is-6">3 Miles</p>
        <p class = "subtitle is-6">No Notes.</p>
        <p class = "subtitle is-6">No Other Info.</p>
        </div>
    </div>
<hr>

<form>
  <p class="title is-3">Add a Workout</p>

  <div class="columns">

     <div class="column">

      <div class="field is-pulled-right">
      <label class="label">Select an Exercise</label>
      <div class="control">
         <div class="select" >
            <select>
               <option>
                  Exercises
               </option>
            <option  v-for=" (x, i) in 3 " 
                           :key="i"
                           :i="i"
                           :post="x">
               Exercise Type #{{x}} 
               </option>
            </select>
         </div>
      </div>
      </div>

     </div>

     <div class="column">

      <div class="field">
          <label class="label">Set Amount of Time</label>
         <input class="input" type="" name="Time" placeholder="Time">
      </div>
      
      </div>

      <div class="column">

      <div class="field">
         <label class="label">Set Distance</label>
         <input class="input" type="" name="Distance" placeholder="Distance">
      </div>

      </div>


     <div class="column">

      <div class="field">
         <label class="label">Select a Privacy Setting</label>
      <div class="control">
         <div class="select" >
            <select>
               <option>
                  Privacy Settings
               </option>
            <option  v-for=" (x, i) in 3 " 
                           :key="i"
                           :i="i"
                           :post="x">
               {{x}} - Privacy Setting Name 
               </option>
            </select>
         </div>
      </div>
      </div>

     </div>

   </div>

         <div class="field">

                     <div class="field">
                     <label class="label">Notes</label>
                     <div class="control">
                        <textarea class="textarea" name= "Notes" placeholder="Notes"></textarea>
                     </div>
                     </div>

         </div>
<div class="field">
  <p class="control">
    <button class="button is-info is-pulled-right" name="submit">
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
                  <div class="column">

                        <p class = "title is-6">Followers: {{FollowerNumber}}</p>
                        <table class='table'> 
                        <thead><tr>
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in 5 " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <th>1{{x.id}}</th>
                                 <td>Matt{{x.FirstName}}</td>
                                 <td>Morfea{{x.LastName}}</td>
                              </tr>
                           </tbody>
                        </table>

                  </div>
                  <div class="column">

                     <p class = "title is-6">Following: {{FollowingNumber}}</p>
                     <table class='table'> 
                        <thead><tr>
                              <th>Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in 5 " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <th>2{{x.id}}</th>
                                 <td>Joe{{x.FirstName}}</td>
                                 <td>Biden{{x.LastName}}</td>
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
      <table class='table'> 
                        <thead><tr>
                              <th>Id</th>
                              <th>Date (Created_at)</th>
                              <th>Privacy Setting</th>
                              <th>Time</th>
                              <th>Exercise Type</th>
                              <th>Notes</th>
                              <th>Other Info</th>
                           </tr></thead>
                           <tbody>
                              <tr v-for=" (x, i) in 5 " 
                                    :key="i"
                                    :i="i"
                                    :post="x">
                                 <th></th>
                                 <th></th>
                                 <td></td>
                                 <td></td>
                                 <th></th>
                                 <td></td>
                                 <td></td>
                              </tr>
                           </tbody>
                        </table>

<hr>
    <p class = "title is-3">Add a Workout</p>
    <center>
    <div class="columns">
     <div class="column">
     <p class = "title is-5">Jogging / Running</p>
        <div class="field">
        <p class="control">
           <input class="input" type="Min" placeholder="Enter Amount of Time">
        </p>
        </div>
        <div class="field">
        <p class="control">
           <input class="input" type="String" placeholder="Enter Number of Miles">
        </p>
        </div>
        <div class="buttons">
        <button class="button is-primary">Add</button>
        <button class="button is-danger">Remove</button>
        </div>
     </div>
     <div class="column">
     <p class = "title is-5">Biking</p>
        <div class="field">
        <p class="control">
           <input class="input" type="Min" placeholder="Enter Amount of Time">
        </p>
        </div>
        <div class="field">
        <p class="control">
           <input class="input" type="String" placeholder="Enter Number of Miles">
        </p>
        </div>
        <div class="buttons">
        <button class="button is-primary">Add</button>
        <button class="button is-danger">Remove</button>
        </div>
     </div>
     <div class="column">
     <p class = "title is-5">Hiking</p>
        <div class="field">
        <p class="control">
           <input class="input" type="Min" placeholder="Enter Amount of Time">
        </p>
        </div>
        <div class="field">
        <p class="control">
           <input class="input" type="String" placeholder="Enter Number of Miles">
        </p>
        </div>
        <div class="buttons">
        <button class="button is-primary">Add</button>
        <button class="button is-danger">Remove</button>
        </div>
     </div>
     <div class="column">
     <p class = "title is-5">Weight Lifting</p>
        <div class="field">
        <p class="control">
           <input class="input" type="Min" placeholder="Enter Amount of Time">
        </p>
        </div>
        <div class="field">
        <p class="control">
           <input class="input" type="String" placeholder="Comments / Notes">
        </p>
        </div>
        <div class="buttons">
        <button class="button is-primary">Add</button>
        <button class="button is-danger">Remove</button>
        </div>
        
     </div>
     
    <div class="column">
      <p class = "title is-5">Other</p>
      <div class="field">
        <p class="control">
           <input class="input" type="Activity" placeholder="Enter Name of Activity">
        </p>
        </div>
        <div class="field">
        <p class="control">
           <input class="input" type="Min" placeholder="Enter Amount of Time">
        </p>
        </div>
        <div class="field">
        <p class="control">
           <input class="input" type="String" placeholder="Comments / Notes">
        </p>
        </div>
        <div class="buttons">
        <button class="button is-primary ">Add</button>
        <button class="button is-danger">Remove</button>
        </div>
        
    </div>
    </div>
      </center>

<hr>

<p class = "title is-3">Share</p>
    <div class="buttons">
    <button class="button is-light">Share Jogging Info</button>
    <button class="button is-light">Share Biking Info</button>
    <button class="button is-light">Share Hiking Info</button>
    <button class="button is-light">Share Lifting Info</button>
    <button class="button is-light">Share Other Info</button>
    </div>
        <div class="control">
        <textarea class="textarea" placeholder="Comments and Information about Workout"></textarea>
        </div>
        <br>
    <button class="button is-primary is-pulled-right">Submit to Feed</button>
    <br>
<hr>


  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>