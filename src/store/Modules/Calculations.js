const state = {
  answer: null,
  isImperial: null,
  isMetric: true,
  numberInPounds: null,
  kiloGrams: null,
  numberInFeet: null,
  numberInInches: null,
  heightMeters: null,
  feet: null,
  inches: null,
  heightMetersFoo: null,
  heightMetersBoo: null,
  age: null,
  BMR: null,
  activity: null,
  sex: null,
  metres: null,
  weightKgs: null,
};
const getters = {
  answer: (state) => state.answer,
  isImperial: (state) => state.isImperial,
  isMetric: (state) => state.isMetric,
  numberInPounds: (state) => state.numberInPounds,
  kiloGrams: (state) => state.kiloGrams,
  numberInFeet: (state) => state.numberInFeet,
  numberInInches: (state) => state.numberInInches,
  heightMeters: (state) => state.heightMeters,
  feet: (state) => state.feet,
  inches: (state) => state.inches,
  age: (state) => state.age,
  BMR: (state) => state.BMR,
  activity: (state) => state.activity,
  sex: (state) => state.sex,
  metres: (state) => state.metres,
  weightKgs: (state) => state.weightKgs,
};

//NB Vuex Crash course youtube 21 minutes
const actions = {
  toggleMetricImperial({ commit }, payload) {
    if (payload === 'imperial' && payload !== undefined) {
      state.isImperial = payload;
      state.isMetric = false;
    }
    if (payload === 'metric' && payload !== undefined) {
      state.isMetric = payload;
      state.isImperial = false;
    }
    commit('toggleMetricImperial', payload);
  },
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
  handleAge({ commit }, age) {
    if (age !== undefined) {
      state.age = age;
      commit('handleAge', age);
    }
  },

  handleActivity({ commit }, val) {
    state.activity = val;
    if (state.sex === 'male') {
      if (state.kiloGrams) {
        state.weightKgs = state.kiloGrams;
        state.answer =
          (66 +
            13.7 * state.weightKgs +
            5 * state.heightMeters -
            4.7 * state.age) *
          state.activity;
      }
    }
    if (state.sex === 'female') {
      if (state.kiloGrams) {
        state.weightKgs = state.kiloGrams;
        state.answer =
          (955 +
            9.6 * state.kiloGrams +
            1.8 * state.heightMeters -
            4.7 * state.age) *
          state.activity;
      }
    }

    commit('handleActivity', val);
  },
  handleSex({ commit }, val) {
    state.sex = val;
    if (state.sex === 'male') {
      state.answer =
        (66 +
          13.7 * state.kiloGrams +
          5 * state.heightMeters -
          4.7 * state.age) *
        state.activity;
    }
    if (state.sex === 'female') {
      state.answer =
        (955 +
          9.6 * state.kiloGrams +
          1.8 * state.heightMeters -
          4.7 * state.age) *
        state.activity;
    }

    commit('handleSex', val);
  },
  handleHeightInMetres({ commit }, val) {
    console.log(val);
    state.heightMeters = val;
    commit('handleHeightInMetres', val);
  },
  handleWeightKg({ commit }, val) {
    console.log(val);
    state.weightKgs = val;
    commit('handleWeightKg', val);
  },
};

const mutations = {
  toggleMetricImperial: function(state) {
    if (state.isImperial === true) {
      return state.isImperial;
    }
    if (state.isMetric === true) {
      return state.isMetric;
    }
  },
  handleConvertWeightToMetric: function(state) {
    const converter = 0.4536;
    return (state.kiloGrams = Math.round(state.numberInPounds * converter));
  },
  handleConvertFeetToMetric: function(state) {
    const feetToMeters = 0.3048;
    state.heightMetersBoo = state.feet * feetToMeters;
  },
  handleConvertInchesToMetric: function(state) {
    const inchesToMeters = 0.0254;
    state.heightMetersFoo = state.inches * inchesToMeters;
    return (state.heightMeters = state.heightMetersFoo + state.heightMetersBoo);
  },
  handleAge: function(state) {
    return state.age;
  },
  handleActivity: function(state) {
    return state.activity;
  },
  handleSex: function(state) {
    return state.sex;
  },
  handleHeightInMetres: function(state) {
    return state.heightMeters;
  },
  handleWeightKg: function(state) {
    return state.weightKgs;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
