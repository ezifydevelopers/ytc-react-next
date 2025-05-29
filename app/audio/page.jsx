'use client'; // if using app directory

import { useEffect, useRef, useState } from 'react';

export default function Audio() {
  const contentRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakContent = () => {
    const text = contentRef.current?.innerText;
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.cancel(); // stop current speech
    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={isSpeaking ? stopSpeaking : speakContent}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {isSpeaking ? '🔇 Stop' : '🔊 Listen'}
        </button>
      </div>

      <div id="content" ref={contentRef}>
        <h1 className="text-3xl font-bold mb-4">Tesing</h1>
        <p className="mb-2">
          We are committed to providing you with the best care. You can book appointments,
          consult with doctors, and access your reports directly through this website.
        </p>
        <p>
          If you have any questions or need help, please contact our support team any time.
        </p>
      </div>
    </div>
  );
}
