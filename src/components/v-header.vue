<script>
import {io} from 'socket.io-client';

export default {
  data() {
    return {
      currentDate: new Date().getDate().toString() + " " + new Date().toLocaleString('ru-RU', {month: 'short'}) + " " + new Date().getFullYear().toString(),
      activeSessions: 0,
      currentTime: new Date().getHours().toString() + ":" + new Date().getMinutes().toString(),
      currentDay: new Date().toLocaleString("ru-RU", {weekday: 'long'})[0].toUpperCase() + new Date().toLocaleString("ru-RU", {weekday: 'long'}).substring(1),
    };
  },
  mounted() {

    // update info every second
    setInterval(() => {
      this.currentTime = new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
      this.currentDate = new Date().getDate().toString() + " " + new Date().toLocaleString('ru-RU', {month: 'short'}) + " " + new Date().getFullYear().toString();

    },1000)



    // Connect to server Socket.io
    const socket = io('http://localhost:3000');

    // Listen to the event from the server and update the number of sessions
    socket.on('sessionCount', (count) => {
      this.activeSessions = count;
    });
  },


}
</script>

<template>
  <header>
    <div class="col-md-2 col-1"></div>

    <div class="header-content col-md-8 col-10">

      <div class="header-logo col-3">
        <img src="@/assets/header/header-logo.svg" alt="header_logo">
        <b>INVENTORY</b>
      </div>

      <div class="col-3 search-field-container">
        <input type="search" placeholder="Поиск">
      </div>

      <div class="header-time-container col-6">
        <div class="header-time ms-auto">
          <span class="current-day">{{currentDay}}</span>
          <span class="ms-3">В сети: {{ activeSessions }}</span>
          <div class="time-container">
            <span class="current-date">{{currentDate}}</span>
            <img src="@/assets/header/clock.svg.svg" alt="clock_img" class="ms-3">
            <span class="current-time">{{ currentTime }}</span>
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
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.75);
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

  b {
    color: var(--c-nav-lime);
  }

  img {
    max-width: 50px;
  }
}

.search-field-container {
  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 30px;
    border: 0;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 16px;
    background-color: #e1e5e8;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
    outline: none;

    &::placeholder {
      color: black;
      font-weight: 500;
    }
  }
}

.header-time {
  width: max-content;
}
</style>