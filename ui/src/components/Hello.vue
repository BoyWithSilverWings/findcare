<template>
  <section class="search-section">
    <form>
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
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
}

.search-bar {
  display: block;
  margin: 0;
  width: 100%;
  font-size: 18px;
  appearance: none;
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
  letter-spacing: 1px;
  font-weight: 700;
  outline: none;
  position: relative;
  transition: all 0.3s;
  transform: scale(0.9);
}

.search-button:hover {
  background-color: white;
  color: #E91E63;
  border: 1px solid #E91E63;
  transform: scale(1);
}

.search-button:focus {
  outline: none;
}
</style>
