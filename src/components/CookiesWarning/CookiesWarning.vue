<template>
  <section>
    <transition name="fade">
      <div v-if="hideCookiesWarning === 'no'">      
        <div  class="cookiesWarningWrapper">                
          <div class="cookiesWarningInnerWrapper">
            <h1 class="title">{{ name }}</h1>
            <span>{{wording}}</span>
          <p></p>
            <button @click="handleCookiesWarning('yes')">Accept</button>          
          </div>
          <p></p>
          <div>
            <span class="smallText">Please email <a href="mailto:zack@fisicalfitness.co.uk"> MANAGEMENT </a> with any quries you might have.</span>
          </div> 
        </div>               
      </div>  
    </transition>   
  </section>
</template>

<script>
import $tore from "../../store/index.js";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: 'Cookies, Terms & Conditions',
      wording: 'By using our website you are agreeing to our cookies policy.',
    };
  },
  methods: {
    handleCookiesWarning(yes) {
      console.log(yes);
    },
  ...mapActions([
      "handleCookiesWarning"
    ]),
  },
  computed: {   
    hideCookiesWarning: {
      get: function() {
       return $tore.state.hideCookiesWarning;
      },
      set: function(val) {
        console.log(val);
      }
    },
    ...mapState({
      hideCookiesWarning: null,
    }),
    ...mapGetters({
      hideCookiesWarning:"hideCookiesWarning"
    })
  }  
};
</script>

<style scoped src="./CookiesWarning.css"></style>
