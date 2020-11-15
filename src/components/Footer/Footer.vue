<template>
  <footer class="footerImage">
    <h1 class="title">Take ownership of your health</h1>
    <div class="footerBackGroundWrapper">
        
    <div class="item footerContent">

      <!-- <div>
        <div class="logo">
          <router-link to="/">
            <img v-bind:src="`../../assets/images/${logo.colour}`" />
          </router-link>
        </div>
      </div> -->

      <div class="item footer-center-content">
        <div class="inner-wrapper">                  
          <div class="facebook">
            FaceBook
            <a href="https://www.facebook.com/fisicalfitness" target="_blank"><img v-bind:src="`../../assets/images/${faceBook}`" /></a> 
             FaceBook           
          </div>
          <div class="instagram">
            InstaGram
            <a href="https://www.instagram.com/zachfisicalfitness/" target="_blank"><img v-bind:src="`../../assets/images/${instaGram}`" /></a>
            InstaGram            
          </div>
      </div>
    </div>
      
      <div class="footerInnerWidth">
        <div class="backGroundImageContainer">
          <div class="backGroundImageItem footerImageOne"></div>
          <div class="backGroundImageItem footerImageTwo"></div>
          <div class="backGroundImageItem footerImageThree"></div>
          <div class="backGroundImageItem footerImageFour"></div>
          <div class="backGroundImageItem footerImageOne"></div>
          <div class="backGroundImageItem footerImageTwo"></div>
        </div>        
      </div>

        <div class="item footerForm">
          <ContactForm />
        </div>  

    </div>
</div>
    <div class="bottomWrapper">
      <div>
        {{copyWrite}}
        <sup>&#169;</sup>
      </div>
      <Date />
      <div>
       Site hosted by 
        <a href="https://www.trilogywebsolutions.co.uk" target="_blank"> {{hosting}}</a>
        & developed by 
        <a href="https://www.garyallin.uk" target="_blank"> {{webDesign}}</a>
      </div>
    </div>

    
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
      logo: {"white":"logo-white.png","colour":"logo-colour.png"},
      faceBook: "facebook.svg",
      instaGram : "instagram.svg",      
    };
  },
  components: {
    Date,
    ContactForm,
  }
};
</script>

<style scoped src="./Footer.css"></style>
