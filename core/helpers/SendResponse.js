export default function SendResponse(res, status, success, message, content) {
  
  return res.status(status).send({
    success,
    message,
    content,
  });
}
