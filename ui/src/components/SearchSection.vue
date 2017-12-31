<template>
  <section class="search-section">
  <img src="../assets/logo.svg" alt="Find Hospitals" class="logo">
  <form v-on:submit.prevent="onSubmit" autocomplete="off">
    <div class="input-group">
      <input 
        type="text" 
        name="search" 
        placeholder="Search Terms..."
        class="search-bar"
        v-model.trim="searchTerm"
        v-on:input="showSuggestions"
      />
      <ul 
        class="suggestion-section" 
        v-if="!hideSuggestions" 
        tabindex="0"
        v-on:blur="hideSuggestionsSection"
      >
        <li v-for="item in items" v-bind:key="item.id" class="list-item">
          {{item.text}}
        </li>
      </ul>
    </div>
    <button type="submit" class="search-button">Search</button>
  </form>
  <button 
    class="secondary-button nearest-hos" 
    v-on:click.prevent="nearestHospital"
  >
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
      hideSuggestions: true,
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
      if (this.searchTerm.length > 2) {
        this.fetchData();
      }
    },
    hideSuggestionsSection() {
      this.hideSuggestions = true;
    },
    fetchData() {
      this.loading = true;
      axios.post(`${BASE_URL}/suggest`, {
        q: this.searchTerm,
      }).then((response) => {
        this.items = response.data;
      }).catch((error) => {
        this.error = error;
      }).then(() => {
        this.loading = false;
        this.hideSuggestions = false;
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

li:last-child {
  margin-bottom: 10px;
}

a {
  color: #35495E;
}

.search-section {
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
  margin-top: 5rem;
}

.search-bar {
  display: block;
  margin: 0;
  width: 98%;
  font-size: 18px;
  margin-top: 20px;
  box-shadow: none;
  border-radius: 0;
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

.input-group {
  width: 100%;
  position: relative;
}

.suggestion-section {
  position: relative;
  top: 80%;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  min-height: 8rem;
  z-index: 5;
  list-style-type: none;
  font-size: 1rem;
  padding: 0;
}

.suggestion-section:focus {
  outline: none;
}

.suggestion-section .list-item {
  border-top: 1px solid #333;
  display: block;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  text-align: left;
}

.suggestion-section .list-item:hover {
  background-color: #E3F2FD ;
  border-left: 1px solid #333;
}

.suggestion-section .list-item:last-child {
  border-bottom: 1px solid #333;
}

.search-button:focus {
  outline: none;
}

.secondary-button {
  background-color: white;
  color: #E91E63;
  border: 1px solid #E91E63;
  cursor: pointer;
  padding: 15px 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  outline: none;
}

.secondary-button:focus, 
.secondary-button:active {
  outline: none;
}

.nearest-hos {
  margin-top: 1rem;
}

</style>
