export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'reCAPTCHA token is missing' });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    const googleVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
        const verifyRes = await fetch(googleVerifyURL, { method: 'POST' });
        const verifyData = await verifyRes.json();

        if (!verifyData.success) {
            return res.status(400).json({ success: false, message: 'Failed captcha verification' });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error verifying captcha:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}
