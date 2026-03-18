
import { useState } from "react";
import type { Course, Module } from "./Types";

function StarIcons({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-base ${i <= rating ? "text-amber-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" fill="#22c55e" opacity="0.15" />
      <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="1.5" />
      <path d="M7.5 12l3 3 6-6" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionModule({ mod, defaultOpen = false }: { mod: Module; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex justify-between items-center px-5 py-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer border-none text-left"
      >
        <span className="font-semibold text-gray-800 text-sm">{mod.title}</span>
        <span
          className="text-gray-400 text-lg inline-block transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ⌄
        </span>
      </button>

      {open && mod.lessons && (
        <div className="border-t border-gray-100">
          {mod.lessons.map((lesson, i) => (
            <div
              key={i}
              className="flex justify-between items-center px-5 py-3 bg-gray-50 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#9ca3af">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className={`text-sm ${lesson.free ? "text-blue-600 underline cursor-pointer" : "text-gray-600"}`}>
                  {lesson.title}
                </span>
                {lesson.free && (
                  <span className="text-xs bg-blue-50 text-blue-600 border border-blue-200 px-1.5 py-0.5 rounded font-medium">
                    Free
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-400 font-mono shrink-0 ml-4">{lesson.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── CourseDetailPage ──────────────────────────────────────────────────────────

export interface CourseDetailPageProps {
  course: Course;
  onBack: () => void;
}

export default function CourseDetailPage({ course, onBack }: CourseDetailPageProps) {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* ── NAV ── */}
      <nav
        className="bg-white border-b border-gray-200 flex items-center justify-between sticky top-0 z-50 px-8"
        style={{ height: 60 }}
      >
        {/* Left: back button + logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors cursor-pointer bg-transparent border-none"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>
          <div className="w-px h-5 bg-gray-200" />
          
        </div>

        {/* Right: nav links + action icons */}
        <div className="flex items-center gap-6">
          {["Overview", "Curriculum", "Instructor", "Reviews"].map((l) => (
            <a key={l} href="#" className="no-underline text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors">
              {l}
            </a>
          ))}
          <div className="flex items-center gap-2">
            {/* Share */}
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors bg-transparent cursor-pointer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="18" cy="5" r="3" stroke="#6b7280" strokeWidth="1.5" />
                <circle cx="6" cy="12" r="3" stroke="#6b7280" strokeWidth="1.5" />
                <circle cx="18" cy="19" r="3" stroke="#6b7280" strokeWidth="1.5" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" stroke="#6b7280" strokeWidth="1.5" />
              </svg>
            </button>
            {/* Bookmark */}
            <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors bg-transparent cursor-pointer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ── BODY ── */}
      <div className="flex-1 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-8 flex gap-8 items-start">

          {/* ── LEFT: main content ── */}
          <div className="flex-1 min-w-0">

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
              <img
                src={course.heroImage ?? course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {course.badge && (
                  <span
                    className={`inline-block text-white text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded mb-3 ${
                      course.badge === "BEST SELLER" ? "bg-blue-600" : "bg-emerald-600"
                    }`}
                  >
                    {course.badge}
                  </span>
                )}
                <h1 className="text-white text-3xl font-extrabold leading-tight m-0">{course.title}</h1>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 mt-0">{course.description}</p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: "👥", label: "STUDENTS", value: course.students ?? "—" },
                { icon: "🕐", label: "DURATION", value: course.duration ?? "—" },
                { icon: "⭐", label: "RATING",   value: `${course.rating}/5` },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-base">{stat.icon}</span>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{stat.label}</span>
                  </div>
                  <span className="text-gray-900 font-extrabold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>

            {/* Curriculum */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#fff" strokeWidth="2" />
                    <path d="M8 9h8M8 13h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-blue-600 font-bold text-base m-0 uppercase tracking-wider">Course Curriculum</h2>
              </div>
              {course.modules?.map((mod, i) => (
                <AccordionModule key={i} mod={mod} defaultOpen={i === 0} />
              ))}
            </section>

            {/* Instructor */}
            {course.instructor && (
              <section className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                <h2 className="text-gray-900 font-bold text-lg m-0 mb-4">Meet Your Instructor</h2>
                <div className="flex gap-4 items-start">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-gray-900 font-bold text-base m-0 mb-0.5">{course.instructor.name}</h3>
                    <p className="text-blue-600 text-sm font-medium m-0 mb-3">{course.instructor.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed m-0 mb-4">{course.instructor.bio}</p>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        👥 {course.instructor.students}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        💬 {course.instructor.reviews}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Student reviews */}
            {course.studentReviews && course.studentReviews.length > 0 && (
              <section>
                <h2 className="text-blue-600 font-bold text-base m-0 mb-4 uppercase tracking-wider">
                  What students are saying
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {course.studentReviews.map((rev, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      <StarIcons rating={rev.rating} />
                      <p className="text-gray-700 text-sm leading-relaxed mt-2 mb-3">{rev.text}</p>
                      <div className="flex items-center gap-2">
                        <img src={rev.avatar} alt={rev.name} className="w-7 h-7 rounded-full object-cover" />
                        <span className="text-gray-500 text-xs font-semibold">{rev.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── RIGHT: sticky purchase card ── */}
          <div className="shrink-0 sticky top-20" style={{ width: 280 }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-md">

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-gray-900 text-3xl font-extrabold">${course.price.toFixed(0)}</span>
                {course.originalPrice && (
                  <span className="text-gray-400 text-base line-through">${course.originalPrice.toFixed(0)}</span>
                )}
              </div>

              {/* Enroll CTA */}
              <button
                onClick={() => setEnrolled(true)}
                className={`w-full py-3.5 rounded-xl text-white font-bold text-sm cursor-pointer transition-all duration-200 border-none mb-2 ${
                  enrolled ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {enrolled ? "✓ Enrolled!" : "Enroll Now"}
              </button>
              <p className="text-gray-400 text-xs text-center mt-1 mb-4">30-Day Money-Back Guarantee</p>

              <div className="border-t border-gray-100 mb-4" />

              {/* What's included */}
              <p className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-3">What's Included</p>
              <div className="flex flex-col gap-2.5">
                {course.includes?.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="text-gray-600 text-xs leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-white border-t border-gray-200 px-8 py-10">
        <div className="max-w-6xl mx-auto flex justify-between items-start flex-wrap gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L2 8l10 5 10-5-10-5z" fill="#fff" />
                  <path d="M2 16l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-extrabold text-base text-gray-900">EduStream Pro</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed m-0">
              The world's most detailed course platform. Helping the next generation of professionals create impact.
            </p>
          </div>

          <div>
            <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-3">Quick Links</p>
            {["About", "Blog", "Support", "Privacy Policy"].map((l) => (
              <a key={l} href="#" className="block no-underline text-gray-500 text-sm hover:text-gray-800 transition-colors mb-1.5">
                {l}
              </a>
            ))}
          </div>

          <div>
            <p className="text-gray-900 text-xs font-bold tracking-widest uppercase mb-3">Follow Us</p>
            <div className="flex gap-3">
              {["🌐", "@", "📷"].map((icon, i) => (
                <button key={i} className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-sm hover:border-gray-400 transition-colors bg-transparent cursor-pointer">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-6">
          <p className="text-center text-gray-400 text-xs m-0">© 2024 EduStream Pro Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}