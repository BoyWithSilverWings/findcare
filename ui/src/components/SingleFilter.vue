<template>
  <div class="one-filter">
    <h4 class="title">{{heading}}</h4>
    <ul class="filter-head">
      <li v-for="item in items" v-bind:key="item">
        <label for="">
          <input type="checkbox"/>
          {{item}}
        </label>
      </li>
    </ul>
    <a v-on:click="show('')" class="moreorless">show more</a>
  </div>
</template>

<script>
export default {
  name: 'SingleFilter',
  props: [
    'heading',
    'items'
  ],
};
</script>

<style scoped>
  .title {
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
  }

  .filter-head {
    list-style-type: none;
  }

  .moreorless {
    color: #EC407A;
    display: block;
    text-align: center;
  }
</style>


