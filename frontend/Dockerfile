# Створюємо образ на основі node
FROM node:16-alpine

# Вказуємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проєкт у контейнер
COPY . .

# Будуємо проєкт
RUN npm run build

# Вказуємо базовий образ для nginx
FROM nginx:alpine

# Копіюємо побудований проєкт у директорію nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Відкриваємо порт
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"]
