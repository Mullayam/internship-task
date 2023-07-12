const CheckRole = async (req, res, next) => {
  try {
    const UserRole = req.body.user_role;
    if (UserRole === "00x45") {
      throw new Error("You don't have permission to access this");
    } else {
      next();
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
