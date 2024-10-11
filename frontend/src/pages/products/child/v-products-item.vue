<script>
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      selectedType: this.parentData,
    }
  },
  props: {
    parentData: {
      type: String,
      required: true,
    },
  },
  emits: ["removeItem"],
  computed: {
    ...mapGetters(["Products"]),
    filteredProducts() {
      if (!this.selectedType) {
        return this.Products
      }
      return this.Products.filter((product) => product.type === this.selectedType)
    },
  },
  watch: {
    parentData(newVal) {
      this.selectedType = newVal
    },
  },
}
</script>

<template>
  <div
    class="product-item row flex-nowrap overflow-auto mt-4 pt-2 pb-2 pe-4"
    v-for="item in this.filteredProducts"
    :key="item.id"
  >
    <div class="product-img-container col-1 ps-5" :class="{ 'status-busy': item.status === 'Busy' }">
      <img :src="item.photo" alt="product_img" />
    </div>
    <div class="product-name col-4">
      {{ item.title }}
      <span>{{ item.specification }}</span>
    </div>
    <div class="product-status col-1" :class="{ 'status-free': item.status === 'Free' }">
      {{ $t(`Products.status.${item.status.toLowerCase()}`) }}
    </div>
    <div class="product-date col-2">
      <div>
        <span>{{ $t("Products.date.from") }}</span>
        {{ item.guarantee.start }}
      </div>
      <div>
        <span>{{ $t("Products.date.to") }}</span>
        {{ item.guarantee.end }}
      </div>
    </div>
    <div class="product-newness col-1" v-if="item.isNew">{{ $t("Products.newness_true") }}</div>
    <div class="product-newness col-1" v-else>{{ $t("Products.newness_false") }}</div>
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
      <img
        src="@/assets/buttons/delete-btn.svg"
        alt="delete_img"
        class="delete-btn"
        @click="this.$emit('removeItem', item)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  height: 110px;
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
  transition: 0.3s all;

  scrollbar-width: thin;
  scrollbar-color: var(--c-nav-lime) transparent;

  &:first-child {
    margin-top: 0 !important;
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
  background: black;
}

.product-date {
  text-align: center;

  span {
    color: var(--c-dark);
    display: inline-block;
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
