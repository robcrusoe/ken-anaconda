const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello, There!';
});

app.listen(3000);