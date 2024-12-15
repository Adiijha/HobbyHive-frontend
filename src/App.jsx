import { useEffect } from 'react';
import Hero from './components/landingPage/Hero';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NoHeaderFooterLayout from './components/layout/NoHeaderFooterLayout';
import MainLayout from './components/layout/HeaderFooterLayout';
import Cookies from 'js-cookie';
import Dashboard from './components/dashboard/Dasboard';
import AuthRoute from './components/routes/AuthRoute';
import ProtectedRoute from './components/routes/ProtectedRoute';
 

// ScrollToTop Component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the location changes
  }, [location]);

  return null;
};

// Redirect logic for the home route
const RedirectToDashboard = () => {
  const token = Cookies.get("accessToken");
  return token ? <Navigate to="/dashboard" replace /> : (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
};

// Handles conditional redirection or rendering for SignUp and SignIn
const RedirectIfLoggedIn = ({ component: Component }) => {
  const token = Cookies.get("accessToken");

  // If logged in, navigate to /dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <MainLayout>
      <Component />
    </MainLayout>
  );
};

// App component with routing and redirection logic
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        {/* Only show Header for routes that need it */}
        <Routes>
          {/* Redirect to /dashboard if logged in, else show Home */}
          <Route path="/" element={<RedirectToDashboard />} />

          {/* Show SignUp or SignIn unless logged in */}
          <Route path="/signin" element={<RedirectIfLoggedIn component={SignIn} />} />
          <Route path="/signup" element={<RedirectIfLoggedIn component={SignUp} />} />

          {/* Dashboard Route (protected route) */}
          <Route
            path="/dashboard"
            element={
              <AuthRoute>
                <NoHeaderFooterLayout>
                  <Dashboard />
                </NoHeaderFooterLayout>
              </AuthRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
