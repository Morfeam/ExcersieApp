<template>
<div class = 'level section'>
<div class = 'level-item' >
<form>

  <p class="title is-3">Signup for an Account here:</p>
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="name" placeholder="Name" v-model= "users.name">
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
    <input class="input" type="email" placeholder="Email" v-model= "users.email">
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
    <input class="input" type="password" placeholder="Confirm Password" v-model= "users.password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-primary is-pulled-right" @click="addNewUser">
      Signup
    </button>
  </p>

</div>

</form>


</div>
</div>
</template>

<script>
export default {
    
}/*
var app = new Vue({
      el: '.container',
      data: {
        users: [
          {
            name: '',
            email: '',
            password: ''
          }
        ]
      },
      methods:{
        addNewUser(){
          this.users.push({
            name: '',
            email: '',
            password: ''
          })
        }
      }
    })*/
</script>
  
<style>

</style>