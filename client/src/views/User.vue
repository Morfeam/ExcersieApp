<template>
        <div class="container">
  <div class="notification is-primary">
    <p class = "title is-4">Welcome back _Name_:</p>
  </div>
<hr>
    <p class = "title is-3">General Overview</p>
    <div class="columns">
        <div class="column">
        <p class = "title is-5">Exercise Types</p>
        <p class = "subtitle is-5">Jogging / Running</p>
        <p class = "subtitle is-5">Biking</p>
        <p class = "subtitle is-5">Hiking</p>
        <p class = "subtitle is-5">Weight Lifting</p>
        <p class = "subtitle is-5">Other</p>
        </div>
        <div class="column">
        <p class = "title is-5">Todays Date - 2</p>
        <p class = "subtitle is-5">Jogging / Running Amount</p>
        <p class = "subtitle is-5">Biking Amount</p>
        <p class = "subtitle is-5">Hiking Amount</p>
        <p class = "subtitle is-5">Weight Lifting Amount</p>
        <p class = "subtitle is-5">Other Amount</p>
        </div>
        <div class="column">
        <p class = "title is-5">Todays Date - 1</p>
        <p class = "subtitle is-5">Jogging / Running Amount</p>
        <p class = "subtitle is-5">Biking Amount</p>
        <p class = "subtitle is-5">Hiking Amount</p>
        <p class = "subtitle is-5">Weight Lifting Amount</p>
        <p class = "subtitle is-5">Other Amount</p>
        </div>
        <div class="column">
        <p class = "title is-5">Todays Date</p>
        <p class = "subtitle is-5">Jogging / Running Amount</p>
        <p class = "subtitle is-5">Biking Amount</p>
        <p class = "subtitle is-5">Hiking Amount</p>
        <p class = "subtitle is-5">Weight Lifting Amount</p>
        <p class = "subtitle is-5">Other Amount</p>
        </div>
    </div>

<hr>
    <p class = "title is-3">Todays Exercise</p>
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