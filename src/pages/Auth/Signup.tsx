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
const UserIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400" 
stroke="currentColor" strokeWidth={1.5}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 
3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 
0-5.216-.584-7.499-1.632z" /> 
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
const LockIcon = () => ( 
<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400" 
stroke="currentColor" strokeWidth={1.5}> 
<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 
0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 
2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /> 
</svg> 
); 
const EyeIcon = ({ open }: { open: boolean }) => 
open ? ( 
<svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400" 
stroke="currentColor" strokeWidth={1.5}> 
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 
010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 
.639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /> 
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
/> 
    </svg> 
  ) : ( 
    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-gray-400" 
stroke="currentColor" strokeWidth={1.5}> 
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 
001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 
6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 
5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 
21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" /> 
    </svg> 
  ); 
 
const GoogleIcon = () => ( 
  <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg"> 
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 
3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/> 
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 
0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/> 
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 
10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/> 
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 
3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/> 
  </svg> 
); 
 
const FacebookIcon = () => ( 
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1877F2" 
xmlns="http://www.w3.org/2000/svg"> 
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 
11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 
2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 
3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/> 
  </svg> 
); 
 
const ArrowRightIcon = () => ( 
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 ml-1" stroke="currentColor" 
strokeWidth={2}> 
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 
12H3" /> 
  </svg> 
); 
 
export default function SignUpPage() { 
  const [showPassword, setShowPassword] = useState(false); 
  const [agreed, setAgreed] = useState(false); 
  const [form, setForm] = useState({ name: "", email: "", password: "" }); 
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); 
  }; 
 
  return ( 
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans"> 
      {/* Navbar */} 
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center 
justify-between"> 
        <div className="flex items-center gap-2"> 
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"> 
            <BookOpenIcon /> 
          </div> 
          <span className="font-semibold text-gray-800 text-sm">EduStream Pro</span> 
        </div> 
        <nav className="flex items-center gap-6"> 
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 
transition-colors">Courses</a> 
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 
transition-colors">Pricing</a> 
          <button className="text-sm px-4 py-1.5 border border-gray-300 rounded-md 
text-gray-700 hover:bg-gray-50 transition-colors"> 
            Log In 
          </button> 
        </nav> 
      </header> 
 
      {/* Main */} 
      <main className="flex-1 flex items-center justify-center py-12 px-4"> 
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full 
max-w-sm p-8"> 
          {/* Heading */} 
          <div className="text-center mb-6"> 
            <h1 className="text-xl font-bold text-gray-900">Create your account</h1> 
            <p className="text-sm text-gray-500 mt-1">Join EduStream Pro and start your learning 
journey</p> 
          </div> 
 
          {/* Form */} 
          <div className="space-y-4"> 
            {/* Full Name */} 
            <div> 
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label> 
              <div className="relative"> 
                <span className="absolute left-3 top-1/2 -translate-y-1/2"> 
                  <UserIcon /> 
                </span> 
                <input 
                  type="text" 
                  name="name" 
                  value={form.name} 
                  onChange={handleChange} 
                  placeholder="Jane Doe" 
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
placeholder-gray-300 text-gray-800" 
                /> 
              </div> 
            </div> 
 
            {/* Email */} 
            <div> 
              <label className="block text-sm font-medium text-gray-700 mb-1">Email 
Address</label> 
              <div className="relative"> 
                <span className="absolute left-3 top-1/2 -translate-y-1/2"> 
                  <EnvelopeIcon /> 
                </span> 
                <input 
                  type="email" 
                  name="email" 
                  value={form.email} 
                  onChange={handleChange} 
                  placeholder="name@example.com" 
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
placeholder-gray-300 text-gray-800" 
                /> 
              </div> 
            </div> 
 
            {/* Password */} 
            <div> 
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label> 
              <div className="relative"> 
                <span className="absolute left-3 top-1/2 -translate-y-1/2"> 
                  <LockIcon /> 
                </span> 
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  value={form.password} 
                  onChange={handleChange} 
                  placeholder="Create a password" 
                  className="w-full pl-9 pr-9 py-2 text-sm border border-gray-300 rounded-lg 
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
placeholder-gray-300 text-gray-800" 
                /> 
                <button 
                  type="button" 
                  onClick={() => setShowPassword((v) => !v)} 
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-600 
transition-colors" 
                > 
                  <EyeIcon open={showPassword} /> 
                </button> 
              </div> 
              <p className="text-xs text-gray-400 mt-1">Must be at least 8 characters</p> 
            </div> 
 
            {/* Terms */} 
            <div className="flex items-start gap-2"> 
              <input 
                id="terms" 
                type="checkbox" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)} 
                className="mt-0.5 w-3.5 h-3.5 accent-blue-500 cursor-pointer" 
              /> 
              <label htmlFor="terms" className="text-xs text-gray-500 cursor-pointer 
leading-relaxed"> 
                I agree to the{" "} 
                <a href="#" className="text-blue-500 hover:underline">Terms</a> 
                {" "}and{" "} 
                <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> 
              </label> 
            </div> 
 
            {/* Submit */} 
            <button 
              type="button" 
              disabled={!agreed} 
              className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 
disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium py-2.5 
rounded-lg transition-colors" 
            > 
              Create Account 
              <ArrowRightIcon /> 
            </button> 
          </div> 
 
          {/* Divider */} 
          <div className="flex items-center gap-3 my-5"> 
            <div className="flex-1 h-px bg-gray-200" /> 
            <span className="text-xs text-gray-400 uppercase tracking-wide">or continue 
with</span> 
            <div className="flex-1 h-px bg-gray-200" /> 
          </div> 
 
          {/* Social buttons */} 
          <div className="flex gap-3"> 
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 
rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"> 
              <GoogleIcon /> 
              Google 
            </button> 
            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 
rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"> 
              <FacebookIcon /> 
              Facebook 
            </button> 
          </div> 
 
          {/* Login link */} 
          <p className="text-center text-xs text-gray-500 mt-5"> 
            Already have an account?{" "} 
            <a href="#" className="text-blue-500 font-medium hover:underline">Log in</a> 
          </p> 
        </div> 
      </main> 
 
      {/* Footer */} 
      <footer className="bg-white border-t border-gray-200 px-6 py-4 flex items-center 
justify-between"> 
        <p className="text-xs text-gray-400">© 2024 EduStream Pro. All rights reserved.</p> 
        <nav className="flex items-center gap-5"> 
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">Help 
Center</a> 
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 
transition-colors">About Us</a> 
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700 
transition-colors">Contact</a> 
        </nav> 
      </footer> 
    </div> 
  ); 
} 
 