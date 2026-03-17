import { useState } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

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

// ── Data ────────────────────────────────────────────────────────────────────

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
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass with Figma",
    category: "Design",
    level: "Intermediate",
    rating: 4.8,
    reviews: "8.2k",
    price: 74.99,
    image:
      "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&q=80",
  },
  {
    id: 3,
    title: "Financial Analysis for Business Growth",
    category: "Business",
    level: "Advanced",
    rating: 4.7,
    reviews: "3.5k",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy 2024",
    category: "Marketing",
    level: "Intermediate",
    rating: 4.6,
    reviews: "5.1k",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80",
  },
  {
    id: 5,
    title: "Advanced Python for Data Science",
    category: "Development",
    level: "Advanced",
    rating: 4.9,
    reviews: "2.9k",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  },
  {
    id: 6,
    title: "Agile Project Management Certification",
    category: "Business",
    level: "Intermediate",
    rating: 4.5,
    reviews: "1.8k",
    price: 84.99,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    id: 7,
    title: "Graphic Design Principles & Practice",
    category: "Design",
    level: "Beginner",
    rating: 4.8,
    reviews: "4.4k",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
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
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80",
  },
  {
    id: 9,
    title: "Graphic Design Principles & Practice",
    category: "Design",
    level: "Beginner",
    rating: 4.8,
    reviews: "4.4k",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80",
  },
];

const CATEGORIES: Category[] = [
  "All Categories",
  "Design",
  "Development",
  "Business",
];
const LEVELS: Level[] = ["All", "Beginner", "Intermediate", "Advanced"];

// ── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 14, fontWeight: 600 }}>
      ★ {rating.toFixed(1)}
    </span>
  );
}

function Badge({ text }: { text: "BEST SELLER" | "NEW" }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 12,
        left: 12,
        background: text === "BEST SELLER" ? "#1d4ed8" : "#059669",
        color: "#fff",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.08em",
        padding: "4px 8px",
        borderRadius: 4,
      }}
    >
      {text}
    </span>
  );
}

function CategoryTag({ label }: { label: string }) {
  const colors: Record<string, string> = {
    Development: "#1d4ed8",
    Design: "#7c3aed",
    Business: "#0369a1",
    Marketing: "#b45309",
  };
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        color: colors[label] ?? "#374151",
        textTransform: "uppercase",
      }}
    >
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
      style={{
        background: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: hovered
          ? "0 12px 40px rgba(0,0,0,0.14)"
          : "0 2px 12px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", aspectRatio: "16/9" }}>
        <img
          src={course.image}
          alt={course.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {course.badge && <Badge text={course.badge} />}
      </div>

      {/* Body */}
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <CategoryTag label={course.category} />
        <h3
          style={{
            margin: 0,
            fontSize: 15,
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.4,
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {course.title}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <StarRating rating={course.rating} />
          <span style={{ fontSize: 12, color: "#6b7280" }}>
            ({course.reviews} ratings)
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          padding: "12px 16px",
          borderTop: "1px solid #f3f4f6",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: "#111827",
            fontFamily: "'Sora', sans-serif",
          }}
        >
          ${course.price.toFixed(2)}
        </span>
        <button
          style={{
            background: hovered ? "#1741c0" : "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            transition: "background 0.2s",
            fontFamily: "'Sora', sans-serif",
          }}
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
      style={{
        padding: "7px 16px",
        borderRadius: 8,
        border: active ? "none" : "1.5px solid #d1d5db",
        background: active ? "#2563eb" : "#fff",
        color: active ? "#fff" : "#374151",
        fontSize: 13,
        fontWeight: 600,
        cursor: "pointer",
        transition: "all 0.15s",
        fontFamily: "'Sora', sans-serif",
        whiteSpace: "nowrap",
      }}
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
      style={{
        width: 36,
        height: 36,
        borderRadius: 8,
        border: active ? "none" : "1.5px solid #d1d5db",
        background: active ? "#2563eb" : "#fff",
        color: active ? "#fff" : disabled ? "#9ca3af" : "#374151",
        fontSize: 13,
        fontWeight: 600,
        cursor: disabled ? "default" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.15s",
        fontFamily: "'Sora', sans-serif",
      }}
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
    const matchCat =
      activeCategory === "All Categories" || c.category === activeCategory;
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
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Sora', sans-serif; background: #f9fafb; }
        input::placeholder { color: #9ca3af; }
      `}</style>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>        {/* ── MAIN ── */}
        <main style={{ flex: 1, maxWidth: 1080, margin: "0 auto", padding: "40px 20px", width: "100%" }}>

          {/* Heading */}
          <h1
            style={{
              margin: "0 0 6px",
              fontSize: 34,
              fontWeight: 800,
              color: "#111827",
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Explore Courses
          </h1>
          <p style={{ margin: "0 0 28px", color: "#6b7280", fontSize: 15 }}>
            Master new skills with our expert-led online curriculum.
          </p>

          {/* Search */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "#fff",
              border: "1.5px solid #e5e7eb",
              borderRadius: 12,
              padding: "0 16px",
              marginBottom: 24,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#9ca3af" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search for courses, skills, or software..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: 14,
                padding: "14px 0",
                fontFamily: "'Sora', sans-serif",
                color: "#111827",
                background: "transparent",
              }}
            />
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#9ca3af",
                textTransform: "uppercase",
                marginRight: 2,
              }}
            >
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

            <div
              style={{ width: 1, height: 24, background: "#e5e7eb", margin: "0 8px" }}
            />

            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#9ca3af",
                textTransform: "uppercase",
                marginRight: 2,
              }}
            >
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
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                gap: 20,
                marginBottom: 40,
              }}
            >
              {paginated.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "#9ca3af",
                fontSize: 15,
              }}
            >
              No courses match your filters.
            </div>
          )}

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6 }}>
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

        {/* ── FOOTER ── */}
        <footer
          style={{
            background: "#fff",
            borderTop: "1px solid #e5e7eb",
            padding: "32px 40px 20px",
          }}
        >
          <div
            style={{
              maxWidth: 1080,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 20,
              paddingBottom: 24,
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    background: "#2563eb",
                    borderRadius: 7,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L2 8l10 5 10-5-10-5z" fill="#fff" />
                    <path d="M2 16l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 12l10 5 10-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontWeight: 800, fontSize: 15, color: "#111827" }}>
                  EduStream Pro
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: "#6b7280" }}>
                Transforming lives through accessible education.
              </p>
            </div>

            <div style={{ display: "flex", gap: 24 }}>
              {["Terms of Service", "Privacy Policy", "Contact Us"].map((l) => (
                <a
                  key={l}
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#6b7280",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              margin: "20px 0 0",
              fontSize: 12,
              color: "#9ca3af",
            }}
          >
            © 2024 EduStream Pro Inc. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
