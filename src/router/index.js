/* eslint-disable import/extensions */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import BlogList from '../components/blog/BlogList.vue';
import Blog from '../components/blog/Blog.vue';
import MyTable from '../components/MyTable.vue';
import User from '../components/user/User.vue';
import UserHome from '../components/user/UserHome.vue';
import UserProfile from '../components/user/UserProfile.vue';
import UserSettings from '../components/user/UserSettings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HelloWorld,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogList,
    },
    {
      path: '/blogs/:id',
      name: 'blog',
      component: Blog,
      props: true,
    },
    {
      path: '/lifecycles/created',
      name: 'table-test',
      component: MyTable,
    },
    {
      // https://github.com/pillarjs/path-to-regexp#parameters
      path: '/user/:id(\\d+)',
      component: User,
      props: true,
      children: [
        {
          path: '',
          name: 'user-home',
          component: UserHome,
        },
        {
          path: 'profile',
          name: 'user-profie',
          component: UserProfile,
        },
        {
          path: 'settings',
          name: 'user-settings',
          component: UserSettings,
        },
        {
          path: 'all',
          name: 'user-all',
          // components with an 's'
          components: {
            default: UserHome,
            profile: UserProfile,
            settings: UserSettings,
          },
        },
      ],
    },
  ],
});
