import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/driver/*" element={<DriverRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
