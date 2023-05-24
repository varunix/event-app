export default function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    return res
      .status(200)
      .json({
        message: `You has been registered successfully with the email: ${req.body.email}${req.body.eventId}`
      });
  }
}
