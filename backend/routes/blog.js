const router = require("express").Router();
const Blog = require("../models/Blog");
const { requireAuth } = require("../middleware/auth");

const BLOG_FIELDS = ["title", "slug", "excerpt", "content", "category", "image", "author", "published"];

router.get("/", async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 10));
    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find({ published: true })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select("title slug excerpt category image createdAt author"),
      Blog.countDocuments({ published: true }),
    ]);

    res.json({
      success: true,
      data: blogs,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch blog posts" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true });
    if (!blog) return res.status(404).json({ success: false, error: "Not found" });
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch blog post" });
  }
});

router.post("/", requireAuth, async (req, res) => {
  try {
    const filtered = {};
    for (const field of BLOG_FIELDS) {
      if (req.body[field] !== undefined) {
        filtered[field] = req.body[field];
      }
    }
    const blog = await Blog.create(filtered);
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, error: "A post with that slug already exists" });
    }
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: messages.join(", ") });
    }
    res.status(400).json({ success: false, error: "Invalid blog data" });
  }
});

module.exports = router;
