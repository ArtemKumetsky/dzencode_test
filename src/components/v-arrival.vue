<script>
import InteractiveMenu from "@/components/v-interactive-menu.vue";
import { mapGetters } from 'vuex';

export default {
  components: {InteractiveMenu},
  computed: {
    ...mapGetters(['FakeDatabase'])
  },
  methods: {
    removeItem() {
      this.$refs["interactive-menu"].openMenu()
    }
  }
}
</script>

<template>
  <div class="arrival-container">
    <div class="arrival-title">
      <img src="@/assets/arrival/add-btn.svg" alt="add_btn" class="arrival-title-icon">
      <h3 class="ms-2 mb-0">Приходы</h3>
    </div>
    <div class="arrival-content">
      <div class="arrival-item container-fluid mt-4 pt-2 pb-2" v-for="item in this.FakeDatabase">
        <div class="arrival-item-title ms-4 col-xl-5 col-xxl-6 col-4">
          <span>{{ item.Arrival.title }}</span>
        </div>
        <div class="arrival-item-stock col-2">
          <img src="@/assets/arrival/more-btn.svg" alt="stock_img">
          <div class="ms-4">
            <span>{{ item.Arrival.stock }}</span>
            <b>Продукта</b>
          </div>
        </div>
        <div class="arrival-item-date col-2">
          <div class="arrival-item-subdate">{{ item.Arrival.subdate }}</div>
          <span>{{ item.Arrival.date }}</span>
        </div>
        <div class="arrival-item-price col-xxl-1 col-2">
          <div class="arrival-item-subprice">{{ item.Arrival.subprice }}</div>
          <span>{{ item.Arrival.price }} <b>UAH</b></span>
        </div>
        <img src="@/assets/arrival/delete-btn.svg" alt="delete_img" class="delete-btn col-1 ms-4" @click="removeItem">
      </div>
    </div>
  </div>
  <interactive-menu ref="interactive-menu"/>
</template>

<style scoped lang="scss">
.arrival-title {
  display: flex;
  align-items: center;
}

.arrival-add {
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

.arrival-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-gray);
  transition: .3s all;
}

.arrival-item-title span {
  color: var(--c-gray);
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.arrival-item-stock {
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border: 1px solid var(--c-gray);
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
      color: var(--c-gray);
      font-weight: normal;
    }
  }
}

.arrival-item-date {
  text-align: center;
  div {
    width: 100%;
    color: var(--c-gray);
  }
}

.arrival-item-price {
  font-size: 18px;
  text-wrap: nowrap;
  div {
    width: 100%;
    font-size: 12px;
    color: var(--c-gray);
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
  box-shadow: 0 10px 30px -18px rgba(0,0,0,0.75);
  transition: .3s all;
}

</style>