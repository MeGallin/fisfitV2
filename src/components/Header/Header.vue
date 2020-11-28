<template>
  <div class="navImageWrapper">
    <nav>
      <div class="navWrapper">
        <div class="logo">
          <router-link to="/">
            <img v-bind:src="`../../assets/images/${logo.colour}`" />
          </router-link>
        </div>
        <div class="hamburger" @click="setOpen(!open)">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>

        <ul :class="open ? 'navLinks open' : 'navLinks'">
          <li>
            <router-link to="/">
              <a @click="setOpenMediaQuery(open)">HOME</a>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <a @click="setOpenMediaQuery(open)">ABOUT</a>
            </router-link>
          </li>
          <li>
            <router-link to="/personal-training">
              <a @click="setOpenMediaQuery(open)">PERSONAL TRAINING</a>
            </router-link>
          </li>
          <li>
            <router-link to="/online-coaching">
              <a @click="setOpenMediaQuery(open)">ONLINE COACHING</a>
            </router-link>
          </li>
          <li>
            <router-link to="/calorie-calculator">
              <a @click="setOpenMediaQuery(open)">CALORIE CALCULATOR</a>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="bannerContentContainer">
        <div v-if="homeBannerContent" class="bannerContentWrapper">
          <h2 class="headerText">YOUR FITNESS JOURNEY</h2>
          <!-- <div class="spacer home"></div> -->
          <h5>STARTS HERE</h5>
          <h1 class="title">LOSE FAT – GET IN SHAPE – FEELING AWESOME</h1>
          <!-- <div class="bannerContentInnerWrapper">
            <router-link to="/personal-training">
              <a @click="setOpenMediaQuery(open)">
                <button>START HERE</button>
              </a>
            </router-link>
            <button>GET IN TOUCH</button>
          </div> -->
        </div>

        <div v-if="aboutBannerContent" class="bannerContentWrapper">
          <h2>YOUR FITNESS JOURNEY</h2>
          <div class="spacer home"></div>
          <h5>STARTS HERE</h5>
          <h1 class="title">LOSE FAT – GET IN SHAPE – FEELING AWESOME</h1>
          <!-- <div class="bannerContentInnerWrapper">
            <router-link to="/personal-training">
              <a @click="setOpenMediaQuery(open)">
                <button>START HERE</button>
              </a>
            </router-link>
            <button>GET IN TOUCH</button>
          </div> -->
        </div>

        <div v-if="personalTrainingBannerContent" class="bannerContentWrapper">
          <h2>YOUR FITNESS JOURNEY</h2>
          <div class="spacer home"></div>
          <h5>STARTS HERE</h5>
          <h1 class="title">LOSE FAT – GET IN SHAPE – FEELING AWESOME</h1>
          <!-- <div class="bannerContentInnerWrapper">
            <router-link to="/personal-training">
              <a @click="setOpenMediaQuery(open)">
                <button>START HERE</button>
              </a>
            </router-link>
            <button>GET IN TOUCH</button>
          </div> -->
        </div>

        <div v-if="onlineCoachingBannerContent" class="bannerContentWrapper">
          <h2>YOUR FITNESS JOURNEY</h2>
          <div class="spacer home"></div>
          <h5>STARTS HERE</h5>
          <h1 class="title">LOSE FAT – GET IN SHAPE – FEELING AWESOME</h1>
          <!-- <div class="bannerContentInnerWrapper">
            <router-link to="/personal-training">
              <a @click="setOpenMediaQuery(open)">
                <button>START HERE</button>
              </a>
            </router-link>
            <button>GET IN TOUCH</button>
          </div> -->
        </div>

        <div v-if="calorieCalculatorBannerContent" class="bannerContentWrapper">
          <h2>YOUR FITNESS JOURNEY</h2>
          <div class="spacer home"></div>
          <h5>STARTS HERE</h5>
          <h1 class="title">LOSE FAT – GET IN SHAPE – FEELING AWESOME</h1>
          <!-- <div class="bannerContentInnerWrapper">
            <router-link to="/personal-training">
              <a @click="setOpenMediaQuery(open)">
                <button>START HERE</button>
              </a>
            </router-link>
            <button>GET IN TOUCH</button>
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Header",
      open: false,
      logo: {"white":"logo-white.png","colour":"logo-colour.png"},
      homeBannerContent: true,
      aboutBannerContent: false,
      personalTrainingBannerContent: false,
      onlineCoachingBannerContent: false,
      calorieCalculatorBannerContent: false
    };
  },
  methods: {
    setOpen() {
      this.open = true;
    },
    setOpenMediaQuery() {
      this.open = false;
    }
  },
  watch: {
    $route: function() {
      if (this.$route.path === "/" || this.$route.path === "/home") {
        this.homeBannerContent = true;
        this.aboutBannerContent = false;
        this.personalTrainingBannerContent = false;
        this.onlineCoachingBannerContent = false;
        this.calorieCalculatorBannerContent = false;
      }
      if (this.$route.path === "/about") {
        this.aboutBannerContent = true;
        this.homeBannerContent = false;
        this.personalTrainingBannerContent = false;
        this.onlineCoachingBannerContent = false;
        this.calorieCalculatorBannerContent = false;
      }
      if (this.$route.path === "/personal-training") {
        this.personalTrainingBannerContent = true;
        this.homeBannerContent = false;
        this.aboutBannerContent = false;
        this.onlineCoachingBannerContent = false;
        this.calorieCalculatorBannerContent = false;
      }
      if (this.$route.path === "/online-coaching") {
        this.onlineCoachingBannerContent = true;
        this.personalTrainingBannerContent = false;
        this.homeBannerContent = false;
        this.aboutBannerContent = false;
        this.calorieCalculatorBannerContent = false;
      }
      if (this.$route.path === "/calorie-calculator") {
        this.calorieCalculatorBannerContent = true;
        this.homeBannerContent = false;
        this.aboutBannerContent = false;
        this.personalTrainingBannerContent = false;
        this.onlineCoachingBannerContent = false;
      }
    }
  }
};
</script>

<style scoped src="./Header.css"></style>
