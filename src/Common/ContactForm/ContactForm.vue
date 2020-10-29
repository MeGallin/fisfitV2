<template>    
  <div class="form-container">
      <div class="item">          
        <div class="form-style">               
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
            <div class="required">* Required  
              <span class="thankYou">{{ thankYouMessage }}</span> 
            </div>
            <p></p>
          </form>       
        </div>      
      </div>     
  </div>
</template>

<script>
/* eslint-disable */
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
