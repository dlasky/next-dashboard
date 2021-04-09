import axios from "axios";

export default async (req, res) => {
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
    console.log(e);
    res.status(500).json({ error: true });
  }
};
