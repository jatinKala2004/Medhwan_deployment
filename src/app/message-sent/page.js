import React from 'react';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const MessageSent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4">
      <div className="bg-white/90 shadow-2xl rounded-3xl p-10 max-w-md w-full flex flex-col items-center border border-blue-100">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 drop-shadow-lg" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Message Sent!</h1>
        <p className="text-base text-gray-600 mb-6 text-center">
          Thank you for reaching out to us.<br />We have received your message and will get back to you soon.
        </p>
        <Link href="/">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default MessageSent; 