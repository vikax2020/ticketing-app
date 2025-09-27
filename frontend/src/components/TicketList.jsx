import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../api/BackendRouting";

export default function TicketList({ refresh, role }) {
  const [tickets, setTickets] = useState([]);
  const userName = localStorage.getItem("userName") || "";

  const fetchTickets = async () => {
    try {
      const res = await axios.get(API.GET_TICKETS.url, {
        params: role === "user" ? { role, name: userName } : { role },
      });
      setTickets(res.data.body);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
    const interval = setInterval(fetchTickets, 5000);
    return () => clearInterval(interval);
  }, [refresh, role]);

  const handleStatusChange = async (id, status) => {
    if (role !== "admin") return;
    try {
      await axios.put(API.UPDATE_TICKET(id).url, { status });
      fetchTickets();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Issue</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length === 0 ? (
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>No tickets found</td>
          </tr>
        ) : (
          tickets.map((ticket) => (
            <tr key={ticket._id}>
              <td>{ticket.name}</td>
              <td>{ticket.issue}</td>
              <td>{ticket.priority}</td>
              <td>
                {role === "admin" ? (
                  <select
                    value={ticket.status}
                    onChange={(e) => handleStatusChange(ticket._id, e.target.value)}
                  >
                    <option>open</option>
                    <option>In Progress</option>
                    <option>Closed</option>
                  </select>
                ) : (
                  ticket.status
                )}
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
