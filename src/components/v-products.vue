<script>
import InteractiveMenu from "@/components/subComponents/v-interactive-menu.vue";
import {mapGetters} from 'vuex';
import VCTitle from "@/components/subComponents/v-c-title.vue";

export default {
  components: {VCTitle, InteractiveMenu},
  data() {
    return {
      selectedType: '',
    };
  },
  computed: {
    ...mapGetters(['Products']),
    filteredProducts() {
      if (!this.selectedType) {
        return this.Products;
      }
      return this.Products.filter(product => product.type === this.selectedType);
    }
  },
  methods: {
    removeItem(item) {
      this.$refs["interactive-menu"].openMenu(item, "продукт")
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
          <select name="product-type" id="product-type" class="ms-2" v-model="selectedType">
            <option value="">Всі продукти</option>
            <option value="Monitor">Монітори</option>
            <option value="Motherboard">Материнські плати</option>
          </select>
        </div>
      </div>
    </div>

    <div class="products-content container">
      <div class="product-item row flex-nowrap overflow-auto mt-4 pt-2 pb-2 pe-4" v-for="item in this.filteredProducts"
           :key="item.id">
        <div class="product-img-container col-1 ps-5" v-if="item.status === 'Свободен'">
          <img :src="item.photo" alt="product_img" class="">
        </div>
        <div class="product-img-container col-1 ps-5 status-busy" v-else>
          <img :src="item.photo" alt="product_img" class="">
        </div>
        <div class="product-name col-4">
          {{ item.title }}
          <span>{{ item.specification }}</span>
        </div>
        <div class="product-status col-1 status-free" v-if="item.status === 'Свободен'">
          {{ item.status }}
        </div>
        <div class="product-status col-1" v-else>{{ item.status }}</div>
        <div class="product-date col-2">
          <div>
            <span>с</span>
            {{ item.guarantee.start }}
          </div>
          <div>
            <span>по</span>
            {{ item.guarantee.end }}
          </div>
        </div>
        <div class="product-newness col-1" v-if="item.isNew">
          Новый
        </div>
        <div class="product-newness col-1" v-else>
          Б/У
        </div>
        <div class="product-item-price col-2">
          <div>{{ item.price[0].value + "$" }}</div>
          <span>{{ item.price[1].value }} <b>UAH</b></span>
        </div>
        <div class="product-item-group-title styled-text col-3">
          <span>{{ item.groupTitle }}</span>
        </div>
        <div class="product-item-client-name styled-text col-3">
          <span v-if="item.clientName !== '—'">{{ item.clientName }}</span>
          <i v-else>{{ item.clientName }}</i>
        </div>
        <div class="product-item-title styled-text col-3">
          <span>{{ item.order }}</span>
        </div>
        <div class="product-item-date col-2">
          <div class="product-item-subdate">{{ item.subdate }}</div>
          <span>{{ item.date }}</span>
        </div>
        <div class="delete-btn col-1 me-2">
          <img src="../assets/buttons/delete-btn.svg" alt="delete_img" class="delete-btn" @click="removeItem(item)">
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