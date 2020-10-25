const state = {
  metricAnswer: null,
  kiloGrams: null,
  heightMeters: null,
  metres: null,
  weightKgs: null,
};
const getters = {
  metricAnswer: (state) => state.metricAnswer,
  kiloGrams: (state) => state.kiloGrams,
  heightMeters: (state) => state.heightMeters,
  metres: (state) => state.metres,
  weightKgs: (state) => state.weightKgs,
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

  handleSex({ commit }, val) {
    state.sex = val;
    if (state.sex === 'male') {
      const stepOne = 13.7 * state.weightKgs;
      const stepTwo = 5 * state.heightMeters;
      const stepThree = 4.7 * state.age;
      state.metricAnswer =
        (66 + stepOne + stepTwo - stepThree) * state.activity;
    }
    if (state.sex === 'female') {
      const stepOne = 9.6 * state.weightKgs;
      const stepTwo = 1.8 * (state.heightMeters / 100);
      const stepThree = 4.7 * state.age;
      state.metricAnswer =
        (955 + stepOne + stepTwo - stepThree) * state.activity;
    }
    commit('handleSex', val);
  },
  handleActivity({ commit }, val) {
    state.activity = val;
    if (state.sex === 'male') {
      const stepOne = 13.7 * state.weightKgs;
      const stepTwo = 5 * state.heightMeters;
      const stepThree = 4.7 * state.age;
      state.metricAnswer =
        (66 + stepOne + stepTwo - stepThree) * state.activity;
    }
    if (state.sex === 'female') {
      const stepOne = 9.6 * state.weightKgs;
      const stepTwo = 1.8 * (state.heightMeters / 100);
      const stepThree = 4.7 * state.age;
      state.metricAnswer =
        (955 + stepOne + stepTwo - stepThree) * state.activity;
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
