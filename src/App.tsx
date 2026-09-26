import { Link, Route, Routes } from "react-router-dom";

import AdminPage from "./routes/admin";
import ApplicationDetailPage from "./routes/applications.$id";
import ApplicationsPage from "./routes/applications";
import CareerPassportPage from "./routes/career-passport";
import HelpPage from "./routes/help";
import HomePage from "./routes/home";
import WelcomePage from "./routes/index";
import LanguagePage from "./routes/language";
import LessonPage from "./routes/learning.$courseId.lesson.$lessonId";
import LearningPage from "./routes/learning";
import LoginPage from "./routes/login";
import NotificationsPage from "./routes/notifications";
import OnboardingPage from "./routes/onboarding";
import OpportunityDetailPage from "./routes/opportunities.$opportunityId";
import OpportunitiesPage from "./routes/opportunities";
import ProfilePage from "./routes/profile";
import QuizPage from "./routes/quiz";
import SettingsPage from "./routes/settings";
import SkillGapPage from "./routes/skills.gap";
import SkillsPage from "./routes/skills";
import VoicePage from "./routes/voice";
import GoogleTranslate from "./components/google-translate";
import { SakshamProvider, useSakshamStore } from "./store/useSakshamStore";

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#EEF5FC] px-4 text-center">
      <div>
        <p className="text-7xl font-bold text-[#12305B]">404</p>
        <h1 className="mt-3 text-xl font-semibold text-[#12305B]">Page not found</h1>
        <Link to="/" className="mt-5 inline-flex rounded-md bg-[#0B3A82] px-4 py-2 text-sm font-semibold text-white">
          Go home
        </Link>
      </div>
    </main>
  );
}

function AppRoutes() {
  const { language } = useSakshamStore();

  return (
    <>
      {language !== "en" && <GoogleTranslate visible={false} />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/applications" element={<ApplicationsPage />} />
        <Route path="/applications/:id" element={<ApplicationDetailPage />} />
        <Route path="/career-passport" element={<CareerPassportPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/learning/:courseId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="/learning/:courseId/quiz" element={<QuizPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/opportunities" element={<OpportunitiesPage />} />
        <Route path="/opportunities/:opportunityId" element={<OpportunityDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/skills/gap" element={<SkillGapPage />} />
        <Route path="/voice" element={<VoicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <SakshamProvider>
      <AppRoutes />
    </SakshamProvider>
  );
}
