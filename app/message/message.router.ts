import { Router } from "express";
import multer from "multer";
import {
  deleteMessage,
  editMessage,
  getMessage,
  getMessageByUser,
  getOneMessage,
  sendMessage,
} from "./message.controller";
import { validateHandler } from "../../middleware/middleware";
import {
  createMessageDto,
  getMessageByUserDto,
  getMessageDto,
  updateMessageDto,
} from "./message.dto";

const router = Router();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },

  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    cb(null, `${file.originalname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage: storage });
router.get("/", getMessage);

router.get("/:id", validateHandler(getMessageDto, "params"), getOneMessage);
router.get(
  "/user/:user",
  validateHandler(getMessageByUserDto, "params"),
  getMessageByUser
);
router.post(
  "/",
  upload.single("file"),
  validateHandler(createMessageDto, "body"),
  sendMessage
);
router.patch(
  "/:id",
  validateHandler(getMessageDto, "params"),
  validateHandler(updateMessageDto, "body"),
  editMessage
);
router.delete("/:id", validateHandler(getMessageDto, "params"), deleteMessage);
export default router;
