import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { isUserExist } from "../../helpers/isUserExist.js";

import HashPassword from "../../utils/hashPassword.js";
import SendResponse from "../../helpers/SendResponse.js";
import connect from "../../config/connect.js";
import BlacklistedTokens from "../../utils/BlacklistedToken.js";
class AuthenticationController {
  async Login(req, res) {
   
    const { email, password } = req.body;
    const checkUser = await isUserExist(email);

    if (!checkUser) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }
    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).send({ token: "tes" });
  }
  async Register(req, res) {
    try {
      const { user_email, first_name, password } = req.body;
      if (!user_email || !password || !first_name) {
        return res.status(401).send({ message: "All Fields Are Required" });
      }
      const checkUser = await isUserExist(user_email);

      if (checkUser !== null) {
        return res.status(401).send({ message: "User Already Exist" });
      }

      const hashedPassword = HashPassword(password);
      const createUser = connect.collection("user");
      createUser.insertOne({
        user_email: user_email,
        user_location: "",
        user_info: { first_name },
        password: hashedPassword,
        role: "00x45",
        vehicle_info: [],
      });
      const token = jwt.sign(
        {
          user_id: createUser._id,
          user_email: user_email,
          first_name: first_name,
          role: "00x45",
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
      res.cookie("token", token, { httpOnly: true });
      SendResponse(res, 201, true, "User Created Successfully", token);
    } catch (error) {
      console.log(error);
      SendResponse(res, 400, false, error);
    }
  }
  async ForgetPassword(req, res) {
    const userTokens = BlacklistedTokens.filter((token) => {
      try {
        return jwt.verify(token, secretKey).user_email === req.user.user_email;
      } catch (err) {
        return false;
      }
    });  
    BlacklistedTokens.push(...userTokens);
    res.send("Hello World").end();
  }
  async CurrentUser(req, res) {
    try {
      const UserModel = connect.collection("user");
      const User = await UserModel.findOne({ user_email: req.body.user_email });
      if (User.user_email !== req.body.user_email) {
        res.clearCookie("token")
              return res.status(401).send({ message: "Invalid Credentials" });
            }
      return res.status(200).send({ User: req.body });
    } catch (error) {
      console.log(error);
      return res.status(200).send({ error: error.message });
    }
  }
  async Logout(req, res) {
    BlacklistedTokens.push(req.headers.authorization.split(' ')[1]);
    res.clearCookie("token");
    return res.status(200).send({ message: "Logout Successful" });
  }
}
export default new AuthenticationController();
