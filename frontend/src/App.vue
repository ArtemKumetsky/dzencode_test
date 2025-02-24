<script setup>
import VHeader from "@/components/v-header.vue"
import VNav from "@/components/v-nav.vue"
import VAuthor from "@/components/v-author.vue"
</script>

<template>
  <v-header />
  <main>
    <v-author/>
    <v-nav />
    <div class="main-content col-9 ps-5 pt-5">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-flow: row nowrap;
  background: var(--c-main-bg);
}

.main-content {
  position: relative;
}
</style>
