<template>
  <div class="spaceships">
    <h1> Spaceships of Star Wars </h1>
   <p>
      <router-link v-bind:to="{name: 'Home'}">Home</router-link>
      <router-link v-bind:to="{name: 'PeopleSpace'}">Characters</router-link>
      <router-link v-bind:to="{name: 'Planets'}">Planets</router-link>
      </p>

    <form v-on:submit.prevent="getShips">
        <p>Search Star Wars Spaceships <input type="text" v-model="name"><button type="submit">Search</button></p>
      </form>

      <ul v-if="results && results.length > 0" class="results">
      <li v-for="item of results">
        <p><strong>{{item.word}}</strong></p>
        <p>{{item.score}}</p>
      </li>
    </ul>

      <div v-else-if="results && results.length==0" class="no-results">
    <h2>No Starship Found</h2>
    <p>Please adjust your search to find.</p>
     </div>

      <ul v-if="errors.length > 0" class="errors">
         <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </div>
    </template>

      <script>
      import axios from 'axios';
      export default {
        name: 'SpaceShips',
        data () {
          return {
            results: null,
            errors: [],
            name: [],
          }
        },
        methods: {
          SpaceShips: function(){
            axios.get('http https://swapi.co/api/starships/?search=r2', {
            })
            .then(response => {
              this.results = response.data;
            })
            .catch(error => {
              this.errors.push(error);
            });
          }
        }
      }
      </script>

      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      .rhymesaurus {
        font-size: 1.4rem;
      }

      input[type="text"]{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #333;
        width: 300px;
        font-size: 1.4rem;
        color: #2c3e50;
        font-weight: 300;
        background: rgba(0,0,0,0.02);
        padding: 0.5rem;
      }
      button{
        background: #333;
        padding: 0.5rem;
        font-weight: 300;
        color: #fff;
        border: none;
        cursor: pointer;
        font-size: 1.4rem;
      }
      ul.results {
        list-style-type: none;
        padding: 0;
      }

      .results li {
        display: inline-block;
        margin: 10px;
        border: solid 1px #333;
        padding: 0.5rem;
        width: 200px;
        min-height: 100px;
        color: #fff;
        background: rgba(0,0,0,0.7);
      }
      ul.errors {
        list-style-type: none;
      }
      .errors li {
        border: 1px solid red;
        color: red;
        padding: 0.5rem;
        margin: 10px 0;
      }

      a {
        color: #42b983;
      }
      </style>
