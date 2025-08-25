import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../src/pages/landing-page';
import LoginPage from './pages/login-page';
import SignUpPage from './pages/signup-page';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signin" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
