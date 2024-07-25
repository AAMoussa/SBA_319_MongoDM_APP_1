// Create controllers to handle business logic

const { getUsers } = require('../models/user');

async function getUsers(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getUsers };