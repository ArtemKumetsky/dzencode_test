<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      detailed: false,
      selectedLanguage: this.$i18n.locale,
    }
  },
  emits: ["showDetails", "removeItem"],
  props: {
    parentData: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["Orders", "getProductsByOrder"]),
  },
  methods: {
    // Calculate the total price for all products
    getTotalPrice(productIds) {
      const products = this.getProductsByOrder(productIds)
      const totalUsd = products.reduce((sum, product) => sum + product.price[0].value, 0)
      const totalUah = products.reduce((sum, product) => sum + product.price[1].value, 0)
      return { usd: totalUsd, uah: totalUah }
    },
  },
  watch: {
    parentData(newVal) {
      this.detailed = newVal
    },
  },
}
</script>

<template>
  <div class="orders-items" :class="{ 'col-3': detailed, 'col-12': !detailed }">
    <div
      class="orders-item container-fluid mt-4 pt-2 pb-2"
      v-for="item in Orders"
      :key="item.id"
      :id="'order' + item.id"
      @click="this.$emit('showDetails', item)"
    >
      <div class="orders-item-title ms-4 col-xl-5 col-xxl-6 col-4" v-if="!detailed">
        <span>{{ item.title }}</span>
      </div>
      <div class="orders-item-stock col-2" :class="{ 'col-6': detailed }">
        <img src="@/assets/buttons/more-btn.svg" alt="stock_img" />
        <div :class="{ 'ms-4': !detailed, 'ms-2': detailed }">
          <span>{{ item.productIds.length }}</span>
          <b v-if="this.selectedLanguage === 'ru'">{{
            this.$store.getters.productCounterOutput(item.productIds.length)
          }}</b>
          <b v-else>Products</b>
        </div>
      </div>
      <div class="orders-item-date col-2" :class="{ 'col-6': detailed }">
        <div class="arrival-item-subdate">{{ item.subdate }}</div>
        <span>{{ item.date }}</span>
      </div>
      <div class="orders-item-price col-xxl-1 col-2" v-if="!detailed">
        <div class="arrival-item-subprice">{{ getTotalPrice(item.productIds).usd + " $" }}</div>
        <span>{{ getTotalPrice(item.productIds).uah }} <b>UAH</b></span>
      </div>
      <img
        src="@/assets/buttons/delete-btn.svg"
        alt="delete_img"
        class="delete-btn col-1 m-auto"
        @click.stop="this.$emit('removeItem', item)"
        v-if="!detailed"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.orders-items {
  transition: 0.3s all;
}

.orders-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
  transition: 0.3s all;
  cursor: pointer;
}

.orders-item-title span {
  color: var(--c-dark);
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.orders-item-stock {
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

.orders-item-date {
  text-align: center;

  div {
    width: 100%;
    color: var(--c-dark);
  }
}

.orders-item-price {
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

.orders-item:hover {
  transform: scale(1.025);
  box-shadow: 0 10px 30px -18px rgba(0, 0, 0, 0.75);
  transition: 0.3s all;
}
</style>
