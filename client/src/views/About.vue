<template>
   <div id = "grad1"><br> <br>
      <div class="container">

   <div class="columns has-background-light">
   <div class ="column">

      <center>
       <hr>

        <p class="title is-2">About the App</p>
        <p class="subtitle is-4">
          Exercise is a vital activity to maintain a strong
          and healthy body whether it be for perception or personal
          reasons. Physical fitness doesn't have to be something you
          need to strive for alone anymore, with the advancement of
          technology and social media you can keep track of and post
          workouts for yourself and for others, a social media fitness
          app of the future where technology is your own personal trainer.
        </p>
        
        <hr>
     
     <div class="columns">
      <div class="column ">
         <p class="subtitle is-4">What are we?</p>
          <p class="subtitle is-6">
            Matt's Fitness App is a collaborative
            virtual fitness tracker based on your 
            data and your friend's and follower's data alike. 
            By uploading your personal workouts through personalized
            accounts you will have access to our workout feed. A place where
            you can comment and share workouts with other users. You can
            compete on distances and reps with your friends, challenge the amount of times
            you workout per week, month, or year, or just inspire others
            to keep on exercising. The possibilities are endless. 
          </p>
          <hr>
      </div>
      <div class="column ">  
         <p class="subtitle is-4">How does it work?</p>
         <p class="subtitle is-6">
            Through the power of active database connections, attentive admins,
            and software developers, you are able to keep track and communicate workouts
            with other users from around the world. It all starts with the workouts.
            Once you finish your workouts by day, record them and post them by night to
            keep track of your personal progress. By using the feed for comments and posting, you can encourage others
            to keep at it, share info about local gyms or trails, or compete with others to
            show your skills. 
         </p>
         <hr>
      </div>
      <div class="column ">  
         <p class="subtitle is-4">Privacy and Followers?</p>
         <p class="subtitle is-6">
            Matt's Fitness App also allows you to follow and unfollow
            other users. Say you wanted to share your workout but just
            to certain friendly users, by using the following features
            you can keep track of what workouts are popular among your friends
            and colleagues. Let's say you want to just keep a workout to yourself,
            no problem! Simply use the privacy setting on uploads to make
            sure your secret workouts stay safe with you.
         </p>
          <hr>
      </div>
    </div>

    <hr>

    <div class="columns">
      <div class="column ">
         <p class="subtitle is-4">List of Exercise Types</p>
         <p class="subtitle is-6">
           Here is a list of the current Exercise Types
           in our most recent update. The list of Exercise Types
           is always growing and expanding, making sure that no
           exercises are left behind.
         </p>
           <ul>
             <li><b>Current Exercise Types:</b></li>
             <li v-for=" (x, i) in exercises " 
                      :key="i"
                      :i="i"
                      :post="x">{{x.Name}}</li>
            </ul>
          <hr>
      </div>
      <div class="column">  

         <p class="subtitle is-5"><br><br>Registration has never been more easy, <br>
           click the button down below to sign up and <br> get connected to 
           Matt's exercise network.
         </p>
          <router-link to="/Signup" class="button is-primary">Sign Me Up</router-link>
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
import { getExerciseList} from "@/models/exercise_types";

export default {
  data(){
        return {
            exercises: [],
        }
    },
    async created(){
        this.exercises = await getExerciseList();
    },
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