<script lang="ts">
  export default {
    data () {
      return {
        formData: {
          title: "",
          type: "",
          specification: "",
          serialNumber: null,
          clientName: "",
          groupTitle: "",
          order: "",
          date: "",
          newness: null,
          status: "",
          name: "продукт",
          photo: ""
        },
        generatedId: new Date().getMilliseconds() + new Date().getSeconds(),
      };
    },
    methods: {
      submitForm() {
        const payload = { ...this.formData, id: this.generatedId };
        console.log("Form Data:", payload);

        this.$store.dispatch("addProduct", payload);
      },
    }
  }
</script>
<template>
  <h2 class="menu-title p-5">
    {{ $t("Menu.title_add") }}
  </h2>
  <form @submit.prevent="submitForm">
    <div class="form-el">
      <input type="text" required v-model="formData.title" placeholder="Title">
      <input type="text" required v-model="formData.type" placeholder="Type">
      <input type="text" required v-model="formData.specification" placeholder="Specification">
      <input type="number" required v-model="formData.serialNumber" placeholder="Serial number">

      <input type="text" required v-model="formData.clientName" placeholder="Client name">
      <input type="text" required v-model="formData.groupTitle" placeholder="Group Title">
      <input type="text" required v-model="formData.order" placeholder="Order Title">

      <input type="date" required v-model="formData.date">

      <label>
        <input type="radio" required v-model="formData.newness" name="newness" :value="true"> New
      </label>
      <label>
        <input type="radio" required v-model="formData.newness" name="newness" :value="false"> Old
      </label>

      <input type="text" required v-model="formData.status" placeholder="Status">
      <input type="URL" required v-model="formData.photo" placeholder="photo">
      <input type="text" required v-model="formData.name" readonly>
      <input type="text" required :value="generatedId" readonly>
    </div>

    <button type="submit">Submit</button>
  </form>

  <div class="menu-btn-container pe-5">
    <button type="reset" @click="$emit('closeMenu')" class="me-4">{{ $t("Menu.buttons.cancel") }}</button>
    <button type="submit" class="p-2" >
      {{ $t("Menu.buttons.confirm") }}
    </button>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 24px;
  font-weight: bold;
}
form {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
}
.form-el {
  display: flex;
  flex-direction: column;

  input {
    width: max-content;
  }
}
.menu-btn-container {
  background: var(--c-nav-lime);
  height: 120px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    letter-spacing: 1px;
    font-size: 18px;
    font-weight: 500;
  }

  button[type="reset"] {
    background: transparent;
    border: 0;
    color: var(--c-header-white);
  }

  button[type="submit"] {
    width: 175px;
    height: 50px;
    border: 0;
    border-radius: 50px;
    color: red;
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 17px;
    }
  }
}

</style>