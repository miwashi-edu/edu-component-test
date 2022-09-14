# edu-component-test

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
mkdir controller
touch ./controller/user.js
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
code .
```
[./controllers/user.js]()https://gist.github.com/miwashiab/0aaef90dc59a656e5f2c235a81424537
<script src="https://gist.github.com/miwashiab/d8b6c8c12d3a4426336d89c5b59e2682.js"></script>
