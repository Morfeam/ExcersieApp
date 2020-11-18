<template>
    <div class="container">
  <div class="notification is-primary">
    <p class = "title is-4">Welcome back Admin _Name_:</p>
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
    <div class ="">
    <p class = "title is-3">User Information</p>
      <table class='table'> 
          <thead><tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Password</th>
                <th>DOB</th>
                <th>Type</th>
            </tr></thead>
            <tbody>
                <tr v-for=" (x, i) in list " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.FirstName}}</td>
                    <td>{{x.LastName}}</td>
                    <td>{{x.Password}}</td>
                    <td>{{x.DOB}}</td>
                    <td>{{x.Type}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    <hr>

      </div>
</template>

<script>
import { getList,addUser } from "@/models/users";
import session from "@/models/session";
export default {
    data(){
        return {
            list: [],
            Fname: '',
            Lname: '',
            mail: '',
            Dateofbirth: '',
            pword: ''
        }
    },
    async created(){
        this.list = await getList(); 
        this.list = await newUser(Fname,Lname,Dateofbirth,mail,pword);
    },
    components: {
        
    },
    methods: {
        register(){
           console.log(Fname,Lname,mail,DateofBirth,pword)
        }
    },
    watch: {
      mail (value){
        console.log('email has changed', value)
      }
    }
    
}
</script>

<style>

</style>