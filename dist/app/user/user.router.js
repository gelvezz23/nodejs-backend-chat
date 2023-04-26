"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const middleware_1 = require("../../middleware/middleware");
const user_dto_1 = require("./user.dto");
const router = (0, express_1.Router)();
router.get("/", user_controller_1.getUsers);
router.get("/:id", (0, middleware_1.validateHandler)(user_dto_1.getUserDto, "params"), user_controller_1.getOneUser);
router.post("/", (0, middleware_1.validateHandler)(user_dto_1.createUserDto, "body"), user_controller_1.createUser);
router.patch("/:id", (0, middleware_1.validateHandler)(user_dto_1.getUserDto, "params"), (0, middleware_1.validateHandler)(user_dto_1.updateUserDto, "body"), user_controller_1.editUser);
router.delete("/:id", (0, middleware_1.validateHandler)(user_dto_1.getUserDto, "params"), user_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.router.js.map