<template>
<div class = 'level section'>
<div class = 'level-item' >
<form>

  <p class="title is-3">Signup for an Account here:</p>
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
    <button class="button is-primary is-pulled-right" @click="signmeup">
      Signup
    </button>
  </p>

</div>

</form>


</div>
</div>
</template>

<script>
import { addUser} from "@/models/users";
import session from "@/models/session";
export default {
   
}
</script>
  
<style>

</style>