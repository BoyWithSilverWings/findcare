<template>
  <section class="results-screen">
    <h3 class="title-text">
      Results for <span class="search-term">{{ $route.params.q }}</span>
    </h3>
    <div class="result-container">
      <Card v-for="item in items" :key="item.id" v-bind:item="item" />
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import constants from '../constants';
import Card from './Card';

export default {
  name: 'search-results',
  data() {
    return {
      items: [
        { id: 1, name: 'One Hospital', location: 'Place 1' },
        { id: 2, name: 'Two Hospital', location: 'Place 2' },
        { id: 1, name: 'One Hospital', location: 'Place 1' },
        { id: 2, name: 'Two Hospital', location: 'Place 2' },
        { id: 1, name: 'One Hospital', location: 'Place 1' },
        { id: 2, name: 'Two Hospital', location: 'Place 2' },
      ],
      loading: false,
      error: false,
    };
  },
  components: {
    Card,
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios.post(`${constants.BASE_URL}/search`, {
        query: this.$route.params.q,
      }).then((response) => {
        this.items = response.data;
        console.log(response.data);
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
  }
  .search-term {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: #E91E63; 
  }
  .result-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (max-width : 768px) {
    .title-text {
      font-size: 1.5rem;
    }
  }
</style>
