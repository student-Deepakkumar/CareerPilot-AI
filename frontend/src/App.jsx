import AppRoutes from "./routes/AppRoutes";
import JobMatcher from "./pages/JobMatcher";

function App() {
  return <AppRoutes />;
  <Route path="/job-matcher" element={<JobMatcher />} />;
}

export default App;
