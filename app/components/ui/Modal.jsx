import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 text-white bg-[rgba(0,0,0,0.5)] w-full h-[95vh] xl:h-[100vh] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#08243c] rounded-lg max-w-2xl w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 cursor-pointer right-4 text-white hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {children} 
      </div>
    </div>
  );
};

export default Modal;