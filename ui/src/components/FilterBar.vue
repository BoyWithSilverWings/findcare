<template>
  <section class="filter-bar">
    <h3 class="title">FILTER RESULTS</h3>
    <SingleFilter heading="types" v-bind:items="types" />
    <SingleFilter heading="states" v-bind:items="states" />
    <SingleFilter heading="states" v-bind:items="discipline" />
  </section>
</template>

<script>
import { TYPES, STATES, DISCIPLINE } from '@/constants';
import SingleFilter from './SingleFilter';

export default {
  data() {
    return {
      types: TYPES,
      states: STATES,
      discipline: DISCIPLINE
    };
  },
  components: {
    SingleFilter
  }
};
</script>

<style scoped>
  .title {
    text-align: center;
  }
</style>


