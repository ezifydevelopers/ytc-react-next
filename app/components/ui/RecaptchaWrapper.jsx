'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaWrapper = forwardRef(({ onVerify }, ref) => {
  const recaptchaRef = useRef();

  useImperativeHandle(ref, () => ({
    executeCaptcha: async () => {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      return token;
    },
  }));

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey="6Lc7D2MrAAAAAJF2NegqIwkyF0IbWKoR77SJYHPS"
      // size="invisible"
    />
  );
});

export default RecaptchaWrapper;
