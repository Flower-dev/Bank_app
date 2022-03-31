# BANK APP

This repository contains all the source code to run the micro front for the bank application BANK APP.

## 1. Prerequisites

- NodeJS (v14.15.1)
- Yarn or npm

## 2. Launch the project

- Fork the **[Front-End repository](https://github.com/Flower-dev/FloreMalonda_13_08032022)**.
- Clone it on your computer.

### 2.1 Front End

- This project was bootstrapped with Create React App.
- API fetched with Axios.
- Scripts
- React Redux

**Start the front-end**
 ```bash
npm start
```

- Install dependencies
```bash
npm install
```
Your server should now be running at http://locahost:3000
### 2.2 Back End

- Fork the **[Back-End repository](https://github.com/Flower-dev/Project-10-Bank-API)**.
- Clone it on your computer.

** Start the back-end ** 
- Create a MongoDB image
```bash
$ docker run --name bankapp-mongo -p 27017:27017 -d mongo:latest
```

- Install dependencies
```bash
npm install
```

- Start local dev server
```bash
npm run dev:server
```

- Populate database with two users
```bash
npm run populate-db
```

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs
## 3. Infos

**Tony Stark**

- First Name: Tony
- Last Name: Stark
- Email: tony@stark.com
- Password: password123

**Steve Rogers**

- First Name: Steve,
- Last Name: Rogers,
- Email: steve@rogers.com,
- Password: password456