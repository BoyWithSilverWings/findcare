import Vue from 'vue';
import Router from 'vue-router';
import SearchSection from '@/components/SearchSection';
import SearchResults from '@/components/SearchResults';
import NearestResults from '@/components/NearestResults';

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
      props: true,
      component: SearchResults,
    },
    {
      path: '/nearest',
      name: 'nearest',
      props: true,
      component: NearestResults,
    }
  ],
});
