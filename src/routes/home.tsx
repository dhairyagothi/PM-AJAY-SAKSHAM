import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, MapPin, Mic, ShieldCheck, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GovernmentLayout } from "@/components/government-layout";
import { beneficiary, opportunities } from "@/lib/mockData";

export default function HomePage() {
  const recommended = opportunities[0];

  if (!recommended) {
    return (
      <GovernmentLayout title="Namaste, Ravi" subtitle="Your next best step is ready for you.">
        <p className="text-sm text-[#5B6573]">No opportunities are available right now.</p>
      </GovernmentLayout>
    );
  }

  return (
    <GovernmentLayout title="Namaste, Ravi Kumar" subtitle="Welcome to your career journey!">
      <div className="space-y-4">
        <Link
          to="/voice"
          className="flex min-h-32 items-center gap-4 rounded-lg border border-[#C9DDF6] bg-gradient-to-r from-[#F5FAFF] to-[#E4F1FF] p-4 text-[#12305B] shadow-sm"
        >
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#0B55B7] text-white shadow-[0_0_0_5px_#D7E8FF]">
            <Mic className="h-8 w-8" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xl font-bold">Talk to Saksham</span>
            <span className="mt-1 block text-sm text-[#52677F]">Speak, ask, get guidance</span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 text-[#0B3A82]" />
        </Link>

        <Card className="border-[#CDE8D8] bg-[#F7FCF8] shadow-sm">
          <CardContent className="p-4">
            <div className="mb-3 flex items-center gap-2 text-[#17854A]">
              <Target className="h-5 w-5" />
              <h2 className="font-bold">Your Next Step</h2>
            </div>
            <h3 className="font-bold text-[#12305B]">Complete Panel Installation – Lesson 3</h3>
            <div className="mt-3 flex items-center gap-3">
              <Progress value={62} className="h-2.5 flex-1" />
              <span className="text-sm font-bold text-[#17854A]">62%</span>
            </div>
            <Link
              to="/learning/solar-path/lesson/lesson-3"
              className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#0B3A82]"
            >
              Continue learning <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>

        <section>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-bold text-[#12305B]">Recommended for You</h2>
            <Link to="/opportunities" className="text-xs font-semibold text-[#0B3A82]">
              View all
            </Link>
          </div>
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-[#12305B]">{recommended.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-[#5B6573]">
                    <MapPin className="h-4 w-4" /> {recommended.location}, Madhya Pradesh
                  </p>
                </div>
                <Badge className="shrink-0 bg-[#EEF8F1] text-[#17854A]">{recommended.match}</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#52677F]">
                <span>✓ Skills match</span>
                <span>✓ District match</span>
                <span>✓ Education match</span>
              </div>
              <Link
                to={`/opportunities/${recommended.id}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0B3A82] px-4 py-3 text-sm font-semibold text-white"
              >
                View opportunity <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="mb-2 font-bold text-[#12305B]">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-2">
            <Link
              to="/opportunities"
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-[#C9DDF6] bg-white p-2 text-center text-xs font-semibold text-[#12305B]"
            >
              <Briefcase className="h-5 w-5 text-[#0B55B7]" />
              Find Opportunities
            </Link>
            <Link
              to="/learning"
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-[#C9DDF6] bg-white p-2 text-center text-xs font-semibold text-[#12305B]"
            >
              <BookOpen className="h-5 w-5 text-[#0B55B7]" />
              My Learning
            </Link>
            <Link
              to="/career-passport"
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-[#C9DDF6] bg-white p-2 text-center text-xs font-semibold text-[#12305B]"
            >
              <ShieldCheck className="h-5 w-5 text-[#17854A]" />
              Career Passport
            </Link>
          </div>
        </section>

        <p className="rounded-md bg-[#EEF5FC] p-3 text-sm font-semibold text-[#0B3A82]">
          Your Skills. Your Opportunities. Your Next Step.
        </p>
        <p className="text-xs text-[#5B6573]">Profile location: {beneficiary.location}</p>
      </div>
    </GovernmentLayout>
  );
}
