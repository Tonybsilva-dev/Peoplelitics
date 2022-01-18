import { CreateMailController } from "./createMailController";
import { CreateMailService } from "./createMailService";


const createMailService = new CreateMailService()

const createMailController = new CreateMailController(
    createMailService,
)

export { createMailController, createMailService };
