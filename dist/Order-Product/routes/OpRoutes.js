"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OpController_1 = require("../Controller/OpController");
const auth_1 = require("../../shared/middlewares/auth");
const OpRoutes = (0, express_1.Router)();
OpRoutes.get('/', auth_1.authMiddleware, OpController_1.getOp);
OpRoutes.get('/:rol_id', auth_1.authMiddleware, OpController_1.getOpById);
OpRoutes.post('/', auth_1.authMiddleware, OpController_1.createOp);
OpRoutes.put('/:rol_id', auth_1.authMiddleware, OpController_1.updateOp);
OpRoutes.delete('/:rol_id', auth_1.authMiddleware, OpController_1.deleteOp);
exports.default = OpRoutes;