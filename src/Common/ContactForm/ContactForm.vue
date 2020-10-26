<template>
  <section>
    <div v-if="isSubmitted === false">
        <p>Feel free to calculate your BASAL METABOLIC RATE (BMR) by using the calculator below.</p>
        <p>To activate the calculator please provide your name and a valid email address.</p>
    </div>
<div class="form-container">
    <div class="item">          
      <div class=" form-style" v-if="isSubmitted === false">               
        <form @submit.prevent="handleContactFormSubmit">
          <div>
            <label>* Name</label>
            <input type="text" name="name" v-model="posts.name" />
          </div>
          <div>
            <label>* Email Address</label>
            <input type="email" name="email" v-model="posts.email" />
          </div>
          <button 
          type="submit" 
          :disabled="isDisabled"
          :class="{ active: !isDisabled }"
          >SUBMIT</button>
           <div class="required">* Required</div>
        </form>       
      </div>      
    </div>

    <div class="item definition" v-if="isSubmitted === false">
        <h3>Basal metabolic rate (BMR) definition</h3>
        <p>Basal metabolic rate is the amount of energy per unit of time that a person needs to keep the body functioning at rest. </p>
        <p>Some of those processes are breathing, blood circulation, controlling body temperature, cell growth, brain and nerve function, and contraction of muscles</p>
        <p>Basal metabolic rate (BMR) affects the rate that a person burns calories and ultimately whether that individual maintains, gains, or loses weight.</p>
    </div>   
</div>

 <div v-if="isSubmitted === true">        
    <ConvertToMetric />
</div>

    {{ thankYouMessage }}
  </section>
</template>

<script>
/* eslint-disable */
import ConvertToMetric from "../ConvertToMetric/ConvertToMetric";
import { postContactForm } from "../../api";
import { mapGetters, mapActions, mapState } from "vuex";
import $tore from "../../store/index.js";
export default {
  name: "ContactForm",
  data() {
    return {
      posts: {
        name: "",
        email: ""
      },
      thankYouMessage: "",      
    };
  },

  components: {
    ConvertToMetric
  },

  methods: {
    async submitFormData(formData) {
      try {
        await postContactForm(JSON.stringify(formData));
      } catch (error) {
        console.log(error);
      }  
    },
    ...mapActions([
      "handleCommit"
    ]),

    handleContactFormSubmit() {
      let formData = {
        name: this.posts.name,
        email: this.posts.email
      };
      this.submitFormData(formData);
      this.posts.name = "";
      this.posts.email = "";
      this.thankYouMessage = "Thank you. I will contact you shortly. Zach";  
      
      setTimeout(() => {       
        this.thankYouMessage = ""; 
        this.handleCommit('isSubmitted');      
      }, 6000);  
    }
  },
  computed: {
    isDisabled() {
      return !this.posts.name || !this.posts.email;
    },
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
<style scoped src="./ContactForm.css"></style>
