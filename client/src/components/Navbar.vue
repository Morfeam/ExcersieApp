<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>
    <a class="navbar-item" href="https://vuejs.org/">
      <img src="../assets/logo.png" width="30" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        
       <router-link to="/" class="navbar-item">Home</router-link> |
       <router-link to="/about" class="navbar-item">About</router-link>
       <router-link to="/feed" class="navbar-item">Feed</router-link>



      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Exercises
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Jogging / Walking
          </a>
          <a class="navbar-item">
            Hiking
          </a>
          <a class="navbar-item">
            Weight Lifting
          </a>
          <a class="navbar-item">
            Other
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/Signup" class="button is-info is-light">Signup</router-link>
          <router-link to="/Login" class="button is-info">Login</router-link>

        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>