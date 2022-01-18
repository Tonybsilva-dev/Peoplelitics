import { UploadAvatarUserController } from "./uploadAvatarUserController";
import { UploadAvatarUserService } from "./uploadAvatarUserService";



const uploadAvatarUserService = new UploadAvatarUserService();

const uploadAvatarUserController = new UploadAvatarUserController(uploadAvatarUserService);

export { uploadAvatarUserService, uploadAvatarUserController }