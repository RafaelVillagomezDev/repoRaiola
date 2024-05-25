# Etapa 1: Construcción de la aplicación
FROM node:18 as build

# Crear el directorio de la aplicación
RUN mkdir -p /app

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

# Copia el archivo de configuración personalizado de Nginx
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# Elimina la página index predeterminada de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia los archivos estáticos construidos desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html/

# Exponer el puerto
EXPOSE 3000
# Ejecuta Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
