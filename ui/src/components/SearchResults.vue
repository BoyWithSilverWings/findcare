<template>
  <section class="results-screen">
    <h3 class="title-text">
      <span>Results for <span class="search-term">{{ q }}</span></span>
    </h3>
    <div class="filter-section">
      <FilterBar/>
    </div>
    <div class="result-container">
      <Card v-for="item in items" :key="item.id" v-bind:item="item" />
      <Loader v-if="loading"/>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../constants';
import Card from './Card';
import Loader from './Loader';
import FilterBar from './FilterBar';

export default {
  name: 'search-results',
  props: ['q'],
  data() {
    return {
      items: [],
      loading: false,
      error: false,
    };
  },
  components: {
    Card,
    Loader,
    FilterBar
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.post(`${BASE_URL}/search`, {
        query: this.$route.params.q,
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
  .results-screen {
    margin: 0 auto;
    min-height: 100%;
    padding-bottom: 50px;
  }

  .search-term {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: #E91E63; 
  }

  .result-container {
    display: flex;
    width: 80%;
    min-height: 100%;
    margin-left: 20%;
    background-color: #F5F5F5;
    flex-wrap: wrap;
    justify-content: center;
  }

  .filter-section {
    height: 100%;
    position: fixed;
    background-color: white;
    overflow: auto;
  }

  @media only screen and (max-width : 768px) {
    .title-text {
      font-size: 1.5rem;
    }
  }
</style>
