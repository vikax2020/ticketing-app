import ticketModel from "../models/ticketModel.js";

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const { name, issue, priority } = req.body;

    if (!name || !issue || !priority) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Name, issue and priority are required",
        body: {},
      });
    }

    const newTicket = await ticketModel.create({
      name,
      issue,
      priority,
      status: "open",
    });

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Ticket created successfully",
      body: newTicket,
    });
  } catch (error) {
    console.error("createTicket error:", error);
    return res.status(500).json({
      success: false,
      status: 500,
      message: "Error creating ticket",
      body: {},
    });
  }
};

// Get tickets (user or admin)
export const getTickets = async (req, res) => {
  try {
    const { role, name } = req.query;

    let tickets;

    if (role === "admin") {
      tickets = await ticketModel.find().sort({ createdAt: -1 });
    } else {
      tickets = await ticketModel.find({ name }).sort({ createdAt: -1 });
    }

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Tickets fetched successfully",
      body: tickets,
    });
  } catch (error) {
    console.error("getTickets error:", error);
    return res.status(500).json({
      success: false,
      status: 500,
      message: "Error fetching tickets",
      body: {},
    });
  }
};

// Update ticket status (admin only)
export const updateTicketStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "Status is required",
        body: {},
      });
    }

    const ticket = await ticketModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!ticket) {
      return res.status(404).json({
        success: false,
        status: 404,
        message: "Ticket not found",
        body: {},
      });
    }

    return res.status(200).json({
      success: true,
      status: 200,
      message: "Ticket status updated",
      body: ticket,
    });
  } catch (error) {
    console.error("updateTicketStatus error:", error);
    return res.status(500).json({
      success: false,
      status: 500,
      message: "Error updating ticket status",
      body: {},
    });
  }
};
