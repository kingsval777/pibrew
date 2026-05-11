export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  // This is the specific signal the Pi Network is looking for to verify Step 10
  res.status(200).json({ action: "approve" });
}
