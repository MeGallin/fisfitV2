<template>
  <section>  
    <h3 class="title">Basal metabolic rate (BMR)</h3>
    <div v-if="isSubmitted === false">
        <p>Feel free to calculate your BASAL METABOLIC RATE (BMR) by using the calculator below.</p>
        <p>To activate the calculator please provide your name and a valid email address.</p>
    </div> 

    <div class="item calCalcWrapper" v-if="isSubmitted === false">
      
      <div class="item formWrapper">
        <ContactForm />
      </div>     
            
     <div class="definition">        
        <p>Basal metabolic rate is the amount of energy per unit of time that a person needs to keep the body functioning at rest. </p>
        <p>Some of those processes are breathing, blood circulation, controlling body temperature, cell growth, brain and nerve function, and contraction of muscles</p>
        <p>Basal metabolic rate (BMR) affects the rate that a person burns calories and ultimately whether that individual maintains, gains, or loses weight.</p>
      </div>
    </div> 

    <div v-if="isSubmitted === true">        
        <ConvertToMetric />
      </div>
  </section>
</template>

<script>
import ContactForm from "../../Common/ContactForm/ContactForm";
import ConvertToMetric from "../../Common/ConvertToMetric/ConvertToMetric";
import { mapGetters, mapState } from "vuex";
import $tore from "../../store/index.js";
export default {
  data() {
    return {
      name: "CALORIE CALCULATOR"
    };
  },
  components: {
    ContactForm,
    ConvertToMetric
  }
  ,
  computed: {
    isSubmitted: {
      get: function() {
       return $tore.state.isSubmitted;
      },
      set: function(val) {
        console.log(val);
      }
    },
    ...mapState({
      isSubmitted: null,
    }),
    ...mapGetters({
      isSubmitted:"isSubmitted"
    })
  }
};
</script>

<style scoped src="./CalorieCalculator.css"></style>
