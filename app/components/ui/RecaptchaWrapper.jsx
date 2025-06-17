import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const RecaptchaWrapper = forwardRef((props, ref) => {
  const captchaRef = useRef();

  useImperativeHandle(ref, () => ({
    getValue: () => captchaRef.current.getValue(),
    reset: () => captchaRef.current.reset()
  }));

  return (
    <div className="w-full">
      <ReCAPTCHA
        ref={captchaRef}
        sitekey="6Lc7D2MrAAAAAJF2NegqIwkyF0IbWKoR77SJYHPS"
      />
    </div>
  );
});

export default RecaptchaWrapper;
