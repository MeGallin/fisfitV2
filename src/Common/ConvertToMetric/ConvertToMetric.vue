<template>
  <section>
    <button v-if="isMetric" 
    @click="toggleMetricImperial('imperial')"
     :disabled ="weightKgs > 0"
    >
      Switch To Imperial
    </button>
    <button v-if="isImperial" 
    @click="toggleMetricImperial('metric')"
     :disabled ="weightInPounds > 0"
    >
      Switch To Metric
    </button>

    
    

    <div v-show="isImperial">
      <h3>Imperial</h3>

      <label>Weight in pounds</label>
      <input type="number" v-model="weightPounds" />
      <div v-if="convertedWeightInKgs">{{ weightInPounds }} lbs is {{ convertedWeightInKgs }} kG</div>

      <label>Height in Feet</label>
      <input type="number" v-model="heightFeet" />{{convertedHeightInMeters}}
      <label>Heigh in Inches</label>
      <input type="number" v-model="heightInInches" />
      <!-- <div
        v-if="feet && inches"
      >{{ feet }} ft {{ inches }} inches is {{ heightMeters / 100 }} meters.</div>-->
      <label>How old are you</label>
      <input type="number" v-model="ageInYears" />
      {{ age }}
      
    </div>

    <!-- Metric code -->
    <div v-show="isMetric">
      <h3>Metric</h3>
      <label>Weight</label>
      <input type="number" v-model="weightKg" />
      {{weightKgs}}
      <br />
      <label>Height in meters</label>
      <input type="number" v-model="heightInMetres" />
      {{heightMeters}}
      <br />
      <label>How old are you</label>
      <input type="number" v-model="ageInYears" />
      {{ age }}
    </div>

    <label for="sex">Male</label>
    <input
      type="radio"
      name="sex"
      value="male"
      :checked="sex === 'male'"
      @change="handleSex('male')"
      :disabled ="sexImperial === 'female'"
    />
    <br />
    <label for="sex">Female</label>
    <input
      type="radio"
      name="sex"
      value="female"
      :checked="sex === 'female'"
      @change="handleSex('female')"
      :disabled ="sexImperial === 'male'"
    />

    <label for="activity">Sedentary{{activity}}</label>
    <input
      type="radio"
      name="activity"
      value="1.2"
      :checked="activity === 1.2"
      @change="handleActivity(1.2)"
    />

    <br />
    <label for="activity">light-activity</label>
    <input
      type="radio"
      name="activity"
      value="1.375"
      :checked="activity === 1.375"
      @change="handleActivity(1.375)"
    />

    <br />
    <label for="activity">Moderately Active</label>
    <input
      type="radio"
      name="activity"
      value="1.55"
      :checked="activity === 1.55"
      @change="handleActivity(1.55)"
    />

    <br />
    <label for="activity">Very Active</label>
    <input
      type="radio"
      name="activity"
      value="1.725"
      :checked="activity === 1.725"
      @change="handleActivity(1.725)"
    />

    <br />
    <label for="activity">Extra Active</label>
    <input
      type="radio"
      name="activity"
      value="1.9"
      :checked="activity === 1.9"
      @change="handleActivity(1.9)"
    />
    <br>
    <div v-if="isMetric && metricAnswer !== null">
      for a {{sexImperial}}  weighing {{weightKgs}} and {{heightMeters}} cm tall your BTM is
      <h1>{{metricAnswer}}</h1>
    </div>
    <div v-if="isImperial && imperialAnswer !== null">
      for a {{sexImperial}}  weighing {{weightInPounds}}lb and {{feet}} ft {{inches}} inches  tall your BTM is
      <h1>{{imperialAnswer}}</h1>
       
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { mapGetters, mapActions, mapState } from "vuex";
import $tore from "../../store/index.js";

export default {
  
  data() {
    return {
      name: "Convert to metric"
    };
  },

  computed: {
    metricAnswer: {
      get: function() {},
      set: function() {}
    },
    imperialAnswer: {
      get: function() {},
      set: function() {}
    },
    answer: {
      get: function() {},
      set: function() {}
    },

    imperial: {
      get: function() {},
      set: function() {}
    },
    metric: {
      get: function() {},
      set: function() {}
    },

    activity: {
      get: function() {},
      set: function() {}
    },

    sex: {
      get: function() {},
      set: function() {}
    },

    sexImperial: {
      get: function() {},
      set: function() {}
    },

    weightPounds: {
      get: function() {
        return $tore.state.convertedWeightInMeters;
      },
      set: function(val) {
        setTimeout(() => {
          $tore.dispatch("handleConvertWeightToMetric", val);
        }, 1000);
      }
    },
    heightFeet: {
      get: function() {
        return $tore.state.convertedHeightInMeters;
      },
      set: function(val) {
        setTimeout(() => {
          $tore.dispatch("handleConvertFeetToMetric", val);
        }, 1000);
      }
    },
    heightInInches: {
      get: function() {
        return $tore.state.inches;
      },
      set: function(val) {
        setTimeout(() => {
          $tore.dispatch("handleConvertInchesToMetric", val);
        }, 1000);
      }
    },
    weightKg: {     
      get: function() {         
        return $tore.state.weightKgs;
      },
      set: function(val) {     
        setTimeout(() => {
          $tore.dispatch("handleWeightKg", val);
        }, 1000);
      }
    },
    heightInMetres: {
      get: function() {
        return $tore.state.metres;
      },
      set: function(val) {
        setTimeout(() => {
          $tore.dispatch("handleHeightInMetres", val);
        }, 1000);
      }
    },
    ageInYears: {
      get: function() {
        return $tore.state.age;
      },
      set: function(val) {
        setTimeout(() => {
          $tore.dispatch("handleAge", val);
        }, 1000);
      }
    },

    ...mapState({
      metricAnswer: null,
      imperialAnswer: null,
      answer: null,
      isImperial: true,
      isMetric: null,
      weightInPounds: null,
      convertedWeightInKgs: null,
      kiloGrams: null,
      heightInFeet: null,
      convertedHeightInMeters:null,
      numberInInches: null,
      heightMeters: null,
      feet: null,
      inches: null,
      heightMetersFoo: null,
      heightMetersBoo: null,
      age: null,
      BMR: null,
      sedentary: null,
      sex: null,
      sexImperial:null,
      metres: null,
      weightKgs: null
    }),
    ...mapGetters({
      metricAnswer:"metricAnswer",
      imperialAnswer:"imperialAnswer",
      answer: "answer",
      isImperial: "isImperial",
      isMetric: "isMetric",
      weightInPounds: "weightInPounds",
      convertedWeightInKgs: "convertedWeightInKgs",
      kiloGrams: "kiloGrams",
      heightInFeet: "heightInFeet",
      convertedHeightInMeters:"convertedHeightInMeters",
      numberInInches: "numberInInches",
      heightMeters: "heightMeters",
      feet: "feet",
      inches: "inches",
      age: "age",
      BMR: "BMR",
      activity: "activity",
      sex: "sex",
      sexImperial: "sexImperial",
      metres: "metres",
      weightKgs: "weightKgs"
    })
  },

  methods: {
    ...mapActions([
      "handleSex",
      "toggleMetricImperial",
      "handleConvertWeightToMetric",
      "handleConvertFeetToMetric",
      "handleConvertInchesToMetric",
      "handleAge",
      "handleActivity",
      "handleHeightInMetres",
      "handleWeightKg"
    ])
  }
};
</script>

<style scoped src="./ConvertToMetric.css"></style>
