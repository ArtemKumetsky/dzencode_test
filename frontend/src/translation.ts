import { createI18n } from "vue-i18n"

import en from "./assets/translations/en.json"
import ru from "./assets/translations/ru.json"

const messages = {
  en: en,
  ru: ru,
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "ru",
  messages,
})
