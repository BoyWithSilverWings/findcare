<template>
  <section class="filter-bar">
    <h3 class="title">FILTER RESULTS</h3>
    <SingleFilter heading="types" v-bind:items="types" />
    <SingleFilter heading="states" v-bind:items="states" />
  </section>
</template>

<script>
import { TYPES, STATES } from '@/constants';
import SingleFilter from './SingleFilter';

export default {
  data() {
    return {
      types: TYPES,
      states: STATES,
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


