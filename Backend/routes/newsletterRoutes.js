const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// Subscribe Newsletter
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if email already exists
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Email already subscribed!'
      });
    }

    const newsletter = new Newsletter({ email });
    await newsletter.save();
    
    res.status(201).json({
      success: true,
      message: 'Subscribed successfully!',
      data: newsletter
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to subscribe',
      error: error.message
    });
  }
});

// Get All Subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.status(200).json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch subscribers',
      error: error.message
    });
  }
});

// Unsubscribe
router.delete('/:email', async (req, res) => {
  try {
    await Newsletter.findOneAndDelete({ email: req.params.email });
    res.status(200).json({
      success: true,
      message: 'Unsubscribed successfully!'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to unsubscribe',
      error: error.message
    });
  }
});

module.exports = router;