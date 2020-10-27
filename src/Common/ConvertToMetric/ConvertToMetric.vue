<template>
  <section>
    <h1>BMR CALCULATOR</h1>
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

<div v-if="isMetric && metricAnswer !== null">
      <h3>Metric</h3>
  <p> For a 
    <span class="answer">{{ageMetric}}</span> year old 
    <span class="answer">{{sexImperial}}</span>  weighing 
    <span class="answer">{{weightKgs}}</span>  kG standing at 
    <span class="answer">{{heightMeters}}</span> cm tall and being 
    <span class="answer" v-if="activityMetric === 1.2">Sedentary</span>
    <span class="answer" v-if="activityMetric === 1.375">lightly-activity</span>
    <span class="answer" v-if="activityMetric === 1.55">moderately active</span>
    <span class="answer" v-if="activityMetric === 1.725">very active</span>
    <span class="answer" v-if="activityMetric === 1.9">extra active</span> your BTM is 
    <span class="answer">{{metricAnswer}}</span>
  </p>      
</div>

<div v-if="isImperial && imperialAnswer !== null">
      <h3>Imperial</h3>
  <p>For a 
      <span class="answer">{{ageMetric}}</span> year old 
      <span class="answer">{{sexImperial}}</span>  weighing 
      <span class="answer">{{weightInPounds}}</span> lb standing at 
      <span class="answer">{{feet}}</span> ft 
      <span class="answer">{{inches}}</span> inches  tall and being 
      <span class="answer" v-if="activityMetric === 1.2">Sedentary</span>
      <span class="answer" v-if="activityMetric === 1.375">lightly-activity</span>
      <span class="answer" v-if="activityMetric === 1.55">moderately active</span>
      <span class="answer" v-if="activityMetric === 1.725">very active</span>
      <span class="answer" v-if="activityMetric === 1.9">extra active</span> your BTM is
      <span class="answer">{{activity}}</span>
      <span class="answer">{{imperialAnswer}}</span>
  </p>      
</div>
    
  <div class="metric-wrapper">  
    <div v-show="isImperial" class="item">
      <div  class="form-style-bmr">
        <label>Weight in pounds 
          <span v-if="weightInPounds" class="confirmation">You entered {{ weightInPounds }} </span> lb. 
        </label>
        <input type="number" v-model="weightPounds" />

        <label>Height in Feet 
          <span v-if="feet" class="confirmation">You entered {{feet}} ft.</span>
        </label>
        <input type="number" v-model="heightFeet" />

        <label>Heigh in Inches 
          <span v-if="inches" class="confirmation">You entered {{inches}} inches.</span>
        </label>
        <input type="number" v-model="heightInInches" /> 

        <label>How old are you 
          <span v-if="ageMetric" class="confirmation">You entered {{ageMetric}} years.</span> 
        </label>
        <input type="number" v-model="ageInYears" />        
      </div>
    </div>
  
    <!-- Metric code --> 
  <div v-show="isMetric" class="item">   
    <div  class="form-style-bmr">    
      <label>Weight (kG) 
        <span v-if="weightKgs" class="confirmation"> You entered {{weightKgs}} kG.</span>
      </label>
      <input type="number" v-model="weightKg" />

      <label>Height (cm)
        <span v-if="heightMeters" class="confirmation"> You entered {{heightMeters}} cm.</span>
      </label>
      <input type="number" v-model="heightInMetres" />

      <label>Age (years)
        <span v-if="ageMetric" class="confirmation"> You entered {{ ageMetric }} years</span>
      </label>
      <input type="number" v-model="ageInYears" />      
    </div>      
  </div>

  <div class="item">
    <div>    
      <label class="label" for="sex">      
        <input
         class="option-input radio"
          type="radio"
          name="sex"
          value="male"
          :checked="sex === 'male'"
          @change="handleSex('male')"
          :disabled ="sexImperial === 'female'"
        />Male
        </label>   
    
      <label class="label" for="sex">
      <input
       class="option-input radio"
        type="radio"
        name="sex"
        value="female"
        :checked="sex === 'female'"
        @change="handleSex('female')"
        :disabled ="sexImperial === 'male'"
      />Female
      </label>    
    </div>
   
   <div>    
      <label class="label" for="activity">
      <input
       class="option-input radio"
        type="radio"
        name="activity"
        value="1.2"
        :checked="activity === 1.2"
        @change="handleActivity(1.2)"
      />Sedentary
      </label>

      <label class="label" for="activity">
      <input
       class="option-input radio"
        type="radio"
        name="activity"
        value="1.375"
        :checked="activity === 1.375"
        @change="handleActivity(1.375)"
      />light-activity
    </label>

      <label class="label" for="activity">
      <input
       class="option-input radio"
        type="radio"
        name="activity"
        value="1.55"
        :checked="activity === 1.55"
        @change="handleActivity(1.55)"
      />Moderately Active
      </label>

      <label class="label" for="activity">
      <input
       class="option-input radio"
        type="radio"
        name="activity"
        value="1.725"
        :checked="activity === 1.725"
        @change="handleActivity(1.725)"
      />Very Active
      </label>

      <label class="label" for="activity">
        <input
         class="option-input radio"
          type="radio"
          name="activity"
          value="1.9"
          :checked="activity === 1.9"
          @change="handleActivity(1.9)"
        />Extra Active
        </label>    
   </div>         
  </div>
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

    activityMetric: {
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
    ageMetric: {
       get: function() {},
       set: function() {}
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
      ageMetric: null,
      BMR: null,
      activity: null,
      activityMetric: null,
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
      ageMetric:"ageMetric",
      BMR: "BMR",
      activity: "activity",
      activityMetric: "activityMetric",
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
