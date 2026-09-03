import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const MoodTracker = lazy(() => import('./pages/MoodTracker'));
const Journal = lazy(() => import('./pages/Journal'));
const WellnessTips = lazy(() => import('./pages/WellnessTips'));
const Affirmations = lazy(() => import('./pages/Affirmations'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
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