# Dockerfile
FROM node:8.15

WORKDIR /app

# Instalamos paquetes necesarios para script download_latest_deploy_artifacts
RUN apt-get update && apt-get install -y unzip

# Instalamos las dependencias antes de copiar los fuentes para tenerlas cacheadas
COPY package.json /app/package.json
RUN cd /app; npm install

# Copia los archivos.
COPY . /app

# Generar Bundle e Iniciar la aplicación.
CMD ["npm", "run", "start"]
EXPOSE 3000