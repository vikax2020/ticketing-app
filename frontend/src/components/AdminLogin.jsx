import React, { useState } from "react";

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === process.env.REACT_APP_ADMIN_EMAIL &&
      password === process.env.REACT_APP_ADMIN_PASS
    ) {
      localStorage.setItem("role", "admin");
      onLoginSuccess();
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input type="email" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
}
