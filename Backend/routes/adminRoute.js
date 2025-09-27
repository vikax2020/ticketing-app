
import express from "express";
const adminRoute = express.Router();

adminRoute.post("/adminLogin", (req, res) => {
  const { email, password } = req.body;

  if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
    return res.json({ success: true, message: "Admin login successful" });
  } else {
    return res.json({ success: false, message: "Invalid admin credentials" });
  }
});

export default adminRoute;
