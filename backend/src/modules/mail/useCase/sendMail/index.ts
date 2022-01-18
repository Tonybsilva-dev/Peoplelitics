import { SendMailController } from "./sendMailController";
import { SendMailService } from "./sendMailService";

const sendMailService = new SendMailService()

const sendMailController = new SendMailController(
    sendMailService,
)

export { sendMailController, sendMailService };
