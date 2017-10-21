<template>
  <section class="search-section">
    
  <img src="../assets/logo.svg" alt="Find Hospitals" class="logo">
  <form v-on:submit.prevent="onSubmit">
    <input 
      type="text" 
      name="search" 
      placeholder="Search Terms..."
      class="search-bar"
    />
    <button type="submit" class="search-button">Search</button>
  </form>
  </section>
</template>

<script>
export default {
  name: 'search-section',
  methods: {
    onSubmit(event) {
      this.$router.push({ name: 'search', params: { q: event.target.search.value } });
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
  transition: all 0.3s;
}

.search-button:hover {
  background-color: white;
  color: #E91E63;
  border: 1px solid #E91E63;
}

.search-button:focus {
  outline: none;
}
</style>
