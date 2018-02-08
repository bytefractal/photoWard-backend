async function getUsers(req, res) {
  res.status(200).json({message: 'success'});
}

const UsersController = {
  getUsers,
};

module.exports = { UsersController };
