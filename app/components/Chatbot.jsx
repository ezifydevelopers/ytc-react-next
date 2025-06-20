"use client";
import React, { useState, useRef, useEffect } from "react";

const QUESTIONS = [
  {
    key: "userType",
    q: "👋 Hi there! I am Haley. Welcome to YTC Healthcare. How can I help you today?",
    options: [
      { label: "I need healthcare staff", value: "staff" },
      { label: "I am looking for a job", value: "job" },
    ],
  },
  {
    key: "hiringRole",
    dependsOn: "userType",
    showIf: "staff",
    q: "Great! What kind of role are you hiring for? (You can choose more than one)",
    options: [
      "Registered Nurses (RNs)",
      "Personal Support Workers (PSWs)",
      "Physicians / Specialists",
      "Social Service / Child Care Workers",
      "Others",
    ],
  },
  {
    key: "jobProfession",
    dependsOn: "userType",
    showIf: "job",
    q: "Amazing! What is your profession?",
    options: [
      "RN / Nurse Practitioner",
      "PSW / Support Worker",
      "Physician / Specialist",
      "Social Service / Child Care",
      "Others",
    ],
  },
  {
    key: "location",
    q: "In which region do you need our services? (Canada or The U.S)",
  },
  {
    key: "urgency",
    q: "How soon do you need it?",
    options: ["ASAP (within 24–72 hrs)", "Within a week", "Planning ahead"],
  },
  {
    key: "contactInfo",
    q: "To speed things up, could you share:\n1. Your name (or company/facility name)\n2. E-mail Address \n3. Phone number",
  },
  {
    key: "additional",
    q: "Anything else we should know?\n(e.g., shift preferences, certifications, experience level, facility type)",
  },
  {
    key: "confirmation",
    q: "Thank you! 🙏 We will review your info and reach out within 24 hours to discuss next steps.\n\nMeanwhile, you can:\n– Browse our [Healthcare Salary Guide]\n– Check out roles on our Careers page\n–",
  },
];

const ENDPOINT = "https://ytchealthcare.com/chatbot.php";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: QUESTIONS[0].q }]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const getNextStep = (currentStepIndex, newAnswers) => {
    for (let i = currentStepIndex + 1; i < QUESTIONS.length; i++) {
      const q = QUESTIONS[i];
      if (!q.dependsOn || newAnswers[q.dependsOn] === q.showIf) {
        return i;
      }
    }
    return -1;
  };

  const handleOptionSelect = (value) => {
    const currentQuestion = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQuestion.key]: value };

    setMessages((msgs) => [...msgs, { from: "user", text: value }]);
    setAnswers(newAnswers);

    const nextStep = getNextStep(step, newAnswers);
    if (nextStep !== -1) {
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { from: "bot", text: QUESTIONS[nextStep].q }]);
        setStep(nextStep);
      }, 700);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending) return;

    const currentQuestion = QUESTIONS[step];
    const newAnswers = { ...answers, [currentQuestion.key]: input };

    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setAnswers(newAnswers);
    setInput("");

    const nextStep = getNextStep(step, newAnswers);
    if (nextStep !== -1) {
      setTimeout(() => {
        setMessages((msgs) => [...msgs, { from: "bot", text: QUESTIONS[nextStep].q }]);
        setStep(nextStep);
      }, 700);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers) => {
    setSending(true);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });
      const data = await res.json();
      setMessages((msgs) => [
        ...msgs,
        {
          from: "bot",
          text:
            data.status === "success"
              ? "Thank you! Your information has been sent. We will contact you soon."
              : "Sorry, there was a problem. Please try again later.",
        },
      ]);
      setSent(true);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Sorry, there was a problem. Please try again later." },
      ]);
    }
    setSending(false);
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
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 2C6.48 2 2 6.03 2 10.5c0 2.01 1.01 3.84 2.7 5.22-.13.98-.56 2.09-1.36 3.29a1 1 0 0 0 1.13 1.5c2.09-.41 3.7-1.13 4.7-1.7A12.6 12.6 0 0 0 12 19c5.52 0 10-4.03 10-8.5S17.52 2 12 2Z"
              />
            </svg>
          </button>
        )}
        {open && (
          <div className="w-[350px] max-w-[95vw] h-[550px] bg-white rounded-xl shadow-2xl flex flex-col border border-gray-200 animate-fadeIn">
            <div className="flex items-center justify-end px-4 py-3 bg-[#F7FAFD] rounded-t-xl">
              {/* <span className="text-black font-semibold">YTC Chat</span> */}
              <button onClick={() => setOpen(false)} className="text-black text-4xl cursor-pointer">×</button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3 bg-[#f7fafd]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-3 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${
                      msg.from === "user"
                        ? "bg-[#009689] text-white"
                        : "bg-[#F8F8F8] text-[#53666F]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {/* Option buttons */}
              {!sent && QUESTIONS[step]?.options && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {QUESTIONS[step].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(opt.value || opt)}
                      className="bg-[#009689] hover:bg-[#09243C] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {opt.label || opt}
                    </button>
                  ))}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Text input for open-ended questions */}
            {!sent && !QUESTIONS[step]?.options && (
              <form onSubmit={handleSend} className="p-3 bg-white flex gap-2">
                <input
                  type="text"
                  className="flex-1 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#009689]"
                  placeholder={sending ? "Sending..." : "Type your answer..."}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={sending}
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-[#009689] hover:bg-[#09243C] text-white rounded-full px-4 py-2 font-semibold transition"
                  disabled={sending}
                >
                  Send
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s;
        }
      `}</style>
    </>
  );
}
