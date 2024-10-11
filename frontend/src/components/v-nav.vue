<script>
export default {
  methods: {
    Error() {
      alert("There is nothing to do here!")
    },
  },
}
</script>

<template>
  <nav class="col-2 pt-5">
    <div class="nav-image-container mb-5 mt-5">
      <img src="../assets/nav/user.png" alt="config_img" class="nav-image" />
      <img src="../assets/nav/settings.svg" alt="config_img" class="nav-image-config" @click="Error" />
    </div>
    <ul>
      <li>
        <router-link to="/orders"> Приход </router-link>
      </li>
      <li>
        <router-link to="/groups"> Группы </router-link>
      </li>
      <li>
        <router-link to="/products"> Продукты </router-link>
      </li>
      <li>
        <router-link to="/users"> Пользователи </router-link>
      </li>
      <li @click="Error">Настройки</li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  background: var(--c-main-bg);
  height: calc(100vh - 80px);
  box-shadow: 10px 0 30px -18px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      padding: 5px 0;
      width: max-content;
      list-style: none;
      font-weight: bold;
      letter-spacing: 1px;
      font-size: 20px;
      cursor: pointer;
      position: relative;
      color: var(--c-dark);

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: var(--c-nav-lime);
        border-radius: 15px;
        transition: 0.3s all;
      }

      &:hover:before {
        width: 100%;
        transition: 0.3s all;
      }
    }
  }
}

.nav-image-container {
  position: relative;

  .nav-image {
    width: 150px;
    height: 150px;
    border-radius: 100%;
  }

  .nav-image-config {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 50px;
    cursor: pointer;
    background: var(--c-header-white);
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.75);
    border-radius: 100%;
    padding: 10px;
  }
}
</style>
