const state = {
  metricAnswer: null,
  kiloGrams: null,
  heightMeters: null,
  metres: null,
  weightKgs: null,
  sexMetric: null,
  ageMetric: null,
  activityMetric: null,
};
const getters = {
  metricAnswer: (state) => state.metricAnswer,
  kiloGrams: (state) => state.kiloGrams,
  heightMeters: (state) => state.heightMeters,
  metres: (state) => state.metres,
  weightKgs: (state) => state.weightKgs,
  sexMetric: (state) => state.sexMetric,
  ageMetric: (state) => state.ageMetric,
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

  handleAge({ commit }, age) {
    if (age !== undefined) {
      state.ageMetric = age;
      state.age = age;
    }
    commit('handleAge', age);
  },

  handleSex({ commit }, val) {
    state.sexMetric = val;
    state.sex = val;
    if (state.sex === 'male') {
      return state.metricAnswer;
    }
    if (state.sex === 'female') {
      return state.metricAnswer;
    }
    commit('handleSex', val);
  },
  handleActivity({ commit }, val) {
    state.activityMetric = val;
    state.activity = val;
    if (state.sex === 'male') {
      const stepOne = 13.7 * state.weightKgs;
      const stepTwo = 5 * state.heightMeters;
      const stepThree = 4.7 * state.age;
      state.metricAnswer = (
        (66 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }
    if (state.sex === 'female') {
      const stepOne = 9.6 * state.weightKgs;
      const stepTwo = 1.8 * (state.heightMeters / 100);
      const stepThree = 4.7 * state.age;
      state.metricAnswer = (
        (955 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }
    commit('handleActivity', val);
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

  handleSex: function(state) {
    return state.sex;
  },
  handleActivity: function(state) {
    return state.activity;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
