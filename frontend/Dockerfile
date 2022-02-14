FROM node

RUN mkdir /frontend
WORKDIR /frontend

ENV PATH /frontend/node_modules/.bin:$PATH

COPY package*.json /frontend

RUN npm install

COPY . /frontend

EXPOSE 3000

CMD ["npm", "start"]