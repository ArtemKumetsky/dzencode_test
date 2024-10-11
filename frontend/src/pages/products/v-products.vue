<script>
import InteractiveMenu from "@/components/v-interactive-menu.vue"
import { mapGetters } from "vuex"
import VCTitle from "@/components/v-c-title.vue"
import VProductsItem from "@/pages/products/child/v-products-item.vue"

export default {
  components: { VProductsItem, VCTitle, InteractiveMenu },
  data() {
    return {
      selectedType: "",
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
  },
  computed: {
    ...mapGetters(["Products"]),
    orders() {
      return this.$store.state.products
    },
  },

  methods: {
    removeItem(item) {
      this.$refs["interactive-menu"].openMenu(item)
    },
  },
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
            <option value="">Все продукты</option>
            <option value="Monitor">Мониторы</option>
            <option value="Motherboard">Материнские платы</option>
          </select>
        </div>
      </div>
    </div>

    <div class="products-content container mt-4">
      <v-products-item :parent-data="selectedType" @removeItem="removeItem" />
    </div>
    <transition name="fade" mode="in-out">
      <interactive-menu ref="interactive-menu" />
    </transition>
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
  overflow-y: auto;
  max-height: calc(100vh - 245px);
}
</style>
