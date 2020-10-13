const Koa = require('koa');
const app = new Koa();


/* Add a date method to the 'context' */
app.context.date = Date();


/* Response */
app.use(ctx => {
    // Uses the state
    ctx.state.user = 'John Doe';

    // Uses the request object
    let from = ctx.request.origin;
    let method = ctx.request.method;

    // Prints out message with date
    ctx.body = `Hello, There! ${ctx.state.user} on ${ctx.date}`;
    console.log(from, method);
});

app.listen(3000);