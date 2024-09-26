# Створюємо образ на основі node
FROM node:16-alpine

# Вказуємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код проєкту в контейнер
COPY . .

# Відкриваємо порт (якщо ваш сервер працює на порту 3000)
EXPOSE 3000

# Запускаємо сервер
CMD ["npm", "start"]
