<script>
import InteractiveMenu from "@/components/v-interactive-menu.vue";
import {mapGetters} from 'vuex';

export default {
  components: {InteractiveMenu},
  computed: {
    ...mapGetters(['Products']),
  },
  methods: {
    removeItem() {
      this.$refs["interactive-menu"].openMenu()
    }
  }
}
</script>

<template>
  <div class="products-container">
    <div class="products-title">
      <img src="@/assets/arrival/add-btn.svg" alt="add_btn" class="products-title-icon">
      <h3 class="ms-2 mb-0">Продукты</h3>
      <div class="select-container ms-5">
        <div>
          <label for="product-type">Тип:</label>
          <select name="product-type" id="product-type" class="ms-2">
            <option>Moni |</option>
          </select>
        </div>

        <div class="ms-5">
          <label for="product-spec">Спецификация:</label>
          <select name="product-spec" id="product-spec" class="ms-2">
            <option>Moni |</option>
          </select>
        </div>
      </div>
    </div>

    <div class="products-content">
      <div class="product-item mt-4 pt-2 pb-2" v-for="item in this.Products">
        <div class="product-img-container col-1" v-if="item.details.status === 'Свободен'">
          <img :src="item.details.src" alt="product_img" class="ms-5">
        </div>
        <div class="product-img-container col-1 status-busy" v-else>
          <img :src="item.details.src" alt="product_img" class="ms-5">
        </div>
        <div class="product-name col-5 ms-4">
          {{ item.details.description }}
          <span>{{ item.details.detailed }}</span>
        </div>
        <div class="product-status col-1 ms-3 status-free" v-if="item.details.status === 'Свободен'">
          {{ item.details.status }}
        </div>
        <div class="product-status col-1 ms-3" v-else>{{ item.details.status }}</div>
        <div class="product-date col-2 ms-5">
          <div>
            <span>с</span>
            {{ item.details.status_from }}
          </div>
          <div>
            <span>по</span>
            {{ item.details.status_to }}
          </div>
        </div>
        <div class="product-newness col-1">
          {{ item.details.newness }}
        </div>
        <div class="product-item-price col-1">
          <div>{{ item.Subprice }}</div>
          <span>{{ item.Price }} <b>UAH</b></span>
        </div>
        <div class="product-item-group-title styled-text ms-5 col-4">
          <span>{{ item.details.groupTitle }}</span>
        </div>
        <div class="product-item-client-name styled-text col-3">
          <span v-if="item.details.clientName !== '—'">{{ item.details.clientName }}</span>
          <i v-else>{{ item.details.clientName }}</i>
        </div>
        <div class="product-item-title styled-text ms-5 col-4">
          <span>{{ item.Title }}</span>
        </div>
        <div class="product-item-date col-2">
          <div class="product-item-subdate">{{ item.Subdate }}</div>
          <span>{{ item.Date }}</span>
        </div>
        <img src="@/assets/arrival/delete-btn.svg" alt="delete_img" class="delete-btn ms-4" @click="removeItem">
      </div>

    </div>
  </div>
  <interactive-menu ref="interactive-menu"/>
</template>

<style scoped lang="scss">
.products-title {
  display: flex;
  align-items: center;
}

.products-add {
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

.select-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    color: var(--c-gray);
  }

  select {
    width: 300px;
    border-radius: 5px;
    border: 1px solid var(--c-gray);
  }

}

.products-content {
  overflow-x: auto;
  width: 100%;
}

.product-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-gray);
  transition: .3s all;
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

.product-name {
  display: flex;
  flex-direction: column;
  text-decoration: underline;

  span {
    color: var(--c-gray);
  }
}

.status-free {
  color: var(--c-nav-lime);
}

.status-busy:before {
  background: black
}

.product-date span {
  color: var(--c-gray);
  display: inline-block;
  width: 20px;
}

.styled-text span {
  color: var(--c-gray);
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.product-item-date {
  text-align: center;

  div {
    width: 100%;
    color: var(--c-gray);
  }
}

.product-item-price {
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
</style>