import React, { useEffect, useState } from "react";

export default function ProfileList() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("playerProfile");
    if (storedData) {
      setProfiles([JSON.parse(storedData)]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">📄 Submitted Player Profiles</h2>
      {profiles.length === 0 ? (
        <p>No profiles submitted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profiles.map((profile, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-4 shadow-lg">
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Nationality:</strong> {profile.nationality}</p>
              <p><strong>Team:</strong> {profile.team}</p>
              <p><strong>Date of Birth:</strong> {profile.dob}</p>
              <p><strong>Player Info:</strong> {profile.bio}</p>
              <p><strong>Profile URL:</strong> <a href={profile.profileUrl} className="text-blue-400 underline" target="_blank" rel="noreferrer">{profile.profileUrl}</a></p>
              <p><strong>ID File:</strong> {profile.idFileName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}