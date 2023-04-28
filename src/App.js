import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/userContext';
import useToken from './hooks/useToken';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feed from './layouts/Feed';
import Timeline from './pages/Feed/Timeline';
import CreatePost from './pages/Feed/CreatePost';
import Trendings from './pages/Feed/Trendings';

export default function App() {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route
              path="/feed"
              element={
                <RouteGuard>
                  <Feed />
                </RouteGuard>
              }
            >
              <Route path="timeline" element={<Timeline />} />
              <Route path="create-post" element={<CreatePost />} />
              <Route path="trendings" element={<Trendings />} />
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function RouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
