const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

// Kayıt
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Admin zaten var" });

    const hashed = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ email, password: hashed });
    await newAdmin.save();
    res.json({ msg: "Admin kayıt olusturuldu" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Sunucu hatası" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "Admin bulunamadı ❌" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Şifre yanlış ❌" });

    res.json({ msg: "Giriş başarılı ✅" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Sunucu hatası" });
  }
});

module.exports = router;
