<script>
import InteractiveMenu from "@/components/subComponents/v-interactive-menu.vue";
import {mapGetters} from 'vuex';
import VCTitle from "@/components/subComponents/v-c-title.vue";

export default {
  components: {VCTitle, InteractiveMenu},
  computed: {
    ...mapGetters(['FakeDatabase']),
  },
  methods: {
    removeItem() {
      this.$refs["interactive-menu"].openMenu()
    }
  }
}
</script>

<template>
  <div class="products-container container">
    <div class="products-title">
      <v-c-title>Продукты</v-c-title>
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

    <div class="products-content container">
      <div class="product-item row flex-nowrap overflow-auto mt-4 pt-2 pb-2 pe-4" v-for="item in this.FakeDatabase">
        <div class="product-img-container col-1 ps-5" v-if="item.Product.status === 'Свободен'">
          <img :src="item.Product.src" alt="product_img" class="">
        </div>
        <div class="product-img-container col-1 ps-5 status-busy" v-else>
          <img :src="item.Product.src" alt="product_img" class="">
        </div>
        <div class="product-name col-4">
          {{ item.Product.description }}
          <span>{{ item.Product.detailed }}</span>
        </div>
        <div class="product-status col-1 status-free" v-if="item.Product.status === 'Свободен'">
          {{ item.Product.status }}
        </div>
        <div class="product-status col-1" v-else>{{ item.Product.status }}</div>
        <div class="product-date col-2">
          <div>
            <span>с</span>
            {{ item.Product.status_from }}
          </div>
          <div>
            <span>по</span>
            {{ item.Product.status_to }}
          </div>
        </div>
        <div class="product-newness col-1">
          {{ item.Product.newness }}
        </div>
        <div class="product-item-price col-2">
          <div>{{ item.Arrival.subprice }}</div>
          <span>{{ item.Arrival.price }} <b>UAH</b></span>
        </div>
        <div class="product-item-group-title styled-text col-3">
          <span>{{ item.Group.groupTitle }}</span>
        </div>
        <div class="product-item-client-name styled-text col-3">
          <span v-if="item.Product.clientName !== '—'">{{ item.Product.clientName }}</span>
          <i v-else>{{ item.Product.clientName }}</i>
        </div>
        <div class="product-item-title styled-text col-3">
          <span>{{ item.Arrival.title }}</span>
        </div>
        <div class="product-item-date col-2">
          <div class="product-item-subdate">{{ item.Arrival.subdate }}</div>
          <span>{{ item.Arrival.date }}</span>
        </div>
        <div class="delete-btn col-1 me-2">
          <img src="@/assets/arrival/delete-btn.svg" alt="delete_img" class="delete-btn" @click="removeItem">
        </div>
      </div>

    </div>
    <interactive-menu ref="interactive-menu"/>
  </div>
</template>

<style scoped lang="scss">
.products-title {
  display: flex;
  align-items: center;
}

.select-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    color: var(--c-dark);
  }

  select {
    width: 300px;
    border-radius: 5px;
    border: 1px solid var(--c-dark-t);
  }

}

.products-content {
  width: 100%;
}

.product-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
  transition: .3s all;

  scrollbar-width: thin;
  scrollbar-color: var(--c-nav-lime) transparent;
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
    color: var(--c-dark);
  }
}

.status-free {
  color: var(--c-nav-lime);
}

.status-busy:before {
  background: black
}

.product-date {
  text-align: center;
  span {
    color: var(--c-dark);
    display: inline-block;
    width: 20px;
  }
}
.product-newness {
  text-align: center;
}

.styled-text span {
  color: var(--c-dark);
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.product-item-date {
  text-align: center;

  div {
    width: 100%;
    color: var(--c-dark);
  }
}

.product-item-price {
  font-size: 18px;
  text-wrap: nowrap;
  text-align: center;

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
</style>