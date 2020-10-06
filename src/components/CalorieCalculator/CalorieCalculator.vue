<template>
  <section>
    <h1>{{name}}</h1>
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
