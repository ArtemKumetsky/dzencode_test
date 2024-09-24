<script setup>

</script>

<template>
  <div class="component-title">
    <img src="../../assets/arrival/add-btn.svg" alt="title_icon">
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

.component-title-icon {
  background: var(--c-nav-lime);
  border-radius: 100%;
  width: 30px;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>