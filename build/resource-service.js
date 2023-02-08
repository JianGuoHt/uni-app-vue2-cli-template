const Koa = require('koa');
const koaStatic = require('koa-static');
const chalk = require('chalk');
const path = require('path');

const app = new Koa();

app.use(koaStatic(path.join(__dirname, '../src/static')));

app.listen(3000, () => {
  console.log('');
  console.log('静态资源服务');
  console.log('==========================================');
  console.log('server is running on ' + chalk.green('http://localhost:3000'));
  console.log('==========================================');
});
