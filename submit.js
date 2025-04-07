export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // Data from the client (JSON)
    console.log(data); // Log it for now
    return res.status(200).json({ message: 'Data received successfully', data });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
