import { Request, Response } from "express";
import { ListUsersUseCases } from "./ListUsersUseCases";

export class ListUserController {
    constructor(private listUsersUseCases: ListUsersUseCases) { }

    async Handler(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.listUsersUseCases.execute();
            return response.status(200).json(users);
        } catch (err) {
            return response.status(400).json("Ocorreu um erro na aplicação");
        }
    }
}