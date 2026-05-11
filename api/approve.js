export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  // This is the "YES" signal the Pi Network is waiting for
  return res.status(200).json({ action: "approve" });
}
