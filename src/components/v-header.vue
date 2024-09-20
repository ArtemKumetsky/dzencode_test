<script>
export default {
  mounted() {

    // display current date&&time
    const getTime = () => {

      // get current date
      document.querySelector(".current-date").textContent =
          new Date().getDate().toString() + " " +
          new Date().toLocaleString('default', {month: 'short'}) + " " +
          new Date().getFullYear().toString()

      // get current time
      document.querySelector(".current-time").innerHTML = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();

      // update current time
      setInterval(() => {
        document.querySelector(".current-time").innerHTML = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
      }, 1000)
    }
    getTime()
  }

}
</script>

<template>
  <header>
    <div class="col-md-2 col-1"></div>

    <div class="header-content col-md-8 col-10">

      <div class="header-logo col-6">
        <img src="@/assets/header/header-logo.svg" alt="header_logo">
        <b>INVENTORY</b>
      </div>

      <div class="header-time-container col-6">
        <div class="header-time ms-auto">
          <span class="">Today</span>
          <div class="time-container">
            <span class="current-date"></span>
            <img src="@/assets/header/clock.svg.svg" alt="clock_img" class="ms-3">
            <span class="current-time"></span>
          </div>
        </div>
      </div>

    </div>

    <div class="col-md-2 col-1"></div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding: 15px 0;
  display: flex;
  background: var(--c-header-white);
  //-webkit-box-shadow: 0 10px 30px -18px rgba(0,0,0,0.75);
  //-moz-box-shadow: 0 10px 30px -18px rgba(0,0,0,0.75);
  box-shadow: 0 10px 30px -18px rgba(0,0,0,0.75);
  position: relative;
  z-index: 2;
}

.header-content {
  display: flex;
  flex-flow: row nowrap;
}

.header-logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    max-width: 50px;
  }
}
.header-time {
  width: max-content;
}
</style>