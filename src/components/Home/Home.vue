<template>
  <section id="home">
    
    <h1 class="title">Our MISSION IS SIMPLE</h1>
    <p>Throughout the years Fisical Fitness has designed bespoke exercise and nutrition programs for clients from all walks of life.  Our trainers specialise in helping clients with fat loss, muscle toning, and increasing strength without bulking up. We can show you how to integrate fitness into your daily lifestyle without much effort or cost.</p>
    <p>Fisical Fitness’s Exercise and Nutrition programmes</p>

    <div class="floatLeft">
        <div class="textWrapper">
          <div class="logo"><img v-bind:src="`../../assets/images/${logo.colour}`" /></div>
          <p>controls weight</p>
        </div>
    </div>
    <div class="floatLeft">
        <div class="textWrapper">
          <div class="logo"><img v-bind:src="`../../assets/images/${logo.colour}`" /></div>
           <p>boosts energy</p>
        </div>
    </div >
    <div class="floatLeft">
      <div class="textWrapper">
        <div class="logo"><img v-bind:src="`../../assets/images/${logo.colour}`" /></div>       
          <p>combat health conditions and diseases</p>
      </div>
    </div>
    <div class="floatLeft">
      <div class="textWrapper">
          <div class="logo"><img v-bind:src="`../../assets/images/${logo.colour}`" /></div>
          <p>improves your mood</p>          
      </div>
    </div>
    <div class="floatLeft">
        <div class="textWrapper">
          <div class="logo"><img v-bind:src="`../../assets/images/${logo.colour}`" /></div>
          <p>promotes better sleep</p>
        </div>
    </div>
  <div>
  
  </div>
  </section>
</template>
<script>

export default {
  data() {
        return {
                  name: "Home",
                  logo: {"white":"logo-white.png","colour":"logo-colour.png"},
        };
  }
};
</script>

<style scoped src="./Home.css"></style>