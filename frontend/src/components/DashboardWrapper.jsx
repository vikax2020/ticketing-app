import React, { useState, useEffect } from "react";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import AdminLogin from "../components/AdminLogin";

export default function DashboardWrapper() {
  const [role, setRole] = useState("user");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);
  }, []);

  const reloadTickets = () => setRefresh((prev) => !prev);

  const handleLoginSuccess = () => {
    setRole("admin");
    setShowAdminLogin(false);
    setRefresh((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole("user");
    setRefresh((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini Helpdesk</h1>

      {/* Admin login/logout buttons */}
      {role !== "admin" && !showAdminLogin && (
        <button onClick={() => setShowAdminLogin(true)}>Admin Login</button>
      )}
      {showAdminLogin && <AdminLogin onLoginSuccess={handleLoginSuccess} />}
      {role === "admin" && (
        <button onClick={handleLogout} style={{ marginBottom: "10px" }}>Logout</button>
      )}

      {/* Ticket Form only for normal user */}
      {role === "user" && <TicketForm onTicketCreated={reloadTickets} />}

      {/* Ticket list */}
      <TicketList refresh={refresh} role={role} />
    </div>
  );
}
