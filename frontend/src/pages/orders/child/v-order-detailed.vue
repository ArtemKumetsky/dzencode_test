<script lang="ts">
import { mapGetters } from "vuex"
import InteractiveMenu from "@/components/v-interactive-menu.vue"
import { defineComponent, Ref } from "vue"
import { IOrder, IProduct } from "@/interfaces"

export default defineComponent({
  components: { InteractiveMenu },
  data() {
    return {
      detailedItem: null as IOrder | null,
    }
  },
  computed: {
    ...mapGetters(["Orders", "getProductsByOrder"]),
  },
  methods: {
    catchItem(item: IProduct | IOrder) {
      this.detailedItem = item
    },
    removeItem(item: IProduct | IOrder) {
      ;(this.$refs["interactive-menu"] as Ref<typeof InteractiveMenu>).openMenu(item)
    },
  },
})
</script>

<template>
  <div class="detailed-container mt-4 col-8" v-if="this.detailedItem">
    <div class="detailed-info">
      <h3 class="mt-4 ms-4">{{ detailedItem.title }}</h3>
      <button class="detailed-info-add-btn mt-3 ms-4">
        <img src="@/assets/buttons/add-btn.svg" alt="add_icon" />
        {{ $t("Orders.detailed.addProduct") }}
      </button>
      <ul class="detailed-info-content mt-3">
        <li v-for="item in this.getProductsByOrder(detailedItem.productIds)" class="col-12 ps-3 pt-2 pb-2">
          <div
            class="product-img-container col-2 ps-5"
            :class="{ 'status-free': item.status === 'Free', 'status-busy': item.status === 'Busy' }"
          >
            <img :src="item.photo" alt="product_img" />
          </div>
          <div class="product-name col-6">
            {{ item.title }}
            <span>{{ item.specification }}</span>
          </div>
          <div class="product-status col-3" :class="{ 'status-free': item.status === 'Free' }">
            {{ $t(`Products.status.${item.status.toLowerCase()}`) }}
          </div>
          <img
            src="@/assets/buttons/delete-btn.svg"
            alt="delete_img"
            class="delete-btn col-1"
            @click="removeItem(item)"
          />
        </li>
      </ul>
      <a @click="this.$emit('closeDetailed')">✕</a>
    </div>
    <transition name="fade" mode="in-out">
      <interactive-menu ref="interactive-menu" />
    </transition>
  </div>
</template>

<style scoped lang="scss">
.detailed-container {
  height: max-content;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
}

.detailed-info {
  position: relative;

  a {
    position: absolute;
    top: -50px;
    right: -25px;
    border: 0;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    font-size: 18px;
    box-shadow: -5px 10px 20px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-header-white);
    cursor: pointer;
  }

  button {
    border: 0;
    padding: 0;
    color: var(--c-nav-lime);

    img {
      max-width: 30px;
    }
  }
}

.detailed-info-content {
  padding-inline-start: 0;
  margin-block-end: 0;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:first-child {
      border-top: 1px solid var(--c-dark-t);
      border-bottom: 1px solid var(--c-dark-t);
    }

    &:not(:first-child) {
      border-bottom: 1px solid var(--c-dark-t);
    }

    &:last-child {
      border-bottom: 0;
    }
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

.status-free {
  color: var(--c-nav-lime);
}

.status-busy:before {
  background: black;
}

.product-name {
  display: flex;
  flex-direction: column;
  text-decoration: underline;

  span {
    color: var(--c-dark);
  }
}

.delete-btn {
  max-width: 20px;
  cursor: pointer;
}
</style>
