import { CreateUserAccessControlListController } from "./createUserACLController";
import { CreateUserAccessControlListService } from "./createUserACLService";





const createUserAccessControlListService = new CreateUserAccessControlListService()

const createUserAccessControlListController = new CreateUserAccessControlListController(
    createUserAccessControlListService
)

export { createUserAccessControlListController, createUserAccessControlListService };
