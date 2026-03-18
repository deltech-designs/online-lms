import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/Login";
import ExploreCourses from "./components/exploreCourses";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/home";
import AboutUs from "./pages/AboutUs";

function InfoPage({ title, description }: { title: string; description: string }) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-81px)] w-full max-w-5xl items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          EduStream Pro
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreCourses />} />
        <Route
          path="/about-us"
          element={
            <AboutUs />
          }
        />
        <Route
          path="/contact"
          element={
            <InfoPage
              title="Contact Us"
              description="Reach out to the EduStream Pro team for support, partnerships, or questions about the platform and course catalog."
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}