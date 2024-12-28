FROM node:22.3.0

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Указываем порт для работы
EXPOSE 3000

CMD ["npm", "start"]
