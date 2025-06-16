'use client';

import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function RecaptchaWrapper({ onVerify }) {
  const recaptchaRef = useRef();

  const executeCaptcha = async () => {
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    onVerify(token); 
  };

  return (
    <>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6Lc7D2MrAAAAAJF2NegqlwkyF0IbWKoR77SJYHPS"
        size="invisible"
      />
      <button
        type="button"
        className="hidden"
        onClick={executeCaptcha}
        id="trigger-recaptcha"
      >
        Trigger reCAPTCHA
      </button>
    </>
  );
}
