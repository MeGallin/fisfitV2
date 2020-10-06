import Vue from 'vue';
import Vuex from 'vuex';
import Calculations from './Modules/Calculations';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Calculations,
  },
});
