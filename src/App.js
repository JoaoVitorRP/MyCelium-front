import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}
