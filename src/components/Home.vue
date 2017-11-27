<template>
  <div class="home">

    <div v-show="showForm" class="form-container">
      <h1>Star Wars</h1>
      <h2>Welcome a galaxy far far away...</h2>
      <p>
        <router-link v-bind:to="{name: 'PeopleSpace'}">Characters</router-link>
        <router-link v-bind:to="{name: 'SpaceShips'}">SpaceShips</router-link>
        <router-link v-bind:to="{name: 'Planets'}">Planets</router-link>
      </p>
      <p>  To start exploring the galxay, click on one of the links above to enter.</p>

    <h2>Sign up for the email list!</h2>

      <p v-show="showError" class="error"> There is an error within the form. Please check you information in each field. </p>

      <form v-on:submit.prevent="validateForm">

        <p><label for="email">
          <input type="email" id="email" v-model="email" placeholder="you@example.com">
        </label> </p>

        <p><input type="submit" value="Submit"></p>
      </form>

    </div>
    <div v-show="!showForm" class="success-message">
      <h1>Thank you for signing up!</h1>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      showForm: true,
      showError: false
    }
  },
  methods: {
    validateForm: function () {
        if ((this.username != '') &&
          (this.email != '') &&
          (this.password === this.passwordVerify)){
        console.log('Form is valid.');
        this.showForm = false;
        } else {
        console.log('Form is not valid.');
          this.showError = true;
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  border: 1px solid #aa0000;
  padding: 1rem;
  color: #aa0000;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
