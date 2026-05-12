const PI_API_URL = 'https://api.minepi.com/v2';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.PI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'PI_API_KEY not configured' });
  }

  try {
    const { pid } = JSON.parse(req.body);
    if (!pid) {
      return res.status(400).json({ error: 'Missing payment ID' });
    }

    const piRes = await fetch(`${PI_API_URL}/payments/${pid}/approve`, {
      method: 'POST',
      headers: {
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!piRes.ok) {
      const err = await piRes.text();
      return res.status(piRes.status).json({ error: `Pi API approve failed: ${err}` });
    }

    return res.status(200).json({ action: "approve" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
