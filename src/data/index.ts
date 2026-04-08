// ─────────────────────────────────────────────────────────────
//  data/index.ts
//  All the static (fake/mock) data that fills the dashboard.
//  In a real app you would fetch this from an API instead.
//  Keeping it here means you only have ONE place to update
//  when the data changes.
// ─────────────────────────────────────────────────────────────

import type {
  Course,
  Deadline,
  Recommendation,
  Stat,
  Notification,
  NavItem,
} from "../types";

// ── Sidebar navigation items ──────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  "Dashboard",
  "My Courses",
  "Schedule",
  "Achievements",
];

// ── Top stats row ─────────────────────────────────────────────
export const STATS: Stat[] = [
  {
    icon: "⏱",
    label: "Hours Spent",
    value: "124.5h",
    accent: "#3B9EFF",
    pct: 72,
  },
  {
    icon: "✓",
    label: "Completed",
    value: "18 Courses",
    accent: "#22C55E",
    pct: 60,
  },
  {
    icon: "⭐",
    label: "Average Grade",
    value: "A– (3.8)",
    accent: "#F59E0B",
    pct: 88,
  },
  {
    icon: "🎓",
    label: "Certificates",
    value: "12 Earned",
    accent: "#A855F7",
    pct: 50,
  },
];

// ── Courses the student is currently working through ──────────
export const CONTINUE_COURSES: Course[] = [
  {
    
    id: 1,
    title: "Advanced Web Development",
    subtitle: "React Hooks & State Management",
    module: "MODULE 4 / 12",
    progress: 85,
    gradient: "linear-gradient(135deg, #4FD1C5 0%, #2B6CB0 100%)",
  },
  {
    id: 2,
    title: "UI Design Fundamentals",
    subtitle: "Color Theory & Visual Hierarchy",
    module: "MODULE 2 / 8",
    progress: 32,
    gradient: "linear-gradient(135deg, #F687B3 0%, #9F7AEA 100%)",
  },
];

// ── Upcoming assignment / exam deadlines ──────────────────────
export const DEADLINES: Deadline[] = [
  {
    id: 1,
    month: "OCT",
    day: 24,
    title: "React Design Patterns Quiz",
    course: "Advanced Web Development",
  },
  {
    id: 2,
    month: "OCT",
    day: 26,
    title: "Wireframing Project",
    course: "UI Design Fundamentals",
  },
  {
    id: 3,
    month: "NOV",
    day: 2,
    title: "Midterm Exam",
    course: "Database in Practice",
  },
];

// ── Courses the platform recommends ──────────────────────────
export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 1,
    tag: "NEW · 24 LESSONS",
    title: "Cybersecurity Essentials",
    description:
      "Learn the fundamentals of protecting systems, networks, and programs from digital attacks.",
    instructor: "Dr. Sarah Chen",
    price: "$49.99",
    bgColor: "#1A1A2E",
  },
  {
    id: 2,
    tag: "POPULAR · 41 LESSONS",
    title: "Data Science with Python",
    description:
      "Master data analysis, visualization, and machine learning techniques using Python's top libraries.",
    instructor: "Prof. James Miller",
    price: "$59.99",
    bgColor: "#0F3D2E",
  },
];

// ── Weekly learning activity (bar chart) ─────────────────────
export const ACTIVITY_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
export const ACTIVITY_HEIGHTS = [45, 70, 55, 90, 65, 30, 80]; // height of each bar in px

// ── Bell-icon notifications ───────────────────────────────────
export const NOTIFICATIONS: Notification[] = [
  {
    icon: "📅",
    title: "Quiz due tomorrow",
    sub: "React Design Patterns Quiz",
    time: "2h ago",
    unread: true,
  },
  {
    icon: "🎉",
    title: "Certificate earned!",
    sub: "UI Foundations completed",
    time: "1d ago",
    unread: true,
  },
  {
    icon: "💬",
    title: "New reply on your post",
    sub: "Discussion: CSS Grid vs Flex",
    time: "2d ago",
    unread: false,
  },
];
