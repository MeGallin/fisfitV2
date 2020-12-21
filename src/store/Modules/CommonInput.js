const state = {
  answer: null,
  isImperial: false,
  isMetric: true,
  BMR: null,
  sex: null,
  age: null,
  activity: null,
  isSubmitted: true,
  hideCookiesWarning: 'yes',
};
const getters = {
  answer: (state) => state.answer,
  isImperial: (state) => state.isImperial,
  isMetric: (state) => state.isMetric,
  BMR: (state) => state.BMR,
  sex: (state) => state.sex,
  age: (state) => state.age,
  activity: (state) => state.activity,
  isSubmitted: (state) => state.isSubmitted,
  hideCookiesWarning: (state) => state.hideCookiesWarning,
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
  handleCommit({ commit }, payload) {
    if (payload === 'isSubmitted') {
      state.isSubmitted = true;
    }
    commit('handleCommit', payload);
  },
  handleCookiesWarning({ commit }, payload) {
    if (payload === 'yes') {
      state.hideCookiesWarning = payload;
    }
    commit('handleCookiesWarning', payload);
  },
  handleResetImperial({ commit }, val) {
    state.imperialAnswer = val;
    state.weightInPounds = val;
    state.feet = val;
    state.inches = val;
    state.ageImperial = val;
    state.sexImperial = val;
    state.activityMetric = val;
    state.activity = val;
    state.age = val;
    commit('handleResetImperial', val);
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
  handleCommit: function(state) {
    console.log(state);
    return state.isSubmitted;
  },
  handleCookiesWarning: function(state) {
    return state.hideCookiesWarning;
  },
  handleResetImperial: function(state) {
    console.log(state);
    return [
      state.imperialAnswer,
      state.weightInPounds,
      state.feet,
      state.inches,
      state.ageImperial,
      state.sexImperial,
      state.activityMetric,
      state.activity,
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
