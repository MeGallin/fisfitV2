import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home/Home.vue';
import About from '../components/About/About.vue';
import PersonalTraining from '../components/Personal-Training/PersonalTraining.vue';
import OnlineCoaching from '../components/Online-Coaching/OnlineCoaching.vue';
import CalorieCalculator from '../components/CalorieCalculator/CalorieCalculator.vue';
import PathNotFound from '../components/PathNotFound/PathNotFound.vue';

Vue.config.productionTip = false;
// Need this for vue routing
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/personal-training', component: PersonalTraining },
  { path: '/online-coaching', component: OnlineCoaching },
  { path: '/calorie-calculator', component: CalorieCalculator },
  { path: '*', component: PathNotFound },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
