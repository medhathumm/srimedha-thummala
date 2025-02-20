import express from "express";
import { sendInquiryEmail } from "../controllers/emailController.js";
import multer from "multer";

const emailRouter = express.Router();

emailRouter.post("/inquiryEmail", sendInquiryEmail);

export default emailRouter;