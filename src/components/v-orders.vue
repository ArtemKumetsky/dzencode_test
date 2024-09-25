<script>
import InteractiveMenu from "@/components/subComponents/v-interactive-menu.vue";
import {mapGetters} from 'vuex';
import VCTitle from "@/components/subComponents/v-c-title.vue";
import VOrderDetailed from "@/components/subComponents/v-order-detailed.vue";

export default {
  components: {VOrderDetailed, VCTitle, InteractiveMenu},
  data() {
    return {
      detailed: false,
      hideMenu: true,
      detailedItem: null,
    }
  },
  computed: {
    ...mapGetters(['Orders', 'getProductsByOrder'])
  },
  methods: {
    removeItem(item) {
      this.$refs["interactive-menu"].openMenu(item, "приход");
    },

    // Calculate the total price for all products
    getTotalPrice(productIds) {
      const products = this.getProductsByOrder(productIds);
      const totalUsd = products.reduce((sum, product) => sum + product.price[0].value, 0);
      const totalUah = products.reduce((sum, product) => sum + product.price[1].value, 0);
      return { usd: totalUsd, uah: totalUah };
    },
    showDetails(item) {
      this.detailed = true;

      document.querySelector(".orders-items").style.width = "25%";
      this.$refs["v-order-detailed"].catchItem(item);
      setTimeout(()=> {
        this.hideMenu = false;
      },300)
      },

    normalView() {
      document.querySelector(".orders-items").style.width = "100%";

      this.detailed = false;
      this.hideMenu = true;
      this.detailedItem = null
    }

  }
}
</script>

<template>
  <div class="orders-container">
    <v-c-title class="ms-5">Приходы</v-c-title>
    <button v-if="detailed" @click="normalView" class="return-btn">Вернуться к нормальному виду</button>
    <div class="orders-content">
      <div class="orders-items">
        <div class="orders-item container-fluid mt-4 pt-2 pb-2" v-for="item in Orders" :key="item.id" :id="'order' + item.id" @click="showDetails(item)">
          <div class="orders-item-title ms-4 col-xl-5 col-xxl-6 col-4" v-if="!detailed">
            <span>{{ item.title }}</span>
          </div >
          <div class="orders-item-stock col-2" v-if="!detailed">
            <img src="@/assets/arrival/more-btn.svg" alt="stock_img">
            <div class="ms-4">
              <span>{{ item.productIds.length }}</span>
              <b>{{ this.$store.getters.productCounterOutput(item.productIds.length) }}</b>
            </div>
          </div>
          <div class="orders-item-stock col-6" v-else>
            <img src="@/assets/arrival/more-btn.svg" alt="stock_img">
            <div class="ms-4">
              <span>{{ item.productIds.length }}</span>
              <b>{{ this.$store.getters.productCounterOutput(item.productIds.length) }}</b>
            </div>
          </div>
          <div class="orders-item-date col-2" v-if="!detailed">
            <div class="arrival-item-subdate">{{ item.subdate }}</div>
            <span>{{ item.date }}</span>
          </div>
          <div class="orders-item-date col-6" v-else>
            <div class="arrival-item-subdate">{{ item.subdate }}</div>
            <span>{{ item.date }}</span>
          </div>
          <div class="orders-item-price col-xxl-1 col-2" v-if="!detailed">
            <div class="arrival-item-subprice">{{ getTotalPrice(item.productIds).usd + " $" }}</div>
            <span>{{ getTotalPrice(item.productIds).uah }} <b>UAH</b></span>
          </div>
          <img src="@/assets/arrival/delete-btn.svg" alt="delete_img" class="delete-btn col-1 ms-5" @click.stop="removeItem(item)" v-if="!detailed">
        </div>
      </div>
      <v-order-detailed v-show="!hideMenu" ref="v-order-detailed"/>
    </div>
    <interactive-menu ref="interactive-menu"/>
  </div>
</template>

<style scoped lang="scss">
.orders-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.orders-items {
  transition: .3s all;
  width: 100%;
}
.orders-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
  transition: .3s all;
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
  transition: .3s all;
}

.return-btn {
  position: absolute;
  left: 300px;
  top: 55px;
  border: 2px solid var(--c-nav-lime);
  font-weight: bold;
  border-radius: 5px;

}
</style>