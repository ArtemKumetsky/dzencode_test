<script setup lang="ts">

</script>

<template>
  <h2 class="menu-title p-5">
    {{ $t("Menu.title_add") }}
  </h2>
  <div class="menu-btn-container pe-5">
    <button type="reset" @click="$emit('closeMenu')" class="me-4">{{ $t("Menu.buttons.cancel") }}</button>
    <button type="submit" class="p-2" >
      <img src="@/assets/interactive-menu/delete-btn.svg" alt="delete_btn" class="me-2" />
      {{ $t("Menu.buttons.delete") }}
    </button>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 24px;
  font-weight: bold;
}
.menu-btn-container {
  background: var(--c-nav-lime);
  height: 120px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 500;
  }

  button[type="reset"] {
    background: transparent;
    border: 0;
    color: var(--c-header-white);
  }

  button[type="submit"] {
    width: 175px;
    height: 50px;
    border: 0;
    border-radius: 50px;
    color: red;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 17px;
    }
  }
}

</style>