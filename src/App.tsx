import React from 'react'
import HomePage  from './pages/HomePage'
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/Login";
import ExploreCourses from "./components/features/Courses/exploreCourse";
import CourseDetailWrapper from "./components/features/Courses/CourseDetailWrapper";
import PaymentPage from "./components/features/Courses/PaymentPage";
import Navbar from "./components/ui/Navbar";
import AboutUs from "./pages/AboutUs";
import { useState } from "react";
import Navbar2 from "./components/quiz/Navbar2";
import Sidebar from "./components/quiz/Sidebar";
import AIAssistant from "./components/quiz/AIAssistant";
import AssessmentIntro from "./components/quiz/AssessmentIntro";
import QuizScreen from "./components/quiz/QuizScreen";
import { modules, questions } from "./components/quiz/data";

type Screen = "course" | "quiz";

const CoursePlayer: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("course");
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const question = questions[currentQuestion - 1];

  const handleNext = () => {
    if (currentQuestion < questions.length) setCurrentQuestion((q) => q + 1);
  };
  const handlePrev = () => {
    if (currentQuestion > 1) setCurrentQuestion((q) => q - 1);
  };

  if (screen === "quiz") {
    return (
      <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
        <Navbar2 variant="assessment" onBack={() => setScreen("course")} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            variant="assessment"
            modules={modules}
            activeLesson={currentQuestion}
            onLessonClick={setCurrentQuestion}
            progress={65}
            onSubmitExam={() => alert("Exam submitted! 🎉")}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            lockedFrom={4}
          />
          <QuizScreen
            question={question}
            questionIndex={currentQuestion}
            totalQuestions={questions.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">
      <Navbar2 variant="course-player" />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          variant="course"
          modules={modules}
          activeLesson={6}
          onLessonClick={(id: number) => { if (id === 6) setScreen("course"); }}
          progress={65}
        />
        <AssessmentIntro onStart={() => { setCurrentQuestion(1); setScreen("quiz"); }} />
        <AIAssistant />
      </div>
    </div>
  );
};



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

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExploreCourses />} />
        <Route path="/courses/:id" element={<CourseDetailWrapper />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
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

export default App;
