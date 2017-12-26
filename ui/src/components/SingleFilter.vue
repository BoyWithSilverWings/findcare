<template>
  <div class="one-filter">
    <h4 class="title">{{heading}}</h4>
    <ul class="filter-head">
      <li v-for="item in items" v-bind:key="item">
        <label v-bind:for="item" class="label">
          <input type="checkbox" v-bind:id="item" v-bind:value="item" v-on:change="onChange($event.target.value)"/>
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
  methods: {
    onChange(value) {
      const name = this.heading;
      this.$emit('filterChange', { name, value });
    }
  }
};
</script>

<style scoped>
  .title {
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
  }

  .label {
    user-select: none; 
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


