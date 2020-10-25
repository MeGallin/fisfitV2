const state = {
  imperialAnswer: null,
  weightInPounds: null,
  convertedWeightInKgs: null,
  heightInFeet: null,
  convertedHeightInMeters: null,
  numberInInches: null,
  feet: null,
  inches: null,
  convertedInchesToMetric: null,
  sexImperial: null,
};
const getters = {
  imperialAnswer: (state) => state.imperialAnswer,
  weightInPounds: (state) => state.weightInPounds,
  convertedWeightInKgs: (state) => state.convertedWeightInKgs,
  heightInFeet: (state) => state.heightInFeet,
  convertedHeightInMeters: (state) => state.convertedHeightInMeters,
  numberInInches: (state) => state.numberInInches,
  feet: (state) => state.feet,
  inches: (state) => state.inches,
  sexImperial: (state) => state.sexImperial,
};

//NB Vuex Crash course youtube 21 minutes
const actions = {
  handleConvertWeightToMetric({ commit }, weightInPounds) {
    if (weightInPounds !== undefined) {
      state.weightInPounds = weightInPounds;
      commit('handleConvertWeightToMetric', weightInPounds);
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
  handleAge({ commit }, age) {
    if (age !== undefined) {
      state.age = age;
    }
    commit('handleAge', age);
  },

  handleSex({ commit }, val) {
    state.sexImperial = val;
    state.sex = val;
    if (state.activity !== undefined) {
      if (state.sex === 'male') {
        return state.imperialAnswer;
      }
      if (state.sex === 'female') {
        return state.imperialAnswer;
      }
    }
    commit('handleSex', val);
  },

  handleActivity({ commit }, val) {
    state.activity = val;
    if (state.sex === 'male') {
      const stepOne = 13.7 * state.convertedWeightInKgs;
      const stepTwo =
        5 *
        ((state.convertedHeightInMeters + state.convertedInchesToMetric) * 100);
      const stepThree = 4.7 * state.age;

      state.imperialAnswer = (
        (66 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }

    if (state.sex === 'female') {
      const stepOne = 9.6 * state.convertedWeightInKgs;
      const stepTwo =
        1.8 * (state.convertedHeightInMeters + state.convertedInchesToMetric);
      const stepThree = 4.7 * state.age;
      state.imperialAnswer = (
        (955 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }
    commit('handleActivity', val);
  },
};

const mutations = {
  handleConvertWeightToMetric: function(state) {
    const converter = 0.4536;
    state.convertedWeightInKgs = Math.round(state.weightInPounds * converter);
  },
  handleConvertFeetToMetric: function(state) {
    const feetToMeters = 0.3048;
    state.convertedHeightInMeters = state.feet * feetToMeters;
  },
  handleConvertInchesToMetric: function(state) {
    const inchesToMeters = 0.0254;
    state.convertedInchesToMetric = state.inches * inchesToMeters;
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
