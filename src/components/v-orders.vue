<script>
import InteractiveMenu from "@/components/subComponents/v-interactive-menu.vue";
import {mapGetters} from 'vuex';
import VCTitle from "@/components/subComponents/v-c-title.vue";

export default {
  components: {VCTitle, InteractiveMenu},
  computed: {
    ...mapGetters(['Orders', 'getProductsByOrder'])
  },
  methods: {
    removeItem() {
      this.$refs["interactive-menu"].openMenu()
    },
    // Calculate the total price for all products
    getTotalPrice(productIds) {
      const products = this.getProductsByOrder(productIds);
      const totalUsd = products.reduce((sum, product) => sum + product.price[0].value, 0);
      const totalUah = products.reduce((sum, product) => sum + product.price[1].value, 0);
      return { usd: totalUsd, uah: totalUah };
    },
  }
}
</script>

<template>
  <div class="arrival-container">
    <v-c-title class="ms-5">Приходы</v-c-title>
    <div class="arrival-content">
      <div class="arrival-item container-fluid mt-4 pt-2 pb-2" v-for="item in Orders" :key="item.id">
        <div class="arrival-item-title ms-4 col-xl-5 col-xxl-6 col-4">
          <span>{{ item.title }}</span>
        </div>
        <div class="arrival-item-stock col-2">
          <img src="@/assets/arrival/more-btn.svg" alt="stock_img">
          <div class="ms-4">
            <span>{{ item.productIds.length }}</span>
            <b v-if="item.productIds.length === 1">Продукт</b>
            <b v-else>Продукта(-ов)</b>
          </div>
        </div>
        <div class="arrival-item-date col-2">
          <div class="arrival-item-subdate">{{ item.subdate }}</div>
          <span>{{ item.date }}</span>
        </div>
        <div class="arrival-item-price col-xxl-1 col-2">
          <div class="arrival-item-subprice">{{ getTotalPrice(item.productIds).usd + " $" }}</div>
          <span>{{ getTotalPrice(item.productIds).uah }} <b>UAH</b></span>
        </div>
        <img src="@/assets/arrival/delete-btn.svg" alt="delete_img" class="delete-btn col-1 ms-5" @click="removeItem(item)">
      </div>
    </div>
    <interactive-menu ref="interactive-menu"/>
  </div>
</template>

<style scoped lang="scss">

.arrival-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
  transition: .3s all;
}

.arrival-item-title span {
  color: var(--c-dark);
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.arrival-item-stock {
  display: flex;
  align-items: center;
  color: var(--c-dark);

  img {
    width: 40px;
    height: 40px;
    border: 1px solid var(--c-dark-t);
    border-radius: 100%;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 24px;
      height: 30px;
    }

    b {
      font-weight: normal;
    }
  }
}

.arrival-item-date {
  text-align: center;

  div {
    width: 100%;
    color: var(--c-dark);
  }
}

.arrival-item-price {
  font-size: 18px;
  text-wrap: nowrap;

  div {
    width: 100%;
    font-size: 12px;
    color: var(--c-dark);
  }

  span b {
    font-size: 12px;
    font-weight: normal;
  }
}

.delete-btn {
  max-width: 20px;
  cursor: pointer;
}

.arrival-item:hover {
  transform: scale(1.025);
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.75);
  transition: .3s all;
}

</style>