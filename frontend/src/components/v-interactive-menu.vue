<script lang="ts">
import { defineComponent } from "vue"
import { IproductGuarantee, IproductPrice } from "@/interfaces"

interface InteractiveMenuData {
  _id?: string
  id?: number
  serialNumber?: number
  newness?: boolean
  photo?: string
  status?: string
  title?: string
  type?: string
  specification?: string
  guarantee?: IproductGuarantee
  price?: IproductPrice[]
  subdate?: string
  date?: string
  groupTitle?: string
  clientName?: string
  order?: string
  productIds?: Number[]
  name?: string
}

export default defineComponent({
  data() {
    return {
      selectedProduct: { name: "" } as InteractiveMenuData,
      menuVisible: false as boolean,
    }
  },
  methods: {
    openMenu(item: InteractiveMenuData) {
      this.selectedProduct = item
      this.menuVisible = true
    },

    closeMenu() {
      this.menuVisible = false
    },

    deleteItem(targetItem: InteractiveMenuData) {
      if (targetItem.name === "приход") {
        this.$store.dispatch("deleteOrder", targetItem)
      } else {
        if (targetItem._id) {
          this.$store.dispatch("deleteProduct", targetItem._id)
        }
      }
      this.menuVisible = false
    },
  },
  computed: {
    isRussianLang() {
      return this.$i18n.locale === "ru"
    },
  },
})
</script>

<template>
  <div v-if="menuVisible">
    <div class="interactive-menu">
      <h2 class="menu-title p-5">
        {{ $t("Menu.title") }}<span v-if="isRussianLang">{{ ` ${selectedProduct.name}` }}</span
        >?
      </h2>
      <ul class="menu-target-item ps-5 pe-5 pt-3 pb-3">
        <li v-if="selectedProduct" class="pt-1 pb-1">
          <div class="menu-target-item-el col-12">
            <img v-if="selectedProduct.photo" :src="selectedProduct.photo" alt="item_img" class="ms-4" />
            <div class="ms-5">
              {{ selectedProduct.title }}
              <span v-if="selectedProduct.specification">{{ selectedProduct.specification }}</span>
              <span v-else>
                {{ selectedProduct.date }}
                <br />
                {{
                  `${selectedProduct.productIds?.length} ${$store.getters.productCounterOutput(selectedProduct.productIds?.length)}`
                }}
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="menu-btn-container pe-5">
        <button type="reset" @click="closeMenu" class="me-4">{{ $t("Menu.buttons.cancel") }}</button>
        <button type="submit" class="p-2" @click="deleteItem(selectedProduct)">
          <img src="@/assets/interactive-menu/delete-btn.svg" alt="delete_btn" class="me-2" />
          {{ $t("Menu.buttons.delete") }}
        </button>
      </div>
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
    border-top: 1px solid rgba(0, 0, 0, 0.1);
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
      color: var(--c-dark);
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
