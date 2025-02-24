<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      panelVisible: false as boolean,
      locale: this.$i18n.locale as string,
    }
  },
  methods: {
    changeLocale(event: Event) {
      const target = event.target as HTMLSelectElement
      const selectedLocale = target.value
      this.$i18n.locale = selectedLocale
      this.locale = selectedLocale
      localStorage.setItem("locale", selectedLocale)
      this.panelVisible = !this.panelVisible
    },
  },
})
</script>

<template>
  <div class="lang-panel">
    <img
      src="@/assets/lang-panel/language.svg"
      alt="langSelect"
      class="lang-panel-globe"
      @click="panelVisible = !panelVisible"
    />
    <transition name="fade">
      <select
        name="lang-panel-select"
        id="lang-panel-select"
        @change="changeLocale($event)"
        v-if="panelVisible"
        v-model="locale"
      >
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <option value="ua">Українська</option>
      </select>
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
select {
  position: absolute;
  top: 12px;
  right: 40px;
  width: 100px;
  text-align: center;
  border: 2px solid var(--c-nav-lime);
  border-radius: 5px;
  &:focus-visible {
    outline: none;
  }
  option:checked {
    background: var(--c-nav-lime);
    font-weight: bolder;
  }
}
@media screen and (max-width: 1600px) {
  select {
    top: 45px;
    right: 0;
    left: 0;
    margin: auto;
  }
}
</style>
