import Vue from 'vue';
import Vuex from 'vuex';
import ImperialCalculations from './Modules/ImperialCalculations';
import CommonInput from './Modules/CommonInput';
import MetricCalculations from './Modules/MetricCalculations';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ImperialCalculations,
    CommonInput,
    MetricCalculations,
  },
});
