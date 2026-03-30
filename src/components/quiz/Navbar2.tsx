import React from "react";

interface NavbarProps {
  variant: "course-player" | "assessment";
  onBack?: () => void;
  timer?: string;
}

const Navbar2: React.FC<NavbarProps> = ({ variant, onBack, timer }) => {
  if (variant === "assessment") {
    return (
      <nav className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="text-blue-600 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            Azure Scholar
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Course</p>
            <p className="text-sm font-semibold text-gray-800">Introduction to UI/UX Design</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-blue-700 font-bold text-sm font-mono">{timer || "45:12"}</span>
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">J</div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-bold text-gray-900">EduStream Pro</span>
        </div>
        <div className="flex gap-6">
          {["My Courses", "Certificates", "Community"].map((item) => (
            <a key={item} href="#" className="text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors">{item}</a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-48">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input placeholder="Search lessons..." className="bg-transparent text-xs outline-none w-full placeholder-gray-400 text-gray-700" />
        </div>
        <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-white text-xs font-bold">J</div>
      </div>
    </nav>
  );
};

export default Navbar2;