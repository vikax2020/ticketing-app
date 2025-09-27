import express from "express";
import {
  createTicket,
  getTickets,
  updateTicketStatus,
} from "../controllers/ticketController.js";

const ticketRoute = express.Router();

// POST - create a new ticket (normal user, no login required)
ticketRoute.post("/ticket", createTicket);

// GET - fetch all tickets (for frontend, admin role handled in frontend)
ticketRoute.get("/tickets", getTickets);

// PUT - update ticket status (admin only)
ticketRoute.put("/:id", updateTicketStatus);

export default ticketRoute;
