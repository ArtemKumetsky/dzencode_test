<script lang="ts">
import { vMaska } from "maska/vue"
export default {
  directives: {
    maska: vMaska,
  },
  data() {
    return {
      formData: {
        title: "",
        type: "",
        specification: "",
        serialNumber: null,
        clientName: "",
        date: "",
        newness: null,
        status: "",
        name: "продукт",
        price: "",
        guarantee: "",
        photo: "",
        contactPhone: ""
      },
      generatedId: new Date().getMilliseconds() + new Date().getSeconds(),
      defaultPhoto: "https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg?semt=ais_hybrid",
    }
  },
  methods: {
    submitForm() {
      const payload = { ...this.formData, id: this.generatedId }
      console.log("Form Data:", payload)
      this.$store.dispatch("addProduct", payload)
      this.$emit("closeMenu")
    },
    setDefaultPhoto() {
      if (!this.formData.photo.trim()) {
        this.formData.photo = this.defaultPhoto
      }
    },
  },
}
</script>
<template>
  <h2 class="menu-title ps-5 pt-5">
    {{ $t("Menu.title_add") }}
  </h2>
  <form @submit.prevent="submitForm">
    <div class="form-content">
      <label>
        Client name
        <input type="text" required v-model="formData.clientName" placeholder="Enter client name">
      </label>
      <label>
        Title
        <input type="text" required v-model="formData.title" placeholder="Enter product name">
      </label>
      <label>
        Contact Phone
        <input type="tel" required v-model="formData.contactPhone" placeholder="Enter contact phone" v-maska data-maska="+38 (0##) ###-##-##" @mouseenter="$event.target.value? null : $event.target.value = '+38 (0'">
      </label>
      <label>
        Date
        <input type="date" required v-model="formData.date">
      </label>


      <label>
        Specification
        <input type="text" required v-model="formData.specification" placeholder="Enter a specification">
      </label>
      <label>
        Serial number
        <input type="number" required v-model="formData.serialNumber" placeholder="Enter the products`s serial number">
      </label>
      <label>
        Type
        <input type="text" required v-model="formData.type" placeholder="Enter a type of product">
      </label>

      <label>
        Photo link
        <input type="URL" v-model="formData.photo" placeholder="Link to your photo" @blur="setDefaultPhoto">
      </label>
      <label>
        Price (UAH)
        <input type="number" min="0" required v-model="formData.price" placeholder="Price">
      </label>
      <label>
        Guarantee (month)
        <input type="number" min="0" max="12" required v-model="formData.guarantee" placeholder="Number of month">
      </label>


      <div class="radio-box">
      <span>
        Product status
      </span>
        <div>
          <label>
            <input type="radio" required v-model="formData.status" name="status" :value="'Busy'"> Busy
          </label>
          <label>
            <input type="radio" required v-model="formData.status" name="status" :value="'Free'"> Free
          </label>
        </div>
      </div>
      <div class="radio-box">
      <span>
        Newness
      </span>
        <div>
          <label>
            <input type="radio" required v-model="formData.newness" name="newness" :value="true"> New
          </label>
          <label>
            <input type="radio" required v-model="formData.newness" name="newness" :value="false"> Used
          </label>
        </div>
      </div>

      <label style="display:none;">
        Item type
        <input type="text" required v-model="formData.name" readonly>
      </label>
      <label>
        Order ID
        <input type="text" required :value="generatedId" readonly style="cursor: not-allowed">
      </label>
    </div>

    <div class="menu-btn-container pe-5">
      <button type="reset" @click="$emit('closeMenu')" class="me-4">{{ $t("Menu.buttons.cancel") }}</button>
      <button type="submit" class="p-2">
        {{ $t("Menu.buttons.confirm") }}
      </button>
    </div>
  </form>


</template>

<style scoped lang="scss">
h2 {
  font-size: 24px;
  font-weight: bold;
}

.form-content {
  width: 100%;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  label {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid var(--c-dark);
      border-radius: 4px;
      padding: 5px 10px;

      &:focus-visible {
        outline: 1px solid var(--c-nav-lime);
      }
    }
  }
}

.radio-box {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 75%;

    input[type=radio] {
      transition: 0.3s all;

      &:checked {
        transform: scale(1.5);
        transition: 0.3s all;
      }
    }
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