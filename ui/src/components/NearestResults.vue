<template>
  <section class="results-screen">
    <h3 class="title-text">
      <span>Your Nearest Hospitals</span>
    </h3>
    <div class="result-container">
      <Card v-for="item in items" :key="item.id" v-bind:item="item" />
      <Loader v-if="loading"/>
    </div>
    <modal name="geolocation"
         :width="300"
         height="auto"
    >
      <div class="modal-body">
        <p>We need to access your geolocation for giving you accurate results.</p>
        <p>Please click <span class="green">allow</span> when prompted</p>
      </div>
      <div class="button-container">
        <button class="btn okay-button" v-on:click="findLocation">👍&nbsp; DONE</button>
        <button class="btn dismiss-button" v-on:click="dismissModal">NO, THANKS 🙅‍♂️ </button>
      </div>
    </modal>
  </section>
</template>

<script>
import axios from 'axios';
import constants from '../constants';
import Card from './Card';
import Loader from './Loader';

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
    Loader
  },
  mounted() {
    this.showModal();
  },
  methods: {
    findLocation() {
      this.loading = true;
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const params = {
            coordinates: {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
          };
          this.fetchData(params);
        });
      } else {
        console.log('Location not available');
      }
      this.dismissModal();
    },
    fetchData(coordinates) {
      axios.post(`${constants.BASE_URL}/nearest`, {
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
    showModal() {
      this.$modal.show('geolocation');
    },
    dismissModal() {
      this.$modal.hide('geolocation');
    }
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

  .modal-body {
    padding: 30px 20px;
    text-align: center;
  }

  .button-container {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .btn {
    background: white;
    outline: none;
    width: 100%;
    border: 1px solid gray;
    padding: 10px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .okay-button {
    border: 1px solid #00E676;
  }

  .dismiss-button {
    border: 1px solid #FF9100;
  }

  @media only screen and (max-width : 768px) {
    .title-text {
      font-size: 1.5rem;
    }
  }
</style>
