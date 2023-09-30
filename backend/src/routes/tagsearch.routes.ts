import express from 'express';
import * as TagSearchController from "../controllers/tagsearch.controllers";

const router = express.Router();

router.get("/autocomplete", TagSearchController.autocomplete);

export default router;