import { Link } from "react-router-dom";
import { BookOpen, Briefcase, CircleHelp, MapPin, Mic, ShieldCheck, Sparkles, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GovernmentLayout } from "@/components/government-layout";
import { beneficiary, notifications, opportunities } from "@/lib/mockData";

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
    <GovernmentLayout title="Namaste, Ravi" subtitle="Your next best step is ready for you.">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#17854A]">Welcome back</p>
          <h2 className="text-3xl font-bold text-[#12305B]">Your dashboard</h2>
        </div>

        <Link to="/voice" className="inline-flex items-center gap-2 rounded-full bg-[#F28C28] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e07c17]">
          <Mic className="h-4 w-4" /> Talk to Saksham
        </Link>
      </div>

      <Card className="mb-6 border-[#D6DEE8] bg-white shadow-sm">
        <CardContent className="p-5 sm:p-6">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F28C28]">Your Next Best Step</span>
            <span className="text-xs text-[#5B6573]">Due in 2 days</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#12305B]">Complete Electrical Safety – Lesson 3</h3>
              <p className="mt-2 text-sm text-[#5B6573]">This will unlock 3 new opportunities matching your profile.</p>
              <div className="mt-4 flex items-center gap-3">
                <Progress value={80} className="h-3 flex-1" />
                <span className="text-sm font-bold text-[#17854A]">80%</span>
              </div>
            </div>
            <Link
              to="/learning/solar-path/lesson/lesson-3"
              className="inline-flex items-center justify-center rounded-xl bg-[#17854A] px-4 py-3 text-sm font-semibold text-white hover:bg-[#12713d]"
            >
              Continue
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-6">
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#12305B]">Recommended for You</h3>
                <Badge className="bg-[#EEF8F1] text-[#17854A]">Strong Match</Badge>
              </div>

              <div className="rounded-2xl border border-[#D6DEE8] bg-[#F8FAFC] p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xl font-bold text-[#12305B]">{recommended.title}</p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-[#5B6573]"><MapPin className="h-4 w-4" /> {recommended.location}</p>
                  </div>
                  <span className="rounded-full bg-[#EEF5FC] px-2 py-1 text-xs font-semibold text-[#0B3A82]">{recommended.pay}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {recommended.skills.slice(0, 2).map((skill) => (
                    <span key={skill} className="rounded-full border border-[#D6DEE8] bg-white px-2 py-1 text-xs text-[#12305B]">{skill}</span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/opportunities/${recommended.id}`}
                    className="inline-flex items-center justify-center rounded-xl bg-[#0B3A82] px-4 py-2 text-sm font-semibold text-white hover:bg-[#12305B]"
                  >
                    View Opportunity
                  </Link>
                  <Link to="/skills/gap" className="inline-flex items-center justify-center rounded-xl border border-[#D6DEE8] bg-white px-4 py-2 text-sm font-semibold text-[#12305B] hover:bg-[#EEF5FC]">
                    Skill Gap
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-[#12305B]">Your Progress</h3>
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="rounded-2xl bg-[#EEF5FC] p-4 text-center">
                  <p className="text-2xl font-bold text-[#12305B]">6</p>
                  <p className="text-xs text-[#5B6573]">Skills</p>
                </div>
                <div className="rounded-2xl bg-[#EEF5FC] p-4 text-center">
                  <p className="text-2xl font-bold text-[#12305B]">2</p>
                  <p className="text-xs text-[#5B6573]">Courses</p>
                </div>
                <div className="rounded-2xl bg-[#EEF5FC] p-4 text-center">
                  <p className="text-2xl font-bold text-[#12305B]">1</p>
                  <p className="text-xs text-[#5B6573]">Certificates</p>
                </div>
                <div className="rounded-2xl bg-[#EEF5FC] p-4 text-center">
                  <p className="text-2xl font-bold text-[#12305B]">2</p>
                  <p className="text-xs text-[#5B6573]">Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <h3 className="mb-4 text-lg font-bold text-[#12305B]">Profile Snapshot</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-[#EEF5FC] p-3">
                  <span className="text-sm text-[#5B6573]">Education</span>
                  <span className="font-semibold text-[#12305B]">Class 12</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[#EEF5FC] p-3">
                  <span className="text-sm text-[#5B6573]">Location</span>
                  <span className="font-semibold text-[#12305B]">{beneficiary.location}</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-[#EEF5FC] p-3">
                  <span className="text-sm text-[#5B6573]">Experience</span>
                  <span className="font-semibold text-[#12305B]">2 yrs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#D6DEE8] bg-white shadow-sm">
            <CardContent className="p-5">
              <h3 className="mb-4 text-lg font-bold text-[#12305B]">Latest Notifications</h3>
              <div className="space-y-3">
                {notifications.slice(0, 3).map((item) => (
                  <div key={item.title} className="rounded-xl border border-[#D6DEE8] bg-[#F8FAFC] p-3">
                    <p className="font-semibold text-[#12305B]">{item.title}</p>
                    <p className="mt-1 text-sm text-[#5B6573]">{item.body}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </GovernmentLayout>
  );
}
