export type LessonStatus = "completed" | "active" | "locked";

export interface Lesson {
  id: number;
  title: string;
  status: LessonStatus;
  type: "lesson" | "assessment";
  duration?: string;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
  expanded: boolean;
}

export interface Question {
  id: number;
  text: string;
  instruction?: string;
  options: { label: string; text: string }[];
  locked?: boolean;
}