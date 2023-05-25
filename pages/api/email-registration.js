import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (method === "POST") {
    const { email, eventId } = req.body;

    if(!email | !email.includes('@')) {
      res.status(422).json({message: 'Invalid email address'});
      return;
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id == eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: "This email has already been registered" });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    if (!allEvents) {
      return res.status(200).json({
        message: "Events data not found",
      });
    }

    return res.status(200).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}
