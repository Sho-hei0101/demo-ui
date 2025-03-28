import React, { useEffect, useState } from "react";

export default function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("profiles") || "[]");
    setProfiles(stored);
  }, []);

  if (profiles.length === 0) {
    return <p className="text-center mt-10 text-gray-400">No profiles submitted yet.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">📋 Submitted Profiles</h2>
      <ul className="space-y-4">
        {profiles.map((p, i) => (
          <li key={i} className="p-4 border rounded shadow bg-white text-black">
            <p><strong>Name:</strong> {p.name}</p>
            <p><strong>Nationality:</strong> {p.nationality}</p>
            <p><strong>Team:</strong> {p.team}</p>
            <p><strong>Date of Birth:</strong> {p.dob}</p>
            <p><strong>Bio:</strong> {p.bio}</p>
            <p><strong>Profile URL:</strong> <a href={p.url} className="text-blue-600 underline" target="_blank" rel="noreferrer">{p.url}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}