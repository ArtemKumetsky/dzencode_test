<script lang="ts">
import InteractiveMenu from "@/components/v-interactive-menu.vue"
import { mapGetters } from "vuex"
import VCTitle from "@/components/v-c-title.vue"
import VOrderDetailed from "@/pages/orders/child/v-order-detailed.vue"
import VOrderItem from "@/pages/orders/child/v-order-item.vue"
import { defineComponent, Ref } from "vue"
import { IOrder, IProduct } from "@/interfaces"

export default defineComponent({
  components: { VOrderDetailed, VOrderItem, VCTitle, InteractiveMenu },
  data() {
    return {
      detailed: false as boolean,
      hideMenu: true as boolean,
      detailedItem: null as IOrder | null,
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
    this.$store.dispatch("loadOrders")
  },
  computed: {
    ...mapGetters(["Orders", "getProductsByOrder", "Products"]),
    orders() {
      return this.$store.state.Orders as IOrder[]
    },
    products() {
      return this.$store.state.Products as IProduct[]
    },
  },
  methods: {
    removeItem(item: IProduct | IOrder) {
      // @ts-ignore
      ;(this.$refs["interactive-menu"] as Ref<typeof InteractiveMenu>).openMenu(item)
    },
    showDetails(item: IOrder) {
      this.detailed = true
      // @ts-ignore
      ;(this.$refs["v-order-detailed"] as Ref<typeof VOrderDetailed>).catchItem(item)
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
})
</script>

<template>
  <div class="orders-container container-fluid">
    <v-c-title class="ms-5">{{ $t("Orders.title") }}</v-c-title>
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
