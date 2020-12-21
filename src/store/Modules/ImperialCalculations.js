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
  handleAge(context, age) {
    if (context.rootState.CommonInput.age !== undefined) {
      state.age = age;
    }
    context.commit('handleAge', age);
  },

 

  handleActivity(context, val) {
    state.activity = val;
    if (context.rootState.CommonInput.sex === 'male') {
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

    if (context.rootState.CommonInput.sex === 'female') {
      const stepOne = 9.6 * state.convertedWeightInKgs;
      const stepTwo =
        1.8 * (state.convertedHeightInMeters + state.convertedInchesToMetric);
      const stepThree = 4.7 * state.age;
      state.imperialAnswer = (
        (955 + stepOne + stepTwo - stepThree) *
        state.activity
      ).toFixed(2);
    }
    context.commit('handleActivity', val);
  },
  handleResetImperial(context, val) {
    state.imperialAnswer = val;
    state.weightInPounds = val;
    state.feet = val;
    state.inches = val;
     state.activityMetric = val;
     context.rootState.CommonInput.age = val;
    context.commit('handleResetImperial', val);
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

 
  handleActivity: function(state) {
    return state.activity;
  },
  handleResetImperial: function(state) {
    return [
      state.imperialAnswer,
      state.weightInPounds,
      state.feet,
      state.inches,   
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
