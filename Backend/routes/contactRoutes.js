// Backend/routes/contactRoutes.js (ES Module Version)
import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    const newContact = new Contact({ name, email, company, service, message });
    await newContact.save();

    res.status(201).json({
      success: true,
      message: '✅ Message saved to MongoDB successfully!',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: '❌ Server Error. Please try again.',
    });
  }
});

export default router;