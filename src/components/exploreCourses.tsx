import { useState } from "react";

type Category = "All Categories" | "Design" | "Development" | "Business" | "Marketing";
type Level = "All" | "Beginner" | "Intermediate" | "Advanced";

interface Course {
  id: number;
  title: string;
  category: Exclude<Category, "All Categories">;
  level: Exclude<Level, "All">;
  rating: number;
  reviews: string;
  price: number;
  badge?: "BEST SELLER" | "NEW";
  image: string;
}

// ── Data
const COURSES: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    category: "Development",
    level: "Beginner",
    rating: 4.9,
    reviews: "12.4k",
    price: 89.99,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass with Figma",
    category: "Design",
    level: "Intermediate",
    rating: 4.8,
    reviews: "8.2k",
    price: 74.99,
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&q=80",
  },
  {
    id: 3,
    title: "Financial Analysis for Business Growth",
    category: "Business",
    level: "Advanced",
    rating: 4.7,
    reviews: "3.5k",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy 2024",
    category: "Marketing",
    level: "Intermediate",
    rating: 4.6,
    reviews: "5.1k",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80",
  },
  {
    id: 5,
    title: "Advanced Python for Data Science",
    category: "Development",
    level: "Advanced",
    rating: 4.9,
    reviews: "2.9k",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  },
  {
    id: 6,
    title: "Agile Project Management Certification",
    category: "Business",
    level: "Intermediate",
    rating: 4.5,
    reviews: "1.8k",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    id: 7,
    title: "Graphic Design Principles & Practice",
    category: "Design",
    level: "Beginner",
    rating: 4.8,
    reviews: "4.4k",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
  },
  {
    id: 8,
    title: "Modern React & Next.js Professional",
    category: "Development",
    level: "Advanced",
    rating: 5.0,
    reviews: "520",
    price: 109.99,
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
  },
  {
    id: 9,
    title: "Graphic Design Principles & Practice",
    category: "Design",
    level: "Beginner",
    rating: 4.8,
    reviews: "4.4k",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
  },
];

const CATEGORIES: Category[] = ["All Categories", "Design", "Development", "Business"];
const LEVELS: Level[] = ["All", "Beginner", "Intermediate", "Advanced"];

// ── Sub-components 
function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400 text-sm font-semibold">
      ★ {rating.toFixed(1)}
    </span>
  );
}

function Badge({ text }: { text: "BEST SELLER" | "NEW" }) {
  return (
    <span
      className={`absolute top-3 left-3 text-white text-xs font-bold tracking-wide px-2 py-1 rounded ${
        text === "BEST SELLER" ? "bg-blue-700" : "bg-emerald-600"
      }`}
    >
      {text}
    </span>
  );
}

function CategoryTag({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    Development: "text-blue-700",
    Design: "text-purple-600",
    Business: "text-cyan-700",
    Marketing: "text-amber-700",
  };
  return (
    <span className={`text-xs font-bold tracking-widest uppercase ${colorMap[label] ?? "text-gray-700"}`}>
      {label}
    </span>
  );
}

function CourseCard({ course }: { course: Course }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
        hovered ? "shadow-2xl -translate-y-1" : "shadow-md translate-y-0"
      }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.badge && <Badge text={course.badge} />}
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-1.5">
        <CategoryTag label={course.category} />
        <h3 className="m-0 text-sm font-bold text-gray-900 leading-snug">
          {course.title}
        </h3>
        <div className="flex items-center gap-1.5">
          <StarRating rating={course.rating} />
          <span className="text-xs text-gray-500">({course.reviews} ratings)</span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-lg font-extrabold text-gray-900">
          ${course.price.toFixed(2)}
        </span>
        <button
          className={`text-white border-none rounded-lg px-4 py-2 text-sm font-bold cursor-pointer transition-colors duration-200 ${
            hovered ? "bg-blue-800" : "bg-blue-600"
          }`}
        >
          Enroll
        </button>
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 whitespace-nowrap ${
        active
          ? "bg-blue-600 text-white border-none"
          : "bg-white text-gray-700 border border-gray-300"
      }`}
    >
      {label}
    </button>
  );
}

function PaginationBtn({
  children,
  active,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-9 h-9 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-150 border ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : disabled
          ? "bg-white text-gray-400 border-gray-300 cursor-default"
          : "bg-white text-gray-700 border-gray-300 cursor-pointer hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function EduStreamPro() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All Categories");
  const [activeLevel, setActiveLevel] = useState<Level>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const COURSES_PER_PAGE = 8;

  const filtered = COURSES.filter((c) => {
    const matchCat = activeCategory === "All Categories" || c.category === activeCategory;
    const matchLvl = activeLevel === "All" || c.level === activeLevel;
    const matchSearch =
      search === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchLvl && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / COURSES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * COURSES_PER_PAGE,
    safePage * COURSES_PER_PAGE
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Sora', sans-serif; }
        input::placeholder { color: #9ca3af; }
      `}</style>

      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">

        {/* ── MAIN ── */}
        <main className="flex-1 max-w-5xl mx-auto px-5 py-10 w-full">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-1.5 mt-0">
            Explore Courses
          </h1>
          <p className="text-gray-500 text-base mb-7 mt-0">
            Master new skills with our expert-led online curriculum.
          </p>

          {/* Search */}
          <div className="flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-4 mb-6 shadow-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <circle cx="11" cy="11" r="7" stroke="#9ca3af" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search for courses, skills, or software..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="flex-1 border-none outline-none text-sm py-3.5 text-gray-900 bg-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 flex-wrap mb-8">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Categories:
            </span>
            {CATEGORIES.map((cat) => (
              <FilterChip
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              />
            ))}

            <div className="w-px h-6 bg-gray-200 mx-2" />

            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Level:
            </span>
            {LEVELS.map((lvl) => (
              <FilterChip
                key={lvl}
                label={lvl}
                active={activeLevel === lvl}
                onClick={() => { setActiveLevel(lvl); setCurrentPage(1); }}
              />
            ))}
          </div>

          {/* Grid */}
          {paginated.length > 0 ? (
            <div
              className="grid gap-5 mb-10"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))" }}
            >
              {paginated.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400 text-sm">
              No courses match your filters.
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-1.5">
            <PaginationBtn
              disabled={safePage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              ‹
            </PaginationBtn>
            {[1, 2, 3].map((p) => (
              <PaginationBtn
                key={p}
                active={safePage === p}
                onClick={() => setCurrentPage(p)}
              >
                {p}
              </PaginationBtn>
            ))}
            <PaginationBtn disabled>…</PaginationBtn>
            <PaginationBtn
              active={safePage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </PaginationBtn>
            <PaginationBtn
              disabled={safePage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            >
              ›
            </PaginationBtn>
          </div>
        </main>
      </div>
    </>
  );
}
