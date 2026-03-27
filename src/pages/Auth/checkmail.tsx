import { useState } from "react"; 
import { BookOpenIcon, EmailSentIcon, MoonIcon} from "../../utils/Icon";
import { useNavigate } from "react-router-dom";
 
 
 
export default function CheckEmailPage() { 
  const [resent, setResent] = useState(false); 
  const maskedEmail = "j***@example.com"; 
 
  const handleResend = () => { 
    setResent(true); 
    setTimeout(() => setResent(false), 3000); 
  }; 
  const navigate = useNavigate();
 
  return ( 
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">  
 
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

          <button onClick={() => navigate('/login')} className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold 
py-2.5 rounded-lg transition-colors text-center mb-5"> Back to Login </button>
 
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
 
      <div className="fixed bottom-4 right-4 w-8 h-8 bg-white rounded-full shadow flex 
items-center justify-center"> 
        <MoonIcon /> 
      </div> 
    </div> 
  ); 
} 