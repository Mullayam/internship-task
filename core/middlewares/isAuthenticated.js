import jwt from "jsonwebtoken";
import BlacklistedTokens from "../utils/BlacklistedToken.js";
export const isAuthenticated = (req, res, next) => {
  try {
    const AuthToken = req.get("Authorization");
    if (typeof AuthToken === "undefined") {
      throw new Error("Invalid Auth Token");
    }
    const token = AuthToken.split(" ")[1];
    if (BlacklistedTokens.includes(token)) {
      throw new Error("Token is Expired");
    }
    const DecryptToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body = {
      user_id: DecryptToken.user_id,
      user_email: DecryptToken.user_email,
      user_role: DecryptToken.user_role,
      first_name: DecryptToken.first_name,
    };
    next();
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
