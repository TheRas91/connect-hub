import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <div className="flex-1 ml-32 pt-16">
          <Notifications />
          <Header />
          <main className="p-4 mb-4 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
