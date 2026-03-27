import { useState } from "react"; 
import { BookOpenIcon, EnvelopeIcon, LockIcon, GoogleIcon, CheckBadgeIcon, EyeIcon } from "../../utils/Icon";
import { useNavigate } from "react-router-dom"; // Removed Route/Routes from here
// import ForgotPasswordPage from "./pages/Auth/forgetpassword"; // Import the forgot password page
import logoIcon from "../../assets/icon.webp";
import supabase from '../../utils/supabase'; 

export default function LoginPage() { 
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); 
  }; 

  // Toggle Password Visibility
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Supabase Login Logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
    } else {
      console.log("Logged in:", data);
      navigate("/dashboard"); // Redirect to your main app page
    }
    setLoading(false);
  };

  // Google Login Logic
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) alert(error.message);
  };

  return ( 
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 font-sans relative"> 
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden flex"> 
        
        {/* Left panel (Unchanged UI) */} 
        <div className="w-80 flex-shrink-0 p-8 flex flex-col justify-between relative overflow-hidden" 
             style={{ background: " linear-gradient(160deg, #c7d7fd 0%, #a5b4fc 20%, #818cf8 50%, #6366f1 75%, #4f46e5 100%)" }}> 
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white opacity-10" />
          <div className="flex items-center gap-2 relative z-10"> 
            <div className="w-9 h-8 bg-opacity-20 rounded-lg flex items-center justify-center"> 
              <img
                        src={logoIcon}
                        alt="EduStream Pro logo"
                        className="h-9 w-9 rounded-lg object-cover"
                    /> 
            </div> 
            <span className="text-white font-semibold text-sm">EduStream Pro</span> 
          </div> 
          <div className="relative z-10"> 
            <h2 className="text-white font-bold text-2xl leading-tight mb-3">Master new skills with expert-led courses.</h2> 
            <p className="text-blue-100 text-sm leading-relaxed">Join over 2 million learners today.</p> 
          </div> 
          <div className="flex items-center gap-2 relative z-10"> 
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"> 
              <CheckBadgeIcon /> 
            </div> 
            <span className="text-blue-100 text-xs">Trusted by world's best students</span> 
          </div> 
        </div> 

        {/* Right panel */} 
        <div className="flex-1 p-8 flex flex-col justify-center"> 
          <div className="mb-6"> 
            <h1 className="text-2xl font-bold text-gray-900">Professional Login</h1> 
            <p className="text-sm text-gray-500 mt-1">Welcome back! Please enter your details.</p> 
          </div> 

          {/* Form wrapped in <form> for better accessibility/functionality */}
          <form onSubmit={handleLogin} className="space-y-4"> 
            <div> 
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label> 
              <div className="relative"> 
                <span className="absolute left-3 top-1/2 -translate-y-1/2"><EnvelopeIcon /></span> 
                <input 
                  type="email" 
                  name="email" 
                  required
                  value={form.email} 
                  onChange={handleChange} 
                  placeholder="name@company.com" 
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                /> 
              </div> 
            </div> 

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <button type="button" onClick={() => navigate('/ForgotPasswordPage')} className="text-xs text-blue-500 hover:underline">Forgot Password?</button>
              </div>
              <div className="relative"> 
                <span className="absolute left-3 top-1/2 -translate-y-1/2"><LockIcon /></span> 
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  required
                  value={form.password} 
                  onChange={handleChange} 
                  placeholder="••••••••" 
                  className="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                /> 
                <button
                                  type="button"
                                  onClick={() => setShowPassword((v) => !v)}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-600 transition-colors"
                                >
                                  <EyeIcon open={showPassword} />
                                </button>
              </div> 
            </div> 

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50" 
            > 
              {loading ? "Signing in..." : "Sign In"} 
            </button> 

            <div className="flex items-center gap-3"> 
              <div className="flex-1 h-px bg-gray-200" /> 
              <span className="text-xs text-gray-400">Or continue with</span> 
              <div className="flex-1 h-px bg-gray-200" /> 
            </div> 

            <button 
              type="button" 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors" 
            > 
              <GoogleIcon /> Sign in with Google 
            </button> 
          </form> 

          {/* Footer links */} 
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex gap-6">
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Terms</a> 
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Privacy</a> 
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Help</a> 
            </div>
            <p className="text-xs text-gray-500">
                Don't have an account? 
                <button onClick={() => navigate('/signup')} className="ml-1 text-blue-500 font-semibold hover:underline">Sign up</button>
            </p>
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}