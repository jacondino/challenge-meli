## Summary

1.  [Evidence](#evidence)

1.  [Getting Started](#getting-started)

1.  [Run Tests](#run-tests)

## Evidence

### Desktop

![](https://imgur.com/0bCWeth.jpg) ![](https://imgur.com/O9kxqnB.jpg)

### Mobile

<img src="https://imgur.com/3cr4Jy4.jpg" width="250" height="auto" /> <img src="https://imgur.com/AejwLpY.jpg" width="250" height="auto" /> <img src="https://imgur.com/zF8z2WS.jpg" width="250" height="auto" />

## Getting Started

Install dependencies

```bash
npm i
# or
yarn

```

Generate SSL credentials to run the project locally HTTPS:

1. Create folder .cert

2. Add in folder .cert your Key and Certification with filename key.pem and cert.pem

```bash

|- .cert

| -- key.pem

| -- cert.pem

```

3. Create file .env and put .env.example

4. Start the project

```bash
npm run start
# or
yarn start

```

5. Access the project in https://localhost:3000

## Run Tests

```bash
npm run test
# or
yarn test
```
