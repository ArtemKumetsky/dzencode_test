<script lang="ts">
import { io, Socket } from "socket.io-client"
import VLangPanel from "@/components/v-lang-panel.vue"
import { defineComponent } from "vue"

export default defineComponent({
  components: { VLangPanel },
  data() {
    return {
      currentTime: null as string | null,
      currentDate: null as string | null,
      currentDay: null as string | null,
      activeSessions: 0 as number,
      updateInterval: null as number | null,
      socket: null as Socket | null,
    }
  },
  mounted() {
    // Connect to server Socket.io
    this.socket = io("http://localhost:3000")

    // Listen to the event from the server and update the number of sessions
    this.socket.on("sessionCount", (count: number) => {
      this.activeSessions = count
    })

    // show errors
    this.socket.on("connect_error", (err: Error) => {
      console.error("Socket connection error: ", err)
    })

    // update data on init
    this.getCurrentTime()

    // update data every second
    this.updateInterval = window.setInterval(() => {
      this.getCurrentTime()
    }, 1000)
  },
  methods: {
    getLocale(): string {
      switch (this.$i18n.locale) {
        case "en":
          return "en-US"
        case "ru":
          return "ru-RU"
        default:
          return "default"
      }
    },
    getCurrentTime(): void {
      // get a timestamp
      const now = new Date()

      // get time
      this.currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

      // get date
      this.currentDate = `${now.getDate().toString()} ${now.toLocaleString(this.getLocale(), { month: "short" })} ${now.getFullYear().toString()}`

      // get day name
      this.currentDay = now
        .toLocaleString(this.getLocale(), { weekday: "long" })
        .replace(/^./, (str) => str.toUpperCase())
    },
  },
  beforeUnmount() {
    // clear interval before unmount
    if (this.updateInterval) {
      clearInterval(this.updateInterval)
    }
    this.socket?.close()
  },
})
</script>

<template>
  <header>
    <div class="gap col-md-2 col-1"></div>
    <div class="header-content col-md-8 col-10">
      <div class="header-logo col-3">
        <img src="@/assets/header/header-logo.svg" alt="header_logo" />
        <b>MY REPAIR SERVICE</b>
      </div>
      <div class="col-3 search-field-container">
        <input type="search" :placeholder="$t('Header.searchField')" />
      </div>
      <div class="header-time-container col-6">
        <div class="header-time ms-auto">
          <span class="current-day">{{ currentDay }}</span>
          <span class="ms-3">{{ $t("Header.onlineStats") }}: {{ activeSessions }}</span>
          <div class="time-container">
            <span class="current-date">{{ currentDate }}</span>
            <img src="@/assets/header/clock.svg.svg" alt="clock_img" class="ms-3" />
            <span class="current-time">{{ currentTime }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="gap col-md-2 col-1">
      <v-lang-panel />
    </div>
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
