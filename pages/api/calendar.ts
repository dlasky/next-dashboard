import ical from "ical";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const url = "https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(url);
    const data = ical.parseICS(response.data);
    const output = [];
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        var ev = data[k];
        if (data[k].type == "VEVENT") {
          output.push({ name: ev.summary, start: ev.start });
        }
      }
    }
    res.status(200).json(output);
  } catch (e) {
    res.status(500).json({ error: true });
  }
};
