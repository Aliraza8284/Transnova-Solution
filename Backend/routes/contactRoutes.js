import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// ==========================================
// GENERATE TICKET ID
// ==========================================

const generateTicketId = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomPart = "";

  for (let i = 0; i < 5; i++) {
    randomPart += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return `TNS-${year}${month}${day}-${randomPart}`;
};

// ==========================================
// CREATE CONTACT
// ==========================================

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      company,
      service,
      message,
    } = req.body;

    // ======================================
    // VALIDATION
    // ======================================

    if (!fullName || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // ======================================
    // FIND PREVIOUS CUSTOMER
    // ======================================

    const previousContact = await Contact.findOne({
      email: normalizedEmail,
    }).sort({ createdAt: -1 });

    // ======================================
    // CUSTOMER STATUS
    // ======================================

    const customerStatus = previousContact
      ? "Returning Customer"
      : "New Customer";

    // ======================================
    // PREVIOUS TICKET
    // ======================================

    const previousTicket = previousContact
      ? previousContact.ticketId
      : "No previous ticket";

    // ======================================
    // SUBMISSION NUMBER
    // ======================================

    const totalContacts = await Contact.countDocuments();

    const submissionNumber = totalContacts + 1;

    // ======================================
    // CREATE TICKET
    // ======================================

    const ticketId = generateTicketId();

    // ======================================
    // SAVE
    // ======================================

    const contact = await Contact.create({
      ticketId,
      submissionNumber,
      fullName: fullName.trim(),
      email: normalizedEmail,
      company: company?.trim() || "Not provided",
      service,
      message: message.trim(),
      previousTicket,
      customerStatus,
    });

    // ======================================
    // RESPONSE
    // ======================================

    return res.status(201).json({
      success: true,

      message: "Your message has been submitted successfully.",

      ticket: {
        ticketId: contact.ticketId,
        submissionNumber: contact.submissionNumber,
        customerStatus: contact.customerStatus,
        previousTicket: contact.previousTicket,
        status: contact.status,
      },
    });

  } catch (error) {
    console.error("❌ Contact API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

// ==========================================
// FIND TICKET
// ==========================================

router.get("/ticket/:ticketId", async (req, res) => {
  try {
    const { ticketId } = req.params;

    const contact = await Contact.findOne({ ticketId });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found.",
      });
    }

    return res.json({
      success: true,
      ticket: contact,
    });

  } catch (error) {
    console.error("❌ Ticket Search Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
});

export default router;