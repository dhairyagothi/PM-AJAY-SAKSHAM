import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Check, Circle, Play, Sun } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { learningLessons } from "@/lib/mockData";

export default function LearningPage() {
  const completedLessons = learningLessons.filter((lesson) => lesson.completed);
  const currentLesson = learningLessons.find((lesson) => !lesson.completed);
  const pendingLessons = learningLessons.filter(
    (lesson) => !lesson.completed && lesson.id !== currentLesson?.id,
  );

  return (
    <GovernmentLayout title="My Learning" subtitle="Build the skills for your next opportunity.">
      <div className="space-y-3">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="flex items-center gap-3 p-3 sm:p-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#0B55B7] text-white">
              <Sun className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-[#12305B]">Solar Technician</h2>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#DCEAFF]">
                  <div className="h-full rounded-full bg-[#0B55B7]" style={{ width: "62%" }} />
                </div>
                <span className="text-xs font-bold text-[#12305B]">62%</span>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#17854A]">Complete</span>
          </CardContent>
        </Card>

        <nav
          aria-label="Learning sections"
          className="grid grid-cols-3 border-b border-[#D6DEE8] bg-white text-center text-sm"
        >
          <Link
            to="/learning"
            aria-current="page"
            className="border-b-2 border-[#0B3A82] px-2 py-3 font-bold text-[#0B3A82]"
          >
            Lessons
          </Link>
          <Link to="/learning/solar-path/quiz" className="px-2 py-3 text-[#52677F]">
            Quiz
          </Link>
          <Link to="/career-passport" className="px-2 py-3 text-[#52677F]">
            Certificate
          </Link>
        </nav>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-bold text-[#12305B]">Completed Lessons</h2>
              <span className="text-xs font-semibold text-[#0B3A82]">
                {completedLessons.length} / {learningLessons.length}
              </span>
            </div>
            <div className="divide-y divide-[#E5EBF2]">
              {completedLessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  to={`/learning/${lesson.courseId}/lesson/${lesson.id}`}
                  className="flex min-h-11 items-center gap-3 py-2 text-sm text-[#12305B]"
                >
                  <Check className="h-4 w-4 shrink-0 rounded-full bg-[#17854A] p-0.5 text-white" />
                  <span className="text-[#7A8796]">{index + 1}.</span>
                  <span className="flex-1">{lesson.title}</span>
                  <span className="text-xs text-[#17854A]">Completed</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {currentLesson && (
          <section>
            <h2 className="mb-2 font-bold text-[#12305B]">In Progress</h2>
            <Link
              to={`/learning/${currentLesson.courseId}/lesson/${currentLesson.id}`}
              className="flex items-center gap-3 rounded-md border border-[#C9DDF6] bg-white p-3 text-sm shadow-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0B55B7] text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>
              <span className="min-w-0 flex-1">
                <strong className="block text-[#12305B]">
                  {completedLessons.length + 1}. {currentLesson.title}
                </strong>
                <span className="text-xs text-[#52677F]">Continue this lesson</span>
              </span>
              <ArrowRight className="h-4 w-4 text-[#0B3A82]" />
            </Link>
          </section>
        )}

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-3 sm:p-4">
            <h2 className="mb-2 font-bold text-[#12305B]">Coming Up</h2>
            <div className="divide-y divide-[#E5EBF2]">
              {pendingLessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="flex min-h-11 items-center gap-3 py-2 text-sm text-[#718096]"
                >
                  <Circle className="h-4 w-4 shrink-0" />
                  <span className="text-[#9AA5B2]">{completedLessons.length + index + 2}.</span>
                  <span className="flex-1">{lesson.title}</span>
                  <span className="text-xs">Next</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Link
          to="/learning/solar-path/quiz"
          className="flex items-center gap-3 rounded-md border border-[#C9DDF6] bg-[#F4F9FF] p-3 text-[#12305B]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[#0B3A82] text-white">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="flex-1">
            <strong className="block text-sm">Quick Quiz</strong>
            <span className="text-xs text-[#52677F]">Test your knowledge and earn progress</span>
          </span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        {currentLesson && (
          <Link
            to={`/learning/${currentLesson.courseId}/lesson/${currentLesson.id}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white"
          >
            Continue Learning <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </GovernmentLayout>
  );
}
