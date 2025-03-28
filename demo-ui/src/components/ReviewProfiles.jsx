import React, { useEffect, useState } from 'react';

export default function ReviewProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('profiles') || '[]');
    setProfiles(stored);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📋 Submitted Player Profiles</h2>
      {profiles.length === 0 ? (
        <p>まだ提出されたプロフィールはありません。</p>
      ) : (
        profiles.map((profile, index) => (
          <div key={index} className="mb-6 p-4 border rounded bg-gray-800">
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Nationality:</strong> {profile.nationality}</p>
            <p><strong>Team:</strong> {profile.team}</p>
            <p><strong>Date of Birth:</strong> {profile.dob}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <p><strong>Profile URL:</strong> <a href={profile.url} className="text-blue-400" target="_blank" rel="noreferrer">{profile.url}</a></p>
          </div>
        ))
      )}
    </div>
  );
}