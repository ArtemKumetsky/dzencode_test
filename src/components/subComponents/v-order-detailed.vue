<script>
import {mapGetters} from "vuex";
import InteractiveMenu from "@/components/subComponents/v-interactive-menu.vue";

export default {
  components: {InteractiveMenu},
  data() {
    return {
      detailedItem: null
    }
  },
  computed: {
    ...mapGetters(['Orders', 'getProductsByOrder'])
  },
  methods: {
    catchItem(item) {
      this.detailedItem = item;
    },
    removeItem(item) {
      this.$refs["interactive-menu"].openMenu(item, "продукт")
    }
  },
}
</script>

<template>
  <div class="detailed-info mt-4" v-if="this.detailedItem">
    <h3 class="mt-5 ms-5">{{ detailedItem.title }}</h3>
    <button class="detailed-info-add-btn mt-3 ms-5">
      <img src="@/assets/arrival/add-btn.svg" alt="add_icon">
      Добавить продукт
    </button>
    <ul class="detailed-info-content mt-3">
      {{console.log(this.getProductsByOrder(detailedItem.productIds))}}
      <li v-for="item in this.getProductsByOrder(detailedItem.productIds)" class="col-12 ps-4 pt-2 pb-2">
        <div class="product-img-container col-2 ps-5" v-if="item.status === 'Свободен'">
          <img :src="item.photo" alt="product_img" class="">
        </div>
        <div class="product-img-container col-2 ps-5 status-busy" v-else>
          <img :src="item.photo" alt="product_img" class="">
        </div>
        <div class="product-name col-6">
          {{ item.title }}
          <span>{{ item.specification }}</span>
        </div>
        <div class="product-status col-3 status-free" v-if="item.status === 'Свободен'">
          {{ item.status }}
        </div>
        <div class="product-status col-3" v-else>{{ item.status }}</div>
        <img src="@/assets/arrival/delete-btn.svg" alt="delete_img" class="delete-btn col-1" @click="removeItem(item)">
      </li>
    </ul>
    <interactive-menu ref="interactive-menu"/>
  </div>
</template>

<style scoped lang="scss">
.detailed-info {
  width: 70%;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);

  button {
    border: 0;
    padding: 0;
    color: var(--c-nav-lime);

    img {
      max-width: 30px;
    }
  }
}

.detailed-info-content {
  padding-inline-start: 0;
  margin-block-end: 0;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:first-child {
      border-top: 1px solid var(--c-dark-t);
      border-bottom: 1px solid var(--c-dark-t);
    }
    &:not(:first-child) {
      border-bottom: 1px solid var(--c-dark-t);
    }
    &:last-child {
      border-bottom: 0;
    }

  }
}

.product-img-container {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 45%;
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: var(--c-nav-lime);
  }

  img {
    max-width: 40px;
  }
}

.status-free {
  color: var(--c-nav-lime);
}

.status-busy:before {
  background: black
}

.product-name {
  display: flex;
  flex-direction: column;
  text-decoration: underline;

  span {
    color: var(--c-dark);
  }
}
.delete-btn {
  max-width: 20px;
  cursor: pointer;
}
</style>