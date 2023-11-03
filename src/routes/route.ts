
import { createUserController } from "../useCases/createUser";
import { listUserController } from "../useCases/listUsers";
import { updateUserControllers } from "../useCases/updateUser";
import express from 'express';

const route = express.Router();

route.post("/user", (request, response) => {
    return createUserController.Handle(request, response);
});
route.get("/users", (request, response) => {
    return listUserController.Handler(request, response);
});
route.put("/user/:id", (request, response) => {
    return updateUserControllers.Handler(request, response);
});

export { route };