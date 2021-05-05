const messageFromServer = "Hello From Server"

const homeController = {
  showHomePage: (req, res) => {
    try {
      res.status(200).json(messageFromServer);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = homeController;
