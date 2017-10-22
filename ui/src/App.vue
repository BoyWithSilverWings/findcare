<template>
  <div id="app">
    <header>
      <router-link to="/">
        <span>Find Hospitals</span>
      </router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

main {
  margin-top: 40px;
  height: 100%;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
}

header a {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  text-decoration: none;
  color: #ffffff;
}

.logo {
  width: 35vmin;
}

.green {
  color: #00E676;
}

.title-text {
  text-align: center;
  font-size: 2rem;
}
</style>
