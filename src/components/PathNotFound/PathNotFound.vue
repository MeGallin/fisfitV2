<template>
  <section>
    <h1 class="title">{{name}}</h1>
     <div>
        <div class="logo">
          <router-link to="/">
            <img v-bind:src="`../../assets/images/${logo.colour}`" />
          </router-link>
        </div>
    </div>
    <p>Seems like the was an error find your page.</p>
    <p>Just click my logo to find my home page.</p>
    <div>
        <div class="logo">
          <router-link to="/">
            <img v-bind:src="`../../assets/images/${logo.colour}`" />
          </router-link>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "404 Error Page",
      logo: {"white":"logo-white.png","colour":"logo-colour.png"},
    };
  }
};
</script>

<style scoped src="./PathNotFound.css"></style>
