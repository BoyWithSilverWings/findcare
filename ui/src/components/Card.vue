<template>
  <router-link :to="{name: 'detail', params: {'hospital': item.id}}" class="card">
  <article>
    <h3 :title="item.name">{{item.name}}</h3>
    <div class="subheading">
      <h4>{{item.location}}</h4>
      <h4>{{item.discipline}}</h4>
    </div>
  </article>
  </router-link>
</template>

<script>

export default {
  props: ['item'],
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    width: 100%;
    overflow: hidden;
    display: inline-block;
    margin: 1rem;
    padding: 0 10px;
    border: 1px solid #F8BBD0;
    cursor: pointer;
    box-shadow: none;
    transition: box-shadow 0.5s ease-in-out;
    color: #2c3e50;
    text-decoration: none;
  }

  .card:hover {
    box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);
  }

  .card:visited {
    color: #424242;
  }

  .subheading {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width : 700px) {
    .card {
      width: 100%;
    }
  }
</style>
