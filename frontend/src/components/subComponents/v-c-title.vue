<script setup>

</script>

<template>
  <div class="component-title">
    <img src="../../assets/buttons/add-btn.svg" alt="title_icon">
    <h3 class="ms-2 mb-0">
      <slot></slot>
    </h3>
  </div>
</template>

<style scoped lang="scss">
.component-title {
  display: flex;
  align-items: center;
}
</style>