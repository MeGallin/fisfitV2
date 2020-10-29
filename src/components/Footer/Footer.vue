<template>
  <footer class="footerImage">
<h1 class="title">Take ownership of your health</h1>
    <div class="item footerContent">

      <!-- <div>
        <div class="logo">
          <router-link to="/">
            <img v-bind:src="`../../assets/images/${logo}`" />
          </router-link>
        </div>
      </div> -->

      <div class="item footer-center-content">
        

        <div class="inner-wrapper">         
          <div class="facebook">
            <a href="https://www.facebook.com/fisicalfitness" target="_blank"><img v-bind:src="`../../assets/images/${faceBook}`" /></a>            
          </div>
          <div class="instagram">
            <a href="https://www.instagram.com/zachfisicalfitness/" target="_blank"><img v-bind:src="`../../assets/images/${instaGram}`" /></a>            
          </div>

        <div class="arrow-alignment">  
          <span class="footer-conversation">Start a conversation</span>
          <div class="right-arrow">            
            <img v-bind:src="`../../assets/images/${rightArrow}`" />
          </div> 
        </div>

        </div> 

      </div>
      

        <div class="item footerForm">
          <ContactForm />
        </div>  

    </div>

    <div class="bottomWrapper">
      <div>
        {{copyWrite}}
        <sup>&#169;</sup>
      </div>

      <div>
        Hosted by 
        <a href="https://www.trilogywebsolutions.co.uk" target="_blank"> {{hosting}}</a>
        & developed by 
        <a href="https://www.garyallin.uk" target="_blank"> {{webDesign}}</a>
      </div>
    </div>

    <Date />
  </footer>
</template>

<script>
import Date from "../../Common/Date/Date";
import ContactForm from"../../Common/ContactForm/ContactForm";
export default {
  data() {
    return {
      name: "Footer",
      copyWrite: "Fisical Fitness",
      webDesign: "Gary Allin",
      hosting: "Trilogy Web Solutions Ltd.",
      logo: "logo-white.png",
      faceBook: "facebook.svg",
      instaGram : "instagram.svg",
      rightArrow: "right-arrow.svg"
    };
  },
  components: {
    Date,
    ContactForm,
  }
};
</script>

<style scoped src="./Footer.css"></style>
