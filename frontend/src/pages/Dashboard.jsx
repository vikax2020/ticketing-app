import React, { useState, useEffect } from "react";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import AdminLogin from "../components/AdminLogin";

export default function Dashboard() {
  const [role, setRole] = useState("user"); // default
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [refresh, setRefresh] = useState(false);

 
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole);
  }, []);

  const reloadTickets = () => setRefresh((prev) => !prev);

  const handleLoginSuccess = () => {
    localStorage.setItem("role", "admin"); 
    setRole("admin");
    setShowAdminLogin(false);
    reloadTickets(); 
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    setRole("user");
    reloadTickets();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mini Helpdesk</h1>

      {/* Admin Login Button */}
      {role !== "admin" && !showAdminLogin && (
        <button
          style={{ marginBottom: "20px", padding: "10px 20px", cursor: "pointer" }}
          onClick={() => setShowAdminLogin(true)}
        >
          Admin Login
        </button>
      )}

      {/* Admin Login Form */}
      {showAdminLogin && <AdminLogin onLoginSuccess={handleLoginSuccess} />}

      {/* User Ticket Form */}
      {role === "user" && <TicketForm onTicketCreated={reloadTickets} />}

      {/* Admin Logout Button */}
      {role === "admin" && (
        <button
          style={{ marginBottom: "20px", padding: "10px 20px", cursor: "pointer" }}
          onClick={handleLogout}
        >
          Logout
        </button>
      )}

      {/* Ticket List */}
      <TicketList refresh={refresh} role={role} />
    </div>
  );
}
