const state = {
  numberInPounds: null,

  numberInFeet: null,
  numberInInches: null,

  feet: null,
  inches: null,
  heightMetersFoo: null,
  heightMetersBoo: null,
};
const getters = {
  numberInPounds: (state) => state.numberInPounds,

  numberInFeet: (state) => state.numberInFeet,
  numberInInches: (state) => state.numberInInches,

  feet: (state) => state.feet,
  inches: (state) => state.inches,
};

//NB Vuex Crash course youtube 21 minutes
const actions = {
  handleConvertWeightToMetric({ commit }, numberInPounds) {
    if (numberInPounds !== undefined) {
      state.numberInPounds = numberInPounds;
      commit('handleConvertWeightToMetric', numberInPounds);
    }
  },
  handleConvertFeetToMetric({ commit }, feet) {
    if (feet !== undefined) {
      state.feet = feet;
      commit('handleConvertFeetToMetric', feet);
    }
  },
  handleConvertInchesToMetric({ commit }, inches) {
    if (inches !== undefined) {
      state.inches = inches;
      commit('handleConvertInchesToMetric', inches);
    }
  },
};

const mutations = {
  handleConvertWeightToMetric: function(state) {
    // const converter = 0.4536;
    console.log(state);
  },
  handleConvertFeetToMetric: function(state) {
    // const feetToMeters = 0.3048;
    console.log(state);
  },
  handleConvertInchesToMetric: function(state) {
    const inchesToMeters = 0.0254;
    state.heightMetersFoo = state.inches * inchesToMeters;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
