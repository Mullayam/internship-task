import connect from "../config/connect.js";

export async function isUserExist(value) {
  const User = connect.collection("user");
  const isExist = await User.findOne({ user_email: value });
  return isExist;
}
