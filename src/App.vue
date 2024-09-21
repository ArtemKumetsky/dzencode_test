<script setup>
import VHeader from "@/components/v-header.vue";
import VNav from "@/components/v-nav.vue";
import VArrival from "@/components/v-arrival.vue";
</script>

<template>
  <v-header/>
  <main>
    <v-nav/>
    <div class="main-content col-xxl-8  ps-5 pt-5">
      <v-arrival/>
    </div>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-flow: row nowrap;
    background: var(--c-main-bg);
  }
</style>
