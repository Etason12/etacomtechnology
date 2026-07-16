const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    slug: { type: String, required: true, unique: true, trim: true, maxlength: 200 },
    excerpt: { type: String, trim: true, maxlength: 500 },
    content: { type: String, required: true, maxlength: 50000 },
    category: { type: String, default: "General", trim: true, maxlength: 100 },
    image: { type: String, trim: true },
    author: { type: String, default: "Etacom Technology", trim: true, maxlength: 100 },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
