<script>
import InteractiveMenu from "@/components/v-interactive-menu.vue"
import { mapGetters } from "vuex"
import VCTitle from "@/components/v-c-title.vue"
import VOrderDetailed from "@/pages/orders/child/v-order-detailed.vue"
import VOrderItem from "@/pages/orders/child/v-order-item.vue"

export default {
  components: { VOrderDetailed, VOrderItem, VCTitle, InteractiveMenu },
  data() {
    return {
      detailed: false,
      hideMenu: true,
      detailedItem: null,
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
    this.$store.dispatch("loadOrders")
  },
  computed: {
    ...mapGetters(["Orders", "getProductsByOrder", "Products"]),
    orders() {
      return this.$store.state.Orders
    },
    products() {
      return this.$store.state.Products
    },
  },
  methods: {
    removeItem(item) {
      this.$refs["interactive-menu"].openMenu(item)
    },
    showDetails(item) {
      this.detailed = true
      this.$refs["v-order-detailed"].catchItem(item)
      setTimeout(() => {
        this.hideMenu = false
      }, 300)
    },

    normalView() {
      this.detailed = false
      this.hideMenu = true
      this.detailedItem = null
    },
  },
}
</script>

<template>
  <div class="orders-container container-fluid">
    <v-c-title class="ms-5">Приходы</v-c-title>
    <div class="orders-content" :class="{ 'justify-content-between pe-3': detailed }">
      <v-order-item :parentData="detailed" @showDetails="showDetails" @removeItem="removeItem" />
      <v-order-detailed @closeDetailed="normalView" v-show="!hideMenu" ref="v-order-detailed" />
    </div>
    <transition name="fade" mode="in-out">
      <interactive-menu ref="interactive-menu" />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.orders-content {
  display: flex;
}
</style>
