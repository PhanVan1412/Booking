import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  console.log("Verifying 1", req.user?.isAdmin);
  verifyToken(req, res, next, () => {
    console.log("Verifying 2", req.user);
    if (req.user?.isAdmin) {
      console.log("check admindddd");
      next();
    } else {
      console.log("code this here 35");
      return next(createError(403, "You are not authorized!"));
    }
  });
};
