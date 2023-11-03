import dotenv from 'dotenv';
import { app } from './app';
import { route } from './routes/route';

dotenv.config();
const port = process.env.PORT || 4002;

app.listen(port, () => {
    console.log("Running server in port: " + port);
});

app.use(route);
