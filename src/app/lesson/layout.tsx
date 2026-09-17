import React from "react";
import "@/app/globals-lesson.css";

const LessonLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="lesson-scope py-20">{children}</div>;
};

export default LessonLayout;
