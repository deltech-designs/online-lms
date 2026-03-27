import { useState } from "react"; 
import { BookOpenIcon, EnvelopeIcon, ResetLockIcon, ArrowRightIcon, EyeIcon, LockIcon } from "../../utils/Icon";
import { useNavigate } from "react-router-dom"; 
 
 

 
export default function ForgotPasswordPage() { 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
 
  return ( 
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans"> 
      {/* Main */} 
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4"> 
        {/* Back link */} 
        <div className="w-full max-w-sm mb-4"> 
          <a 
            href="#" 
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 
transition-colors" 
          > 
            
            <p className="text-xs text-gray-500">
                <button onClick={() => navigate('/login')} className="ml-1 text-blue-500 font-semibold hover:underline"> Back to Login </button>
            </p>
             
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

            {/* Password field */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <LockIcon />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create new password"
                  className="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 text-gray-800"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-600 transition-colors"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p>
            </div> 
 
            {/* Submit */} 
            <button 
            onClick={() => {
              if (!email.trim() || !password.trim()) {
                alert("Please enter both email and password.");
                return;
              }
              navigate('/CheckEmailPage');
            }}
              type="button" 
              disabled={!email.trim() || !password.trim()}
              className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-lg transition-colors" 
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