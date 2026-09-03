import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const MoodTracker = lazy(() => import('./pages/MoodTracker'));
const Journal = lazy(() => import('./pages/Journal'));
const WellnessTips = lazy(() => import('./pages/WellnessTips'));
const Affirmations = lazy(() => import('./pages/Affirmations'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const CalendarReminders = lazy(() => import('./pages/CalendarReminders'));
const Profile = lazy(() => import('./pages/Profile'));
const AICompanion = lazy(() => import('./pages/AICompanion'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar-reminders" element={<CalendarReminders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ai-companion" element={<AICompanion />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/wellness-tips" element={<WellnessTips />} />
          <Route path="/affirmations" element={<Affirmations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          


        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;