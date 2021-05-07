const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");

const AuthController = {
  authRegister: async (req, res) => {
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
};

module.exports = AuthController;
