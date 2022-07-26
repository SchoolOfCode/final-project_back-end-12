import express from "express";
import {
  getAll,
  getByItem,
  getByMonth,
  getByAllergen,
  getByFamily,
  getByFoodType,
  getByUsedAs,
} from "../models/index.js";
import { getRandom } from "../helper_scripts/randomGet.js";

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
  if (req.query.allergen !== undefined) {
    let result = await getByAllergen(req.query.allergen);
    return res.json({ success: true, payload: result });
  }
  if (req.query.family !== undefined) {
    let result = await getByFamily(req.query.family);
    return res.json({ success: true, payload: result });
  }
  if (req.query.foodType !== undefined) {
    let result = await getByFoodType(req.query.foodType);
    return res.json({ success: true, payload: result });
  }
  if (req.query.usedAs !== undefined) {
    let result = await getByUsedAs(req.query.usedAs);
    return res.json({ success: true, payload: result });
  }
  let result = await getAll();
  return res.json({ success: true, payload: result });
});

router.get("/random", async function (req, res) {
  if (req.query.month !== undefined) {
    let allResults = await getByMonth(req.query.month);
    let result = getRandom(allResults);
    return res.json({ success: true, payload: result });
  }
  return res.json({
    success: false,
    payload: "Sorry, no random food for you today.",
  });
});

export default router;
