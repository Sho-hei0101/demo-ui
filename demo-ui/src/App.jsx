import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateTokenForm from './components/CreateTokenForm';
import PlayerProfileForm from './components/PlayerProfileForm';
import ProfileList from './components/ProfileList';
import Market from './components/Market';
import TokenDetail from './components/TokenDetail';

export default function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white p-4">
      <nav className="bg-gray-900 text-white px-4 py-2 mb-4 shadow">
  <div className="flex gap-4 text-sm">
    <Link to="/" className="hover:underline">🏠 Market</Link>
    <Link to="/submit" className="hover:underline">📋 Submit Profile</Link>
    <Link to="/create" className="hover:underline">🛠️ Create Token</Link>
    <Link to="/review" className="hover:underline">📄 Review Profiles</Link>
  </div>
</nav>
        <Routes>
          <Route path="/" element={<Market />} />
          <Route path="/submit" element={<PlayerProfileForm />} />
          <Route path="/review" element={<ProfileList />} />
          <Route path="/create" element={<CreateTokenForm />} />
          <Route path="/token/:symbol" element={<TokenDetail />} />
        </Routes>
      </div>
    </Router>
  );
}