const express = require("express");
const router = express.Router();

router.get("/about", (res, req) => {
  res.send("how about about us");
});
router.get("/contact", (res, req) => {
  res.send("how about contact us");
});
module.exports = router;
