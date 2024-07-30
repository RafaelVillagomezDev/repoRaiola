# Etapa 1: Construcción de la aplicación
FROM node:18 as build

# Crear el directorio de la aplicación
RUN mkdir -p /app

# Establece permisos en el directorio de la aplicación
RUN chmod -R 777 /app

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build

# Etapa 2: Configuración de Nginx
FROM nginx:alpine

# Elimina la página de índice predeterminada de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia la configuración de Nginx
COPY .nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos construidos desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html/

# Copia los certificados SSL a la ubicación correcta
COPY .nginx/ssl/yandrydev.es.crt /etc/nginx/ssl/yandrydev.es.crt
COPY .nginx/ssl/yandrydev.es.key /etc/nginx/ssl/yandrydev.es.key

# Ajusta los permisos de los certificados SSL
RUN chmod 644 /etc/nginx/ssl/yandrydev.es.crt /etc/nginx/ssl/yandrydev.es.key

# Exponer el puerto 80 para HTTP y 443 para HTTPS
EXPOSE 80
EXPOSE 443

# Ejecuta Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
