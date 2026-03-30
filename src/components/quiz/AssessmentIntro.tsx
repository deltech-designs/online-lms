import React from "react";

interface AssessmentIntroProps {
  onStart: () => void;
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ onStart }) => {
  const topics = [
    "Advanced CSS Grid & Flexbox strategies",
    "Intrinsic sizing and dynamic content flow",
    "Container queries and responsive patterns",
    "Layout maintenance and spacing scales",
  ];

  const recapLessons = [
    { title: "Complex Grid Systems", lesson: 12, duration: "24m video" },
    { title: "Responsive Architecture", lesson: 13, duration: "18m video" },
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm mb-6 overflow-hidden">
        <div className="p-8 flex gap-8">
          {/* Left: Description */}
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
              Ready to certify<br />your skills?
            </h1>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              You've completed all lessons in Module 2. This assessment consists of 15 multiple-choice questions and 2 practical layout challenges. You'll need a score of 80% or higher to unlock the next module.
            </p>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Topics Covered</p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {topics.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <button
                onClick={onStart}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm shadow-blue-200"
              >
                Start Assessment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button className="text-sm text-gray-400 hover:text-gray-600 font-medium transition-colors">
                Review Lessons First
              </button>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-col gap-3 w-48">
            {[
              { label: "TIME LIMIT", value: "25 Minutes" },
              { label: "QUESTIONS", value: "17 Total" },
              { label: "PASSING SCORE", value: "80%" },
            ].map((stat) => (
              <div key={stat.label} className="border border-gray-100 rounded-xl p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Module Recap */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Module 2 Recap</h2>
        <div className="grid grid-cols-2 gap-4">
          {recapLessons.map((lesson) => (
            <button
              key={lesson.title}
              className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all text-left"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{lesson.title}</p>
                <p className="text-xs text-gray-400">Lesson {lesson.lesson} • {lesson.duration}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssessmentIntro;