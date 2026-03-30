import React, { useState } from "react";
import type { Question } from "../quiz/types";

interface QuizScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  question, questionIndex, totalQuestions, onNext, onPrev,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6 flex flex-col gap-4">
      {/* Part tag + progress */}
      <div className="flex items-center justify-between">
        <div>
          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md border border-blue-200">
            Part 1: Fundamentals
          </span>
          <div className="mt-2 w-48 h-1 bg-gray-200 rounded-full">
            <div
              className="h-1 bg-blue-600 rounded-full transition-all"
              style={{ width: `${((questionIndex) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
        <p className="text-sm text-gray-400 font-medium">
          Question {questionIndex} of {totalQuestions}
        </p>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-snug mb-3">{question.text}</h2>
          {question.instruction && (
            <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {question.instruction}
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            {question.options.map((opt) => {
              const isSelected = selected.includes(opt.label);
              return (
                <button
                  key={opt.label}
                  onClick={() => toggle(opt.label)}
                  className={`flex items-center gap-4 p-5 rounded-xl border-2 text-left transition-all hover:border-blue-300
                    ${isSelected ? "border-blue-500 bg-blue-50" : "border-gray-100 bg-gray-50 hover:bg-white"}`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors
                    ${isSelected ? "bg-blue-600 text-white" : "bg-white border border-gray-200 text-gray-500"}`}>
                    {opt.label}
                  </span>
                  <span className={`text-sm font-semibold ${isSelected ? "text-blue-700" : "text-gray-700"}`}>
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation footer inside card */}
        <div className="border-t border-gray-100 px-8 py-4 flex items-center justify-between bg-gray-50/50">
          <button
            onClick={onPrev}
            disabled={questionIndex === 1}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            Previous
          </button>
          <button
            onClick={onNext}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Next Question
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom row: Study guide + hint */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl overflow-hidden h-36 relative cursor-pointer hover:opacity-95 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
            alt="Study Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/30 flex flex-col justify-end p-4">
            <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold mb-0.5">Study Guide</p>
            <p className="text-white font-bold text-sm">Reviewing UX Foundations</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mb-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><circle cx="12" cy="16" r="1" fill="#7c3aed" />
            </svg>
          </div>
          <p className="text-sm font-bold text-gray-900 mb-1">Need a Hint?</p>
          <p className="text-xs text-gray-400 mb-3 leading-relaxed">Check the module transcript for core definitions.</p>
          <button className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:underline">Open Glossary</button>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;