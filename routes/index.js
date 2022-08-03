import express from "express";
import { getAll, getByItem, getByMonth } from "../models/index.js";

export const router = express.Router();

router.get("/", async function (req, res) {
  if (req.query.item !== undefined) {
    let result = await getByItem(req.query.item);
    return res.json({ success: true, payload: result });
  }
  if (req.query.month !== undefined) {
    let result = await getByMonth(req.query.month);
    return res.json({ success: true, payload: result });
  }
  let result = await getAll();
  return res.json({ success: true, payload: result });
});

// router.post

// router.patch

// router.delete

export default router;
