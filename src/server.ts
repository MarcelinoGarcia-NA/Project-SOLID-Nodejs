import dotenv from 'dotenv';
import { app } from './app';
import { createUserController } from './useCases/createUser';
import { listUserController } from './useCases/listUsers';

dotenv.config();
const port = process.env.PORT || 4002;

app.listen(port, () => {
    console.log("Running server in port: " + port);
});

app.post("/user", (request, response) => {
    return createUserController.Handle(request, response);
});

app.get("/users", (request, response) => {
    return listUserController.Handler(request, response);
});