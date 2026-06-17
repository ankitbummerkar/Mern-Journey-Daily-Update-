import express from "express";
import { getMessages } from "../controller/mesg.controller.js";
const router = express.Router();

router.get("/messages", getMessages);

export default router;
