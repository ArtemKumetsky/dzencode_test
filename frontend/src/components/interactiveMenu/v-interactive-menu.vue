<script lang="ts">
import { defineComponent } from "vue"
import { InteractiveMenuData } from "@/interfaces"
import VMenuAdd from "@/components/interactiveMenu/menuTypes/v-menu-add.vue"
import VMenuRemove from "@/components/interactiveMenu/menuTypes/v-menu-remove.vue"

export default defineComponent({
  components: { VMenuRemove, VMenuAdd },
  data() {
    return {
      selectedProduct: { name: "" } as InteractiveMenuData,
      menuVisible: false as boolean,
    }
  },
  methods: {
    openMenu() {
      this.menuVisible = true
    },
    removeAction(item: InteractiveMenuData) {
      this.selectedProduct = item
      this.openMenu()
    },
    closeMenu() {
      this.menuVisible = false
    },
  },
  props: {
    action: {
      type: String,
      required: true,
    }
  }
})
</script>

<template>
  <div v-if="menuVisible">
    <div class="interactive-menu">
      <v-menu-add v-if="action === 'add'" @closeMenu="closeMenu"/>
      <v-menu-remove v-if="action === 'remove'" @closeMenu="closeMenu" :selectedProduct="selectedProduct"/>
      <button class="interactive-menu-close-btn" @click="closeMenu">✕</button>
    </div>
    <div class="black-screen" @click="closeMenu"></div>
  </div>
</template>

<style scoped lang="scss">
.interactive-menu {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  width: 800px;
  height: auto;
  background: var(--c-header-white);
  border-radius: 5px;
  z-index: 3;
  transition: 0.3s all;
  display: block;
}




.interactive-menu-close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  border: 0;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  font-size: 18px;
  box-shadow: -5px 10px 20px 0 rgba(0, 0, 0, 0.25);
}

.black-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 111%;
  height: 100%;
  z-index: 2;
  background: var(--c-dark);
  opacity: 0.5;
  display: block;
  transition: 0.3s all;
}
</style>
