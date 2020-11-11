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
<form>
    <p class="title is-3">Create a User's Account:</p>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="name" placeholder="Name">
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
    <input class="input" type="email" placeholder="Email">
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
    <input class="input" type="password" placeholder="Confirm Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-primary is-pulled-right">
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
          <thead> 
            <tr> 
              <th>ID Number</th> 
              <th>Name</th>
              <th>Email</th>  
              <th>Password</th> 
              <th><center>Manage</center></th> 
            </tr> 
          </thead> 
          <tbody> 
            <tr> 
              <td>1</td> 
              <td>Matthew Morfea</td> 
              <td>morfeam1@hawkmail.newpaltz.edu</td> 
              <td>Password</td> 
              <td>
                  <div class="buttons">
                  <button class="button is-primary is-light">View  User Page</button>
                  <button class="button is-info is-light">Change Password</button>
                  <button class="button is-danger is-light">Delete User</button>
                  </div>
              </td>
            </tr> 

            <tr> 
              <td>2</td> 
              <td>Chris Smith</td> 
              <td>yahoo.com</td> 
              <td>qwert1230193</td> 
              <td>
                  <div class="buttons">
                  <button class="button is-primary is-light">View  User Page</button>
                  <button class="button is-info is-light">Change Password</button>
                  <button class="button is-danger is-light">Delete User</button>
                  </div>
              </td>
            </tr> 

            <tr> 
              <td>3</td> 
              <td>Other User</td> 
              <td>google.com</td> 
              <td>helloworld</td> 
              <td>
                  <div class="buttons">
                  <button class="button is-primary is-light">View  User Page</button>
                  <button class="button is-info is-light">Change Password</button>
                  <button class="button is-danger is-light">Delete User</button>
                  </div>
              </td>
            </tr> 

            <tr> 
              <td>4</td> 
              <td>John Smith</td> 
              <td>ABC123@gmail.com</td> 
              <td>12345</td> 
              <td>
                  <div class="buttons">
                  <button class="button is-primary is-light">View  User Page</button>
                  <button class="button is-info is-light">Change Password</button>
                  <button class="button is-danger is-light">Delete User</button>
                  </div>
              </td>
            </tr> 
          </tbody> 
        </table>
        </div>
    <hr>

      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>