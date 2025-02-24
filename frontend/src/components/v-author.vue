<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      visible: true as boolean,
      wrongChoice: false as boolean,
      rightChoice: false as boolean,
    }
  },
})
</script>

<template>
  <div class="author-notification" :class="{'wrong-choice': wrongChoice, 'right-choice': rightChoice}" v-if="visible">
    <button class="decline-button btn" @mouseover="wrongChoice = true" @mouseleave="wrongChoice = false"
            @click="visible = !visible">
      <span v-if="!wrongChoice">{{ $t("AuthorNotification.declineBtn") }}</span>
      <span v-if="wrongChoice"> :(</span>
    </button>
    <div class="author">
      <a href="https://github.com/ArtemKumetsky/dzencode_test" target="_blank">
        <img src="@/assets/author/github_icon.svg" alt="GitHub Icon" />
      </a>
      <div class="content">
        <h3>
          {{ $t("AuthorNotification.title") }}
        </h3>
        <span>
          {{ $t("AuthorNotification.name") }}
         </span>
      </div>
      <a href="https://www.linkedin.com/in/artem-kumetskyi-472443267/" target="_blank">
        <img src="@/assets/author/linkedin_icon.svg" alt="LinkedIn Icon" />
      </a>
    </div>
    <a href="https://djinni.co/q/5189088f51/" target="_blank" class="confirm-button btn" @mouseover="rightChoice = true" @mouseleave="rightChoice = false"
            @click="visible = !visible">
      <span v-if="!rightChoice">
        {{ $t("AuthorNotification.confirmBtn") }}
      </span>
      <span v-if="rightChoice">
        {{ $t("AuthorNotification.CV") }} :)
      </span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.author-notification {
  position: absolute;
  bottom: 0;
  padding: 0;
  width: 100%;
  border-top: 1px solid var(--c-nav-lime);
  z-index: 2;
  background: var(--c-header-white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  transition: 0.3s all;
}

.author {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  img {
    max-width: 40px;
    transition: 0.3s transform;

    &:hover {
      transform: scale(1.2);
      transition: 0.3s transform;
    }
  }
}

.content {
  padding: 15px 30px;

  h3, span {
    text-align: center;
  }

  span {
    text-align: center;
  }
}

.btn {
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all;

  span {
    font-weight: bold;
    font-size: 26px;
  }
}

.decline-button {
  border-right: 1px solid var(--c-nav-lime);
}

.confirm-button {
  border-left: 1px solid var(--c-nav-lime);
}

.wrong-choice {
  background: rgb(255, 146, 74);

  button {
    border: 0;
  }
}

.right-choice {
  background: var(--c-nav-lime);

  button {
    border: 0;
  }
}
</style>