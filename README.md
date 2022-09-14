# edu-component-test

## Info

[Artikel](https://rahmanfadhil.com/test-express-with-supertest/)
[Video](https://www.youtube.com/watch?v=r5L1XRZaCR0)

## Instructions

```bash
cd ~
cd ws
mkdir edu-component-testing
cd edu-component-testing
npm init -y
npm install express
npm install uuid
npm install jest --save-dev
npm install chai --save-dev
npm install chai-http --save-dev
npm install supertest --save-dev
npm install nodemon --save-dev
mkdir __tests__
touch ./__tests__/supertest.js
touch ./__tests__/chai-http.js
touch server.js
mkdir model
touch ./model/user.js
mkdir routes
touch ./routes/user.js
mkdir controllers
touch ./controllers/user.js
git init
echo "node_modules" > .gitignore
echo "logs" >> .gitignore
echo "*.log" >> .gitignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo ".env.test" >> .gitignore
git add .
git commit -m "initial commit"
sed -i '' 's/index.js/server.js/' package.json
curl -L https://gist.github.com/miwashiab/d8b6c8c12d3a4426336d89c5b59e2682/raw/server.js -o server.js
curl -L https://gist.github.com/miwashiab/0aaef90dc59a656e5f2c235a81424537/raw/user.js -o ./routes/user.js
curl -L https://gist.github.com/miwashiab/96c06acbeacd524b190eb2d6a30f0aef/raw/user.js -o ./controllers/user.js
curl -L https://gist.github.com/miwashiab/1a71d9ebfdd9f0b5f2a1ddbb5783d37b/raw/supertest.js -o ./__tests__/supertest.js
curl -L https://gist.github.com/miwashiab/efdeba15b6521092b895da6ff569dd93/raw/chai-http.js -o ./__tests__/chai-http.js
code .
```
## package.json

```json
{
  "name": "edu-component-test",
  "version": "1.0.0",
  "description": "Simple CRUD Server",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "jest --verbose"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/miwashi-edu/edu-component-test.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/miwashi-edu/edu-component-test/issues"
  },
  "homepage": "https://github.com/miwashi-edu/edu-component-test#readme",
  "dependencies": {
    "express": "^4.18.1",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "chai": "^4.3.6",
    "chai-http": "^4.3.0",
    "jest": "^29.0.3",
    "nodemon": "^2.0.19",
    "supertest": "^6.2.4"
  }
}
```

## Server
[gist](https://gist.github.com/miwashiab/d8b6c8c12d3a4426336d89c5b59e2682)  

```bash
curl -L https://gist.github.com/miwashiab/d8b6c8c12d3a4426336d89c5b59e2682/raw/server.js -o server.js
```

## User Routes
```bash
curl -L https://gist.github.com/miwashiab/0aaef90dc59a656e5f2c235a81424537/raw/user.js -o ./routes/user.js
```
[gist](https://gist.github.com/miwashiab/0aaef90dc59a656e5f2c235a81424537)

## User Routes Swagger

```bash
#N/A
```

## User Controller Empty
[gist](https://gist.github.com/miwashiab/96c06acbeacd524b190eb2d6a30f0aef)  
```bash
curl -L https://gist.github.com/miwashiab/96c06acbeacd524b190eb2d6a30f0aef/raw/user.js -o ./controllers/user.js
```


## User Controller Fake

[gist](https://gist.github.com/miwashiab/08f8c39413ed941848b4bd3a5c97e24d)

```bash
curl -L https://gist.github.com/miwashiab/08f8c39413ed941848b4bd3a5c97e24d/raw/user.js -o ./controllers/user.js
```

## Empty Suptertest
[gist](https://gist.github.com/miwashiab/1a71d9ebfdd9f0b5f2a1ddbb5783d37b)

```bash
curl -L https://gist.github.com/miwashiab/1a71d9ebfdd9f0b5f2a1ddbb5783d37b/raw/supertest.js -o ./__tests__/supertest.js
```

## Empty Chai-HTTP
[gist](https://gist.github.com/miwashiab/efdeba15b6521092b895da6ff569dd93)

```bash
curl -L https://gist.github.com/miwashiab/efdeba15b6521092b895da6ff569dd93/raw/chai-http.js -o ./__tests__/chai-http.js
```

## Supertest Examples
[gist](https://gist.github.com/miwashiab/e532fc7628796103c861cd6339b9c18e)

```bash
curl -L https://gist.github.com/miwashiab/e532fc7628796103c861cd6339b9c18e/raw/supertest.js -o ./__tests__/supertest.js
```

## Chai-HTTP Examples
n/a

```bash
#
```
