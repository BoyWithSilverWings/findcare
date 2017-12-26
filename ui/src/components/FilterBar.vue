<template>
  <section class="filter-bar">
    <h3 class="title">FILTER RESULTS</h3>
    <SingleFilter 
      heading="types" 
      @filterChange="filterChange" 
      v-bind:items="types"
    />
    <SingleFilter heading="states" v-bind:items="states" @filterChange="filterChange" />
    <SingleFilter heading="disciplines" v-bind:items="discipline" @filterChange="filterChange" />
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
  },
  methods: {
    filterChange(value) {
      this.$emit('filterChange', value);
    }
  }
};
</script>

<style scoped>
  .title {
    text-align: center;
  }
</style>


