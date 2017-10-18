import Vue from 'vue';
import Router from 'vue-router';
import SearchSection from '@/components/SearchSection';
import SearchResults from '@/components/SearchResults';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: SearchSection,
    },
    {
      path: '/search/:q',
      name: 'search',
      component: SearchResults,
    },
  ],
});
