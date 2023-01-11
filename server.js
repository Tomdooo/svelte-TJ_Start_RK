// my-server.js
import { handler } from './build/handler.js';
import express from 'express';

const app = express();

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(5173, () => {
    console.log('listening on port ' + (5173));
});