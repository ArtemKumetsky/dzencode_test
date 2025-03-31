<script lang="ts">
import { defineComponent, PropType } from "vue"
import { mapGetters } from "vuex"
import { IProduct } from "@/interfaces"

export default defineComponent({
  data() {
    return {
      selectedType: this.parentData as string,
    }
  },
  props: {
    parentData: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ["removeItem"],
  computed: {
    ...mapGetters(["Products"]),
    filteredProducts(): IProduct[] {
      if (this.selectedType === "All") {
        return this.Products as IProduct[]
      }
      return (this.Products as IProduct[]).filter((product: IProduct) => product.type === this.selectedType)
    },
  },
  watch: {
    parentData(newVal: string) {
      this.selectedType = newVal
    },
  },
})
</script>

<template>
  <div v-if="filteredProducts.length > 0"
    class="product-item row flex-nowrap overflow-auto mt-4 pt-2 pb-2 pe-4"
    v-for="item in filteredProducts"
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
      {{item.guarantee}} {{$t('month')}}
    </div>
    <div class="product-newness col-1" v-if="item.newness">{{ $t("Products.newness_true") }}</div>
    <div class="product-newness col-1" v-else>{{ $t("Products.newness_false") }}</div>
    <div class="product-item-price col-2">
      {{item.price}} UAH
    </div>
    <div class="product-item-client-name styled-text col-3">
      <span v-if="item.clientName !== '—'">{{ item.clientName }}</span>
      <i v-else>{{ item.clientName }}</i>
    </div>
    <div class="product-item-date col-2">
      <span>{{ item.date }}</span>
    </div>
    <div class="delete-btn col-1 me-2">
      <img
        src="@/assets/buttons/delete-btn.svg"
        alt="delete_img"
        class="delete-btn"
        @click="$emit('removeItem', item)"
      />
    </div>
  </div>
  <div v-else class="no-data pt-5">
    <b>Empty</b>
    You should add a new products.
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
}

.product-item-price {
  font-size: 18px;
  text-wrap: nowrap;
  text-align: center;
}

.delete-btn {
  max-width: 20px;
  cursor: pointer;
}
.no-data {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 42px;
}
</style>
