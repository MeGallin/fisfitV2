<template>
  <div id="app">
    <Header />
    <CookiesWarning/>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./App.css";
import Header from "./components/Header/Header";
import CookiesWarning from './components/CookiesWarning/CookiesWarning';
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    CookiesWarning,
    Footer
  }
};
</script>