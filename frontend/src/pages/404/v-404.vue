<script setup></script>

<template>
  <div class="col-12">
    <h1>{{ $t("404.title") }}</h1>
    <button class="p-3 mt-5">
      <router-link to="/Orders"> {{ $t("404.button") }} </router-link>
    </button>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--c-dark);

  button {
    border: 2px solid var(--c-dark-t);
    font-weight: bold;
    border-radius: 5px;
  }
}
</style>
