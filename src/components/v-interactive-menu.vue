<script>
export default {
  data() {
    return {
      items: [
        {
          src: "src/assets/interactive-menu/item.png",
          description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
          detailed: "SN-12.3456789"
        },
        // {
        //   src: "src/assets/interactive-menu/item.png",
        //   description: "Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3",
        //   detailed: "SN-12.3456789"
        // },
      ]
    }
  },
  methods: {

    // smoothly open menu
    openMenu() {
      document.querySelector('.black-screen').style.display = 'block';
      document.querySelector('.interactive-menu').style.display = 'block';

      setTimeout(() => {
        document.querySelector('.black-screen').style.opacity = 0.5;
        document.querySelector('.interactive-menu').style.opacity = 1;
      }, 300)
    },

    // smoothly close menu
    closeMenu() {
      document.querySelector('.black-screen').style.opacity = 0;
      document.querySelector('.interactive-menu').style.opacity = 0;

      setTimeout(() => {
        document.querySelector('.black-screen').style.display = 'none';
        document.querySelector('.interactive-menu').style.display = 'none';
      }, 300)
    }
  }
}
</script>

<template>
  <div class="interactive-menu">
    <h2 class="p-5">Вы уверены, что хотите удалить этот приход?</h2>
    <ul class="menu-target-item ps-5 pe-5 pt-3 pb-3">
      <li v-for="item in items" class="pt-1 pb-1">
        <div class="menu-target-item-el col-12">
          <img :src="item.src" alt="item_img" class="ms-4">
          <div class="ms-5">
            {{ item.description }}
            <span>{{ item.detailed }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="menu-btn-container pe-5">
      <button type="reset" @click="closeMenu" class="me-4">ОТМЕНИТЬ</button>
      <button type="submit" class="p-2">
        <img src="@/assets/interactive-menu/delete-btn.svg" alt="delete_btn" class="me-2">
        УДАЛИТЬ
      </button>
    </div>
  </div>
  <div class="black-screen" @click="closeMenu"></div>
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
  transition: .3s all;
  opacity: 0;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }
}

.menu-target-item {
  margin-block-end: 0;


  li {
    width: 100%;
    position: relative;
    list-style: none;
    border-top: 1px solid rgba(0,0,0,0.1);
    margin-block-end: 0;

    &:before {
      content: "";
      position: absolute;
      top: 45%;
      left: -10px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: var(--c-nav-lime);
    }
  }
}


.menu-target-item-el {
  display: flex;
  flex-direction: row;

  img {
    max-width: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    text-decoration: underline;

    span {
      color: var(--c-gray);
    }
  }
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

.black-screen {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 111%;
  height: 100%;
  z-index: 2;
  background: var(--c-dark);
  opacity: 0;
  transition: .3s all;
}

</style>