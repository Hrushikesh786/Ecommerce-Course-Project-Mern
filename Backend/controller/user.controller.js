import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
//for signup
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "interrnal server error" });
  }
};

//for login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch =await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    } else {
      return res.status(200).json({
        message: "Login Successfull",
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error",+error.message);
    return res.status(500).json({ message: "Server Error" });
  }
};