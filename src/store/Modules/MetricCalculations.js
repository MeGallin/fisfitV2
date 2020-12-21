const state = {
  metricAnswer: null,
  kiloGrams: null,
  heightMeters: null,
  metres: null,
  weightKgs: null,
  sex: null,
  activityMetric: null,
};
const getters = {
  metricAnswer: (state) => state.metricAnswer,
  kiloGrams: (state) => state.kiloGrams,
  heightMeters: (state) => state.heightMeters,
  metres: (state) => state.metres,
  weightKgs: (state) => state.weightKgs,
  activityMetric: (state) => state.activityMetric,
};

//NB Vuex Crash course youtube 21 minutes
const actions = {
  handleHeightInMetres({ commit }, val) {
    state.heightMeters = val;
    commit('handleHeightInMetres', val);
  },
  handleWeightKg({ commit }, val) {
    state.weightKgs = val;
    commit('handleWeightKg', val);
  },

  handleAge(context, age) {
    if (context.rootState.CommonInput.age !== undefined) { 
      state.age = age;
    }
    context.commit('handleAge', age);
  },

  handleActivity(context, val) {  
    state.activityMetric = val;
    state.activity = val;
    if (context.rootState.CommonInput.sex === 'male') {
      const stepOne = 13.7 * state.weightKgs;
      const stepTwo = 5 * state.heightMeters;
      const stepThree = 4.7 * state.age;
      state.metricAnswer = (
        (66 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }
    if (context.rootState.CommonInput.sex === 'female') {
      const stepOne = 9.6 * state.weightKgs;
      const stepTwo = 1.8 * (state.heightMeters / 100);
      const stepThree = 4.7 * state.age;
      state.metricAnswer = (
        (955 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }
    context.commit('handleActivity', val);
  },
  handleResetMetric(context, val) {
    console.log('STATE.AGR', val);
    state.metricAnswer = val;
    state.weightKgs = val;
    state.heightMeters = val;
    state.activityMetric = val;
    context.rootState.CommonInput.age = val;
    context.commit('handleResetMetric', val);
  },
};

const mutations = {
  handleHeightInMetres: function(state) {
    return state.heightMeters;
  },
  handleWeightKg: function(state) {
    return state.weightKgs;
  },

  handleAge: function(state) {
    return state.age;
  },

  handleActivity: function(state) {
    return state.activity;
  },
  handleResetMetric: function(state) {
    return [
      state.metricAnswer,
      state.weightKgs,
      state.heightMeters,
      state.sex,
      state.activityMetric,
      state.age,
    ];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
