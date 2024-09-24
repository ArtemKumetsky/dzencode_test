<script setup>
import VHeader from "@/components/v-header.vue";
import VNav from "@/components/v-nav.vue";
import VArrival from "@/components/v-orders.vue";
</script>

<template>
  <v-header />
  <main>
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* або .fade-leave-active в залежності від версії Vue */ {
    opacity: 0;
  }
</style>
