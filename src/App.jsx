import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./components/NotFound";
import ProgramPage from "./pages/Program";
import AboutPage from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/program" element={<ProgramPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/driver/*" element={<DriverRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
