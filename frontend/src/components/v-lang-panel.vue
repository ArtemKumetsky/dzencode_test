<script>
export default {
  data() {
    return {
      panelVisible: false,
      locale: this.$i18n.locale,
    }
  },
  methods: {
    changeLocale(selectedLocale) {
      this.$i18n.locale = selectedLocale
      this.locale = selectedLocale
      localStorage.setItem("locale", selectedLocale)
    },
  },
}
</script>

<template>
  <div class="lang-panel">
    <img
      src="@/assets/lang-panel/language.svg"
      alt="langSelect"
      class="lang-panel-globe"
      @click="this.panelVisible = !this.panelVisible"
    />
    <transition name="fade">
      <form class="me-3" @change="changeLocale($event.target.value)" v-if="panelVisible">
        <div class="p-1">
          <input type="radio" id="ru" value="ru" name="language" v-model="locale" />
          <label for="ru">Русский</label>
          <img src="@/assets/lang-panel/ru_icon.svg" alt="ru_icon" class="ms-1" />
        </div>
        <div class="p-1">
          <input type="radio" id="en" value="en" name="language" v-model="locale" />
          <label for="en">English</label>
          <img src="@/assets/lang-panel/en_icon.svg" alt="en_icon" class="ms-1" />
        </div>
      </form>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.lang-panel {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.lang-panel-globe {
  color: black;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    border: 2px solid var(--c-nav-lime);
    border-radius: 15px;
    transition: 0.3s all;
  }
}
form {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -10px;
  right: 0;
  background: var(--c-header-white);
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    input {
      margin: 3px 3px 0 5px;
    }
    img {
      width: 32px;
      height: 21px;
    }
  }
}
</style>
