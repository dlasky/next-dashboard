import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const url = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${process.env.LAT},${process.env.LON}/`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(url);
    console.log(url, response.data);
    res.status(200).json(response.data);
  } catch (e) {
    res.status(500).json({ error: true });
  }
};
