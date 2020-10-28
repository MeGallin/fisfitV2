<template>
  <section>    
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from "../../Common/ContactForm/ContactForm";
export default {
  data() {
    return {
      name: "CALORIE CALCULATOR"
    };
  },
  components: {
    ContactForm
  }
};
</script>

<style scoped src="./CalorieCalculator.css"></style>
