import { Router } from "express";
import { validateHandler } from "../../middleware/middleware";
import { createChat, getChats, getOneChat } from "./chat.controller";
import { createChatDto, getChatDto } from "./chat.dto";

const router = Router();

router.get("/", getChats);

router.get("/:idUser", validateHandler(getChatDto, "params"), getOneChat);

router.post("/", validateHandler(createChatDto, "body"), createChat);

//router.delete("/:id", validateHandler(getMessageDto, "params"), deleteMessage);
export default router;
