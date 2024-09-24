<script>
import {mapGetters} from "vuex";
import VCTitle from "@/components/subComponents/v-c-title.vue";

export default {
  components: {VCTitle},
  computed: {
    ...mapGetters(['FakeDatabase']),
  },
}
</script>

<template>
  <div class="groups container">
    <v-c-title>Группы</v-c-title>
    <div class="groups-content mt-5 container">
      <div class="groups-list col-4">
        <div class="groups-list-item row mt-3 mb-3" v-for="item in this.FakeDatabase">
          <div class="groups-list-item-stock col-5">
            <img src="@/assets/arrival/more-btn.svg" alt="stock_img">
            <div class="ms-4">
              <span>{{ item.Arrival.stock }}</span>
              <b>Продукта</b>
            </div>
          </div>
          <div class="groups-list-item-date col-5">
            <div class="groups-list-item-subdate">{{ item.Arrival.subdate }}</div>
            <span>{{ item.Arrival.date }}</span>
          </div>
          <div class="groups-list-item-btn col-2 ">
            <img src="@/assets/groups/right_arrow.svg" alt="arrow">
          </div>
        </div>
      </div>
      <div class="groups-full-info col-8 ms-4 mt-3">
        <h2>
          {{FakeDatabase.Arrival.title}}
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.groups-content {
  display: flex;
  flex-direction: row;
}

.groups-list-item {
  display: flex;
  align-items: center;
  background: var(--c-header-white);
  border-radius: 5px;
  border: 1px solid var(--c-dark-t);
  height: 80px;
  transition: .3s all;
}

.groups-list-item-stock {
  display: flex;
  align-items: center;
  color: var(--c-dark);

  img {
    width: 40px;
    height: 40px;
    border: 1px solid var(--c-dark-t);
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
      font-weight: normal;
    }
  }
}

.groups-list-item-date {
  text-align: center;
  color: var(--c-dark);

  div {
    width: 100%;
    color: var(--c-dark-t);
  }
}

.groups-list-item-btn {
  min-height: 100%;
  align-items: center;
  justify-content: center;
  background: var(--c-dark-t);
  cursor: pointer;
  display: none;

  img {
    min-width: 25px;
  }
}

.groups-list-item:hover .groups-list-item-btn {
  display: flex;
}

.groups-full-info {
  height: 100%;
  border: 1px solid red;
}
</style>