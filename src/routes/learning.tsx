import { Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { GovernmentLayout } from "@/components/government-layout";
import { learningLessons } from "@/lib/mockData";

export default function LearningPage() {
  return (
    <GovernmentLayout title="My Learning Journey" subtitle="Progress-driven, skill-first learning for your next role.">
      <div className="space-y-6">
        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B3A82]">Course</p>
                <h3 className="mt-2 text-2xl font-bold text-[#12305B]">Solar Technician Path</h3>
              </div>
              <span className="rounded-full bg-[#EEF8F1] px-3 py-1 text-sm font-semibold text-[#17854A]">62% complete</span>
            </div>

            <div className="mt-5 h-3 rounded-full bg-[#EEF5FC]">
              <div className="h-3 rounded-full bg-[#17854A]" style={{ width: "62%" }} />
            </div>

            <p className="mt-4 text-sm text-[#5B6573]">4 of 7 modules completed</p>
          </CardContent>
        </Card>

        <Card className="border-[#D6DEE8] bg-white shadow-sm">
          <CardContent className="p-5">
            <h3 className="mb-4 text-xl font-bold text-[#12305B]">Modules</h3>
            <div className="space-y-3">
              {learningLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/learning/${lesson.courseId}/lesson/${lesson.id}`}
                  className={`flex items-center justify-between rounded-xl border p-3 text-sm font-medium ${
                    lesson.completed ? "border-[#D6DEE8] bg-[#EEF8F1] text-[#17854A]" : "border-[#D6DEE8] bg-[#F8FAFC] text-[#12305B]"
                  }`}
                >
                  <span>{lesson.title}</span>
                  <span>{lesson.completed ? "✓" : "○"}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </GovernmentLayout>
  );
}
