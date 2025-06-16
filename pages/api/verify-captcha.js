import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { token } = req.body;
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const verifyRes = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret,
          response: token,
        },
      }
    );

    if (verifyRes.data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, errorCodes: verifyRes.data['error-codes'] });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
