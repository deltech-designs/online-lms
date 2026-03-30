import type { Module, Question } from "../quiz/types";

export const modules: Module[] = [
  {
    id: 1,
    title: "MODULE 1: FOUNDATIONS",
    expanded: true,
    lessons: [
      { id: 1, title: "Introduction to UI", status: "completed", type: "lesson" },
      { id: 2, title: "Visual Hierarchy Basics", status: "completed", type: "lesson" },
      { id: 3, title: "Module 1 Assessment", status: "completed", type: "assessment" },
    ],
  },
  {
    id: 2,
    title: "MODULE 2: ADVANCED LAYOUTS",
    expanded: true,
    lessons: [
      { id: 4, title: "Complex Grid Systems", status: "completed", type: "lesson", duration: "24m video" },
      { id: 5, title: "Responsive Architecture", status: "completed", type: "lesson", duration: "18m video" },
      { id: 6, title: "Module 2 Assessment", status: "active", type: "assessment" },
    ],
  },
];

export const assessmentTopics = [
  "Advanced CSS Grid & Flexbox strategies",
  "Intrinsic sizing and dynamic content flow",
  "Container queries and responsive patterns",
  "Layout maintenance and spacing scales",
];

export const questions: Question[] = [
  {
    id: 1,
    text: "Which of the following are core principles of User Experience Design?",
    instruction: "(Select all that apply)",
    options: [
      { label: "A", text: "Visual Aesthetics" },
      { label: "B", text: "Usability" },
      { label: "C", text: "Accessibility" },
      { label: "D", text: "Profitability" },
    ],
  },
  {
    id: 2,
    text: "Which CSS property is used to create a grid layout?",
    instruction: "(Select one)",
    options: [
      { label: "A", text: "display: flex" },
      { label: "B", text: "display: grid" },
      { label: "C", text: "position: grid" },
      { label: "D", text: "layout: grid" },
    ],
  },
  {
    id: 3,
    text: "What does 'fr' unit represent in CSS Grid?",
    instruction: "(Select one)",
    options: [
      { label: "A", text: "Fixed ratio" },
      { label: "B", text: "Fragment unit" },
      { label: "C", text: "Fractional unit of remaining space" },
      { label: "D", text: "Font-relative unit" },
    ],
  },
  {
    id: 4,
    text: "Which of these are valid CSS Grid placement properties?",
    instruction: "(Select all that apply)",
    options: [
      { label: "A", text: "grid-column" },
      { label: "B", text: "grid-row" },
      { label: "C", text: "grid-place" },
      { label: "D", text: "grid-area" },
    ],
    locked: true,
  },
  {
    id: 5,
    text: "What is the default alignment of grid items?",
    instruction: "(Select one)",
    options: [
      { label: "A", text: "center" },
      { label: "B", text: "stretch" },
      { label: "C", text: "start" },
      { label: "D", text: "end" },
    ],
    locked: true,
  },
];