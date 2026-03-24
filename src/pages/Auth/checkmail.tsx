import { useState } from "react"; 
 
const BookOpenIcon = () => ( 
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" 
strokeWidth={2}> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 
3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 
2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 
18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /> 
  </svg> 
); 
 
const MoonIcon = () => ( 
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-500"> 
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 
9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 
0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" 
clipRule="evenodd" /> 
  </svg> 
); 
 
const EmailSentIcon = () => ( 
  <div className="relative"> 
    {/* Send arrow top-right */} 
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center 
justify-center z-10"> 
      <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white" stroke="currentColor" 
strokeWidth={2.5}> 
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 
59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /> 
      </svg> 
    </div> 
    {/* Circle bg */} 
    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center"> 
      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center 
relative"> 
        {/* Envelope flap */} 
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" 
xmlns="http://www.w3.org/2000/svg"> 
          <rect x="2" y="6" width="20" height="14" rx="2" fill="white" fillOpacity="0.25" /> 
          <path d="M2 8l10 7 10-7" stroke="white" strokeWidth="1.8" strokeLinecap="round" /> 
          {/* Check badge */} 
          <circle cx="17" cy="17" r="5" fill="#2563eb" /> 
          <path d="M14.5 17l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" 
strokeLinejoin="round" /> 
        </svg> 
      </div> 
    </div> 
  </div> 
); 
 
export default function CheckEmailPage() { 
  const [resent, setResent] = useState(false); 
  const maskedEmail = "j***@example.com"; 
 
  const handleResend = () => { 
    setResent(true); 
    setTimeout(() => setResent(false), 3000); 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans"> 
      {/* Navbar */} 
      <header className="bg-white border-b border-gray-200 px-5 py-3 flex items-center 
justify-between"> 
        <div className="flex items-center gap-2"> 
          <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center"> 
            <BookOpenIcon /> 
          </div> 
          <span className="font-semibold text-gray-800 text-sm">EduStream Pro</span> 
        </div> 
      </header> 
 
      {/* Main */} 
      <main className="flex-1 flex items-center justify-center py-12 px-4"> 
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border 
border-gray-200 px-8 py-10 text-center"> 
          {/* Icon */} 
          <div className="flex justify-center mb-6"> 
            <EmailSentIcon /> 
          </div> 
 
          {/* Heading */} 
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Check your email</h1> 
 
          {/* Body text */} 
          <p className="text-sm text-gray-500 leading-relaxed mb-6"> 
            We've sent a password reset link to{" "} 
            <span className="font-bold text-gray-800">{maskedEmail}</span>. Please click the 
link in that 
            email to create a new password. 
          </p> 
 
          {/* CTA */} 
          <a 
            href="#" 
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold 
py-2.5 rounded-lg transition-colors text-center mb-5" 
          > 
            Back to Login 
          </a> 
 
          {/* Resend */} 
          <p className="text-xs text-gray-400"> 
            Didn't receive the email? Check your spam folder or{" "} 
            <button 
              onClick={handleResend} 
              className="text-blue-500 font-medium hover:underline transition-colors" 
            > 
              {resent ? "Email sent!" : "Resend Email"} 
            </button> 
          </p> 
        </div> 
      </main> 
 
      {/* Moon icon bottom-right */} 
      <div className="fixed bottom-4 right-4 w-8 h-8 bg-white rounded-full shadow flex 
items-center justify-center"> 
        <MoonIcon /> 
      </div> 
    </div> 
  ); 
} 