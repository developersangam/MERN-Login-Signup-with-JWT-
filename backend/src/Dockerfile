FROM NODE:10

#create app directory
WORKDIR /
# Install app dependencies
COPY package*.json /
RUN npm install
COPY . . 
CMD ["npm ","run ","stage"]
