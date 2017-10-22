<template>
  <section class="results-screen">
    <h3 class="title-text">
      <span>Your Nearest Hospitals</span>
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
  name: 'nearest',
  data() {
    return {
      items: [],
      loading: false,
      error: false,
    };
  },
  components: {
    Card,
  },
  created() {
    this.findLocation();
  },
  methods: {
    findLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const params = {
            q: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
          };
          this.fetchData(params);
        });
      }
    },
    fetchData(coordinates) {
      this.loading = true;
      axios.post(`${constants.BASE_URL}/search`, {
        query: coordinates,
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
