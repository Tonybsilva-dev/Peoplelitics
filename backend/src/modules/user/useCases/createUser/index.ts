import { MailtrapMailProvider } from "../../../../shared/infra/mail/Implementations";
import { CreateUserController } from "./createUserController";
import { CreateUserService } from "./createUserService";


const createUserService = new CreateUserService()
const mailtrapMailProvider = new MailtrapMailProvider

const createUserController = new CreateUserController(
    createUserService,
    mailtrapMailProvider
)

export { createUserController, createUserService };
