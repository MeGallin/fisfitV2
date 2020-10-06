<template>
  <footer>
    <div class="bottomWrapper">
      <div>
        {{copyWrite}}
        <sup>&#169;</sup>
      </div>

      <div>
        Hosted by
        <a href="https://www.trilogywebsolutions.co.uk" target="_blank">{{hosting}}</a>
        & developed by
        <a href="https://www.garyallin.uk" target="_blank">{{webDesign}}</a>
      </div>
    </div>
    <Date />
  </footer>
</template>

<script>
import Date from "../../Common/Date/Date";
export default {
  data() {
    return {
      name: "Footer",
      copyWrite: "Fisical Fitness",
      webDesign: "Gary Allin",
      hosting: "Trilogy Web Solutions Ltd."
    };
  },
  components: {
    Date
  }
};
</script>

<style scoped src="./Footer.css"></style>
