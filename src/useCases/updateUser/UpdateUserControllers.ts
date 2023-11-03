import { Request, Response } from "express";
import { UpdateUserUseCases } from "./updateUserUseCases";
import { User } from "../../entities/User";

export class UpdateUserControllers {

    constructor(private update: UpdateUserUseCases) { }

    async Handler(request: Request, response: Response): Promise<Response> {
        const id = await request.params.id;
        const userRequest = await request.body;
        const user = new User(userRequest);
        const data = await this.update.execute(id, user);

        return response.status(200).json(data)
    }
}