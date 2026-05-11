export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST') {
    return res.status(200).json({ action: "approve" });
  }
  res.status(405).json({ error: "Method not allowed" });
}
