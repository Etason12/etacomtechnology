const router = require("express").Router();
const Contact = require("../models/Contact");
const { requireAuth } = require("../middleware/auth");

const CONTACT_FIELDS = ["name", "email", "phone", "subject", "message"];

router.post("/", async (req, res) => {
  try {
    const filtered = {};
    for (const field of CONTACT_FIELDS) {
      if (req.body[field] !== undefined) {
        filtered[field] = req.body[field];
      }
    }
    const contact = await Contact.create(filtered);
    res.status(201).json({ success: true, data: contact });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: messages.join(", ") });
    }
    res.status(400).json({ success: false, error: "Invalid contact data" });
  }
});

router.get("/", requireAuth, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 20));
    const skip = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      Contact.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),
      Contact.countDocuments(),
    ]);

    res.json({
      success: true,
      data: messages,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch messages" });
  }
});

module.exports = router;
