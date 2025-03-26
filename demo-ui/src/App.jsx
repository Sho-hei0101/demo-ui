import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateTokenForm from "./components/CreateTokenForm";
import PlayerProfileForm from "./components/PlayerProfileForm";
import Market from "./components/Market";
import ProfileList from "./components/ProfileList"; // ✅ ← 1回だけでOK！

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-6">
        <nav className="mb-6 space-x-4 text-blue-600 underline">
          <Link to="/">🏠 Market</Link>
          <Link to="/submit">📝 Submit Profile</Link>
          <Link to="/create">🛠️ Create Token</Link>
          <Link to="/profiles">📋 Review Profiles</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/submit" element={<PlayerProfileForm />} />
          <Route path="/create" element={<CreateTokenForm />} />
          <Route path="/profiles" element={<ProfileList />} />
        </Routes>
      </div>
    </Router>
  );
}