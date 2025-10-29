const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

let user = { username: "user1", balance: 1000 };

router.get("/balance", auth, (req, res) => {
  res.json({ balance: user.balance });
});

router.post("/deposit", auth, (req, res) => {
  const { amount } = req.body;
  user.balance += amount;
  res.json({ message: `Deposited $${amount}`, newBalance: user.balance });
});

router.post("/withdraw", auth, (req, res) => {
  const { amount } = req.body;
  if (amount > user.balance)
    return res.status(400).json({ message: "Insufficient balance" });

  user.balance -= amount;
  res.json({ message: `Withdrew $${amount}`, newBalance: user.balance });
});

module.exports = router;
