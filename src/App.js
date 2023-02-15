import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Install from "./pages/install";
import LandingPage from "./pages/landingPage";
import ExampleUsage from "./pages/basicUsage";
import Explain from "./pages/explain";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/install" element={<Install />} />
        <Route path="/usage" element={<ExampleUsage />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;