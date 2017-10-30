<template>
  <article class="card">
    <h3 :title="item.name">{{item.name}}</h3>
    <div class="subheading">
      <h4>{{item.location}}</h4>
      <h4>{{item.discipline}}</h4>
    </div>
  </article>
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
