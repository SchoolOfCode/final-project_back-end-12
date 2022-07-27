import express from "express";
import { getAll, getByItem } from "../models/index.js";

const router = express.Router();

router.get("/", async function (req, res) {
/*   console.log(req.query);
  if (req.query !== undefined) {
    let result = await getByItem(req.query);
    return res.json({ success: true, payload: result });
  } */
  console.log(`Getting all items`);
  let result = await getAll();
  return res.json({ success: true, payload: result });
});

// router.post

// router.patch

// router.delete

export default router;
