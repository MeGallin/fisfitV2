<template>
  <section>
    <div class="contactFormWrapper">
      <div class="formInputWrapper">
        <form @submit.prevent="handleContactFormSubmit">
          <div>
            <label>* Name</label>
            <input type="text" name="name" v-model="posts.name" />
          </div>
          <div>
            <label>* Email Address</label>
            <input type="email" name="email" v-model="posts.email" />
          </div>

          <button type="submit" :disabled="isDisabled">Submit</button>
        </form>
        <div>
          <ConvertToMetric />
        </div>
      </div>
    </div>
    {{ thankYouMessage }}
  </section>
</template>

<script>
/* eslint-disable */
import ConvertToMetric from "../ConvertToMetric/ConvertToMetric";
import { postContactForm } from "../../api";
export default {
  name: "ContactForm",
  data() {
    return {
      posts: {
        name: "",
        email: ""
      },
      thankYouMessage: ""
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
    handleContactFormSubmit() {
      let formData = {
        name: this.posts.name,
        email: this.posts.email
      };
      this.submitFormData(formData);
      this.posts.name = "";
      this.posts.email = "";

      this.thankYouMessage = "Thank you. I will contact you shortly. Kate";
      setInterval(() => {
        this.thankYouMessage = "";
      }, 6000);
    }
  },
  computed: {
    isDisabled() {
      return !this.posts.name || !this.posts.email;
    }
  }
};
</script>
<style scoped src="./ContactForm.css"></style>
