<template>
  <section>{{ timestamp }}</section>
</template>

<script>
export default {
  data() {
    return {
      timestamp: ""
    };
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function() {
      //   const today = new Date();
      //   const date =
      //     today.getDate() +
      //     "-" +
      //     (today.getMonth() + 1) +
      //     "-" +
      //     today.getFullYear();
      //   const time =
      //     today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      //   const dateTime = date + " " + time;
      //   this.timestamp = dateTime;
      this.timestamp = new Date().toLocaleString();
    }
  }
};
</script>

<style scoped src="./Date.css"></style>
