<template>

<div class = "columns has-background-light">
  <div class = "column">

<div class = 'level section'>
<div class = 'level-item'>
<form>
  <p class="title is-3">Login Here:</p>
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
  <p class="control">
    <button class="button is-success" @click.prevent="login">
      Login
    </button>
  </p>

</div>

<p class = "is-size-4">
     Hey! Still dont have an account with us?
     <br>
     Signup today on our signup page.  
     </p>
<div class="field">
  <p class="control">
     <router-link to="/Signup" class="button is-info is-pulled-right">Signup</router-link>

  </p>
  
</div>
</form>


</div>
</div>

  </div>
  </div>


</template>

<script>
import session from "@/models/session";
export default {
  methods: {
     login(){
            session.user = {
                name: 'Rabbi Moshe Plotkin',
                handle: 'jewpaltz',
                profile: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/120552651_10102367831029710_8523278423201553541_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=Jnr3FRfM4FIAX8F5rC9&_nc_ht=scontent-lga3-1.xx&oh=14a477b3f03186158eccf30fe3a03bda&oe=5FA552C2'
            }
            session.addNotification('Yay! You logged in', 'success')
            this.$router.push('user')
     }
  }
}
</script>

<style>

</style>