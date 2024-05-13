
const { Router } = require("express");
const userfeedback = require("../model/userfeedback");

const router = Router();

router.get("/feedback", (req, res) => {
  return res.render("feedback");
});

router.post("/feedback", async (req, res) => {
  const { fullname, email, number, body } = req.body;
  await userfeedback.create({
      fullname,
      email,
      number,
      body
  });
  return res.redirect("/");
});


module.exports = router;
