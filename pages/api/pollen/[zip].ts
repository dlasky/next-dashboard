import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { zip } = req.query;
  const url = `https://www.pollen.com/api/forecast/current/pollen/${zip}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Referer: url,
      },
    });
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ error: true });
  }
};
