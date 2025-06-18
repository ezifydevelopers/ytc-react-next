"use client"
import React, { useState, useRef, useEffect } from 'react';

const QUESTIONS = [
  { key: 'name', q: "What's your full name?" },
  { key: 'email', q: "What's your email address?" },
  { key: 'phone', q: "What's your phone number?" },
  { key: 'service', q: "Which service are you interested in?" },
  { key: 'message', q: "Please provide any additional message or details." },
];

const ENDPOINT = "https://ytchealthcare.com/chatbot.php";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: QUESTIONS[0].q }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending) return;
    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setAnswers({ ...answers, [QUESTIONS[step].key]: input });
    setInput('');
    if (step + 1 < QUESTIONS.length) {
      setTimeout(() => {
        setMessages(msgs => [...msgs, { from: 'bot', text: QUESTIONS[step + 1].q }]);
        setStep(step + 1);
      }, 700);
    } else {
      setSending(true);
      setTimeout(async () => {
        try {
          const res = await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: answers.name || input,
              email: answers.email,
              phone: answers.phone,
              service: answers.service,
              message: answers.message,
            }),
          });
          const data = await res.json();
          setMessages(msgs => [...msgs, { from: 'bot', text: data.status === 'success' ? 'Thank you! Your information has been sent. We will contact you soon.' : 'Sorry, there was a problem. Please try again later.' }]);
          setSent(true);
        } catch (err) {
          setMessages(msgs => [...msgs, { from: 'bot', text: 'Sorry, there was a problem. Please try again later.' }]);
        }
        setSending(false);
      }, 900);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[99999]">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="bg-[#09243C] hover:bg-[#009689] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all"
            aria-label="Open Chatbot"
          >
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2C6.48 2 2 6.03 2 10.5c0 2.01 1.01 3.84 2.7 5.22-.13.98-.56 2.09-1.36 3.29a1 1 0 0 0 1.13 1.5c2.09-.41 3.7-1.13 4.7-1.7A12.6 12.6 0 0 0 12 19c5.52 0 10-4.03 10-8.5S17.52 2 12 2Z"/></svg>
          </button>
        )}
        {open && (
          <div className="w-[350px] max-w-[95vw] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 animate-fadeIn">
            <div className="flex items-center justify-between px-4 py-3 border-b bg-[#009789] rounded-t-xl">
              <div className="flex items-center gap-2">
                {/* <img src="/favicon.ico" alt="YTC" className="w-7 h-7 rounded-full" /> */}
                <span className="text-white font-semibold">YTC Chat</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white hover:text-black text-xl font-bold">×</button>
            </div>
            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3 bg-[#f7fafd]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`mb-3 flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${msg.from === 'user' ? 'bg-[#009689] text-white' : 'bg-white text-gray-800 border'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            {!sent && (
              <form onSubmit={handleSend} className="p-3 border-t bg-white flex gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]"
                  placeholder={sending ? "Sending..." : "Type your answer..."}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled={sending}
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-[#009689] hover:bg-[#09243C] text-white rounded-full px-4 py-2 font-semibold transition"
                  disabled={sending}
                >Send</button>
              </form>
            )}
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s; }
      `}</style>
    </>
  );
} 