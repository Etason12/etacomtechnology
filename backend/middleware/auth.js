const AUTH_TOKEN = process.env.AUTH_TOKEN || 'change-this-to-a-secure-random-token';

function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || token !== AUTH_TOKEN) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }
  next();
}

module.exports = { requireAuth };
