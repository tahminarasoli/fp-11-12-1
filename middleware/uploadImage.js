const fs = require("fs");

const uploadImage = async (req, res, next) => {
  
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: "No files were uploaded." });
    }
    const file = req.files.file;

    // console.log(file)

    if (
      file.mimetype !== "image/jpeg" &&
      file.mimetype !== "image/png" &&
      file.mimetype !== "image/jpg"
    ) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    if (file.size > 1024 * 1024) {
      // 1mb
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: "Size too large." });
    }

    next();

    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }
  });
};

module.exports = uploadImage;
