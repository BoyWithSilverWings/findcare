<template>
  <section class="search-section">
  <img src="../assets/logo.svg" alt="Find Hospitals" class="logo">
  <form v-on:submit.prevent="onSubmit">
    <input 
      type="text" 
      name="search" 
      placeholder="Search Terms..."
      class="search-bar"
      v-model.trim="searchTerm"
      v-on:input="showSuggestions"
    />
    <button type="submit" class="search-button">Search</button>
  </form>
  <button class="secondary-button nearest-hos" v-on:click.prevent="nearestHospital">
    FIND NEAREST HOSPITAL
  </button>
  </section>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/constants';

export default {
  name: 'search-section',
  data() {
    return {
      searchTerm: '',
      items: [],
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: 'search', params: { q: this.searchTerm } });
    },
    nearestHospital() {
      this.$router.push({ name: 'nearest' });
    },
    showSuggestions() {
      console.log(this.searchTerm);
    },
    fetchData() {
      this.loading = true;
      axios.post(`${BASE_URL}/suggest`, {
        query: this.searchTerm,
      }).then((response) => {
        this.items = response.data;
      }).catch((error) => {
        this.error = error;
      }).then(() => {
        this.loading = false;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.search-section {
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
}

.search-bar {
  display: block;
  margin: 0;
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
  box-shadow: none;
  border-radius: none;
  padding: 10px;
  border: solid 1px #dcdcdc;
  transition: box-shadow 0.3s, border 0.3s;
}

.search-bar:focus {
  outline: none;
  border: solid 1px #707070;
  box-shadow: 0 0 5px 1px #969696;
}

.search-button {
  border: 3px solid #fff;
  color: #fff;
  background-color: #E91E63;
  cursor: pointer;
  padding: 20px 40px;
  display: inline-block;
  margin: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  outline: none;
  position: relative;
}

.search-button:focus {
  outline: none;
}

.secondary-button {
  background-color: white;
  color: #E91E63;
  border: 1px solid #E91E63;
  cursor: pointer;
  padding: 20px 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  outline: none;
}

.secondary-button:focus, 
.secondary-button:active {
  outline: none;
}

.nearest-hos {
  margin-top: 2rem;
}

</style>
