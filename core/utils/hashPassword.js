import bcrypt from "bcryptjs";
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
export default function HashPassword(PasswordStr) {
  return bcrypt.hashSync(PasswordStr, salt);
}
export function ComparePassword(HashedPassword,Password) {
   return bcrypt.compareSync(Password, HashedPassword);
}
