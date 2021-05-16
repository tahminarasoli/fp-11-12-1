const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthController = {
  register: async (req, res) => {
    const {
      email,
      first,
      last,
      password,
      confirmPassword,
      phone,
      image,
      address,
      city,
      postcode,
    } = req.body;

    //   const result = validateUser({email, firstName, lastName, password});
    //   console.log(result)
    //   const {error} = result
    //   if (error) {
    //     return res.status(400).send(error.details[0].message);
    //   }

    try {
      const existingUser = await UserModel.findOne({ email });

      if (existingUser)
        return res
          .status(400)
          .json({ errors: [{ message: "User Already exist!!" }] });

      if (password !== confirmPassword)
        return res
          .status(400)
          .json({ errors: [{ message: "Password don't match." }] });

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await UserModel.create({
        name: {
          first,
          last,
        },
        email,
        password: hashedPassword,
        phone,
        image,
        address: {
          address,
          city,
          postcode,
        },
        // name: `${firstName} ${lastName}`,
      });

      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ errors: [{ message: "Something went wrong." }] });
    }
  },

  authLogin: async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    try {
      const existingUser = await UserModel.findOne({ email });

      if (!existingUser) {
        return res.status(404).json({ message: "User doesn't exist." });
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordCorrect) {
        return res.status(404).json({ message: "Invalid credentials." });
      }

      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        "test",
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ message: "Something went wrong." });
    }

  },

  authHelp: async(req, res ) => {
    const {
      name,
      helpTitle,
      description,
      dateChoice,
      availableSlot
    } = req.body;

    try {
      
    } catch (error) {
      res.status(502).json({ errors: [{ message: "Something went wrong." }] });
    }

  }
};

module.exports = AuthController;
