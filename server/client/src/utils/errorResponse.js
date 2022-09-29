// import {errorResponse} from "../alinacak sayfa"

const errorHandler = (err, req, res, next) => {
  console.log(err);

  let error = { ...err };

  error.message = err.message;
};
