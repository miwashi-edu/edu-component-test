# edu-component-test

## Info

[Artikel](https://rahmanfadhil.com/test-express-with-supertest/)
[Video](https://www.youtube.com/watch?v=r5L1XRZaCR0)

## Instrctions

```bash
cd ~
cd ws
mkdir edu-component-testing
cd edu-component-testing
npm init -y
npm install express
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
sed -i 's/index.js/server.js/' package.json
curl -L https://gist.github.com/miwashiab/d8b6c8c12d3a4426336d89c5b59e2682/raw/server.js -o server.js
curl -L https://gist.github.com/miwashiab/0aaef90dc59a656e5f2c235a81424537/raw/user.js -o ./routes/user.js
curl -L https://gist.github.com/miwashiab/96c06acbeacd524b190eb2d6a30f0aef/raw/user.js -o ./controllers/user.js
code .
```

[server.js](https://gist.github.com/miwashiab/d8b6c8c12d3a4426336d89c5b59e2682)  

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

