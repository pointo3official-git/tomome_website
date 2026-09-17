import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./components/NotFound";
import ProgramPage from "./pages/Program";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/program" element={<ProgramPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
