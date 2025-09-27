import React, { useState } from "react";
import axios from "axios";
import API from "../api/BackendRouting";

export default function TicketForm({ onTicketCreated }) {
  const [form, setForm] = useState({ name: "", issue: "", priority: "Low" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API.CREATE_TICKET.url, form);
      localStorage.setItem("userName", form.name);
      setForm({ name: "", issue: "", priority: "Low" });
      onTicketCreated();
    } catch (error) {
      console.error("Error creating ticket:", error);
      alert("Failed to create ticket");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
      <input name="issue" value={form.issue} onChange={handleChange} placeholder="Describe Issue" required />
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Raise Ticket</button>
    </form>
  );
}
