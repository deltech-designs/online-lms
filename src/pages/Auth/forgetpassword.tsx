import { useState } from "react"; 
const BookOpenIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" 
strokeWidth={2}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 
3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 
2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 
18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /> 
</svg> 
); 
const EnvelopeIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400" 
stroke="currentColor" strokeWidth={1.5}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 
01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 
2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 
0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /> 
</svg> 
); 
const ArrowLeftIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" 
strokeWidth={2}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 
12h18" /> 
</svg> 
); 
const ArrowRightIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 ml-1.5" stroke="currentColor" 
strokeWidth={2}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 
12H3" /> 
</svg> 
); 
const ResetLockIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" 
strokeWidth={1.5}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 
0v3.75" stroke="#3b82f6" /> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 10.5h13.5a2.25 2.25 0 012.25 
2.25v6.75a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 
012.25-2.25z" stroke="#3b82f6" /> 
    <path d="M16 7.5a4 4 0 014 4" stroke="#93c5fd" strokeWidth={1.5} strokeLinecap="round" /> 
    <path d="M18.5 5l1.5-1.5M20 5l-1.5-1.5" stroke="#3b82f6" strokeWidth={1.5} 
strokeLinecap="round" /> 
  </svg> 
); 
 
export default function ForgotPasswordPage() { 
  const [email, setEmail] = useState(""); 
 
  return ( 
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans"> 
      {/* Navbar */} 
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center 
justify-between"> 
        <div className="flex items-center gap-2"> 
          <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center"> 
            <BookOpenIcon /> 
          </div> 
          <span className="font-semibold text-gray-800 text-sm">EduStream Pro</span> 
        </div> 
        <nav className="flex items-center gap-6"> 
          <a href="#" className="text-xs font-medium text-gray-600 hover:text-gray-900 
tracking-wide uppercase transition-colors"> 
            Course Catalog 
          </a> 
          <a href="#" className="text-xs font-medium text-gray-600 hover:text-gray-900 
tracking-wide uppercase transition-colors"> 
            Pricing 
          </a> 
        </nav> 
      </header> 
 
      {/* Main */} 
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4"> 
        {/* Back link */} 
        <div className="w-full max-w-sm mb-4"> 
          <a 
            href="#" 
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 
transition-colors" 
          > 
            <ArrowLeftIcon /> 
            Back to Login 
          </a> 
        </div> 
 
        {/* Card */} 
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border 
border-gray-200 overflow-hidden"> 
          {/* Top illustration area */} 
          <div className="bg-blue-50 flex items-center justify-center py-10"> 
            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center 
justify-center"> 
              <ResetLockIcon /> 
            </div> 
          </div> 
 
          {/* Content */} 
          <div className="px-8 py-7"> 
            <h1 className="text-xl font-bold text-gray-900 mb-1">Forgot Password</h1> 
            <p className="text-sm text-gray-500 leading-relaxed mb-5"> 
              Enter your email address below and we'll send you a secure link to reset your account 
password. 
            </p> 
 
            {/* Email field */} 
            <div className="mb-5"> 
              <label className="block text-sm font-medium text-gray-700 mb-1">Email 
Address</label> 
              <div className="relative"> 
                <span className="absolute left-3 top-1/2 -translate-y-1/2"> 
                  <EnvelopeIcon /> 
                </span> 
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="name@company.com" 
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
placeholder-gray-300 text-gray-800" 
                /> 
              </div> 
            </div> 
 
            {/* Submit */} 
            <button 
              type="button" 
              className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 
text-white text-sm font-semibold py-2.5 rounded-lg transition-colors" 
            > 
              Reset Password 
              <ArrowRightIcon /> 
            </button> 
 
            {/* Support link */} 
            <p className="text-center text-sm text-gray-500 mt-5"> 
              Still need help?{" "} 
              <a href="#" className="text-blue-500 hover:underline font-medium"> 
                Contact Support 
              </a> 
            </p> 
          </div> 
        </div> 
 
        {/* Footer links */} 
        <div className="flex items-center gap-6 mt-6"> 
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => ( 
            <a 
              key={link} 
              href="#" 
              className="text-xs font-medium text-gray-400 hover:text-gray-600 tracking-wide 
uppercase transition-colors" 
            > 
              {link} 
            </a> 
          ))} 
        </div> 
      </main> 
    </div> 
  ); 
} 