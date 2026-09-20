FROM node:lts-buster
RUN apt-get update && \
    apt-get install -y ffmpeg webp && \
    apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
