const homeController = {
  showHomePage: (req, res) => {
    try {
      res.status(200).send("Hello World");
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
};

module.exports = homeController;
