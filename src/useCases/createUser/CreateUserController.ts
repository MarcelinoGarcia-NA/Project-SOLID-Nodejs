import { CreateUserUseCase } from "./CreateUserUseCases";
import { Request, Response } from "express";

export class CreateUserControllers {

    constructor(private createUsercase: CreateUserUseCase) { }

    async Handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;
        try {
            const user = await this.createUsercase.execute({
                name,
                email,
                password
            })
            return response.status(201).send(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error!"
            })
        }
    }
}
