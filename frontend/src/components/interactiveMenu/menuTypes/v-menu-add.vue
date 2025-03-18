<script lang="ts">
  export default {
    data () {
      return {
        inputs: [
          {
            labelText: "Title",
            id: "title",
            placeholder: "Print here",
            value: "",
            required: true
          },
          {
            labelText: "Type",
            id: "type",
            placeholder: "Print here",
            value: "",
            required: true
          },
          {
            labelText: "Serial number",
            id: "serialNumber",
            placeholder: "Print here",
            value: "",
            required: true
          },
          {
            labelText: "Photo url",
            id: "photo",
            placeholder: "Print here",
            value: "",
            required: true
          },
          {
            labelText: "Status",
            id: "status",
            placeholder: "Print here",
            value: "",
            required: true
          },
          {
            labelText: "Specification",
            id: "specification",
            placeholder: "Print here",
            value: "",
            required: true
          },

        ],
        formData: {} as Record<string, string>
      }
    },
    methods: {
      submitForm() {
        this.$store.dispatch("addProduct", this.formData)
      }
    }
  }
</script>

<template>
  <h2 class="menu-title p-5">
    {{ $t("Menu.title_add") }}
  </h2>
  <form @submit.prevent="submitForm" >
    <div class="form-el" v-for="item in inputs">
      <label :for="item.id">{{ item.labelText }}</label>
      <input type="text" :id="item.id" v-model="formData[item.id]" :placeholder="item.placeholder" :required="item.required" />
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
  display: flex;
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