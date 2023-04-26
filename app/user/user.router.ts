import { Router } from "express";
import {
  deleteUser,
  editUser,
  getUsers,
  getOneUser,
  createUser,
} from "./user.controller";
import { validateHandler } from "../../middleware/middleware";
import { createUserDto, getUserDto, updateUserDto } from "./user.dto";

const router = Router();

router.get("/", getUsers);
router.get("/:id", validateHandler(getUserDto, "params"), getOneUser);
router.post("/", validateHandler(createUserDto, "body"), createUser);
router.patch(
  "/:id",
  validateHandler(getUserDto, "params"),
  validateHandler(updateUserDto, "body"),
  editUser
);
router.delete("/:id", validateHandler(getUserDto, "params"), deleteUser);
export default router;
