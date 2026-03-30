import React from "react";
import type { Module } from "../quiz/types";

interface SidebarProps {
  modules: Module[];
  activeLesson: number;
  onLessonClick: (lessonId: number) => void;
  progress: number;
  onSubmitExam?: () => void;
  variant?: "course" | "assessment";
  currentQuestion?: number;
  totalQuestions?: number;
  lockedFrom?: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  modules, activeLesson, onLessonClick, progress,
  onSubmitExam, variant = "course", currentQuestion, totalQuestions, lockedFrom
}) => {
  if (variant === "assessment") {
    return (
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
        <div className="p-5 border-b border-gray-100">
          <p className="text-xs text-gray-400 font-semibold mb-0.5">Assessment Progress</p>
          <p className="text-sm font-semibold text-gray-700">Module 3: Architectural Principles</p>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-1">
          {Array.from({ length: totalQuestions || 5 }, (_, i) => {
            const qNum = i + 1;
            const isActive = qNum === currentQuestion;
            const isAnswered = qNum < (currentQuestion || 1);
            const isLocked = qNum >= (lockedFrom || 4);
            return (
              <button
                key={qNum}
                onClick={() => !isLocked && onLessonClick(qNum)}
                disabled={isLocked}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left w-full
                  ${isActive ? "bg-blue-50 text-blue-700" : isLocked ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {isLocked ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ) : (
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                    ${isActive ? "border-blue-600 bg-blue-600" : isAnswered ? "border-blue-300" : "border-gray-300"}`}>
                    {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                )}
                Question {qNum}
              </button>
            );
          })}
        </div>
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={onSubmitExam}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl text-sm transition-colors"
          >
            Submit Exam
          </button>
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-72 bg-white border-r border-gray-200 flex flex-col h-full overflow-y-auto">
      <div className="p-5 border-b border-gray-100">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">Current Course</p>
        <p className="text-base font-bold text-gray-900 mb-3">Advanced UI Systems</p>
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
          <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-gray-400">{progress}% Completed • 12/18 Lessons</p>
      </div>
      <div className="flex-1 p-3">
        {modules.map((mod) => (
          <div key={mod.id} className="mb-2">
            <div className="px-3 py-2 flex items-center justify-between cursor-pointer">
              <p className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">{mod.title}</p>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                <polyline points={mod.expanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
              </svg>
            </div>
            {mod.expanded && (
              <div className="flex flex-col gap-0.5">
                {mod.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => lesson.status !== "locked" && onLessonClick(lesson.id)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left w-full
                      ${activeLesson === lesson.id ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {lesson.status === "completed" && lesson.type === "lesson" && (
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    )}
                    {lesson.status === "completed" && lesson.type === "assessment" && (
                      <div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    )}
                    {lesson.status === "active" && lesson.type === "assessment" && (
                      <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
                        </svg>
                      </div>
                    )}
                    <span className={lesson.status === "active" ? "font-semibold" : ""}>{lesson.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;