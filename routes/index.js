import express from 'express'
import { getAll } from '../models/index.js';

const router= express.Router()


router.get('/', async function(req, res) {
  let result = await getAll();
  return res.json({success: true, payload: result});


})

// router.post 

// router.patch 

// router.delete 

export default router;