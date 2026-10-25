# 1. Etapa de build
FROM node:20-alpine AS build

WORKDIR /app

# Ruta pública de la app: en el VPS se sirve bajo nesmanpro.com/dev/
ARG VITE_BASE=/dev/
ENV VITE_BASE=$VITE_BASE

# Instalar dependencias exactas del lockfile
COPY package*.json ./
RUN npm ci

# Copiar el resto del código y construir
COPY . .
RUN npm run build


# 2. Etapa de producción
FROM nginx:stable-alpine

# Configuración para SPA
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
