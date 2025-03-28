import React, { useEffect, useState } from 'react';

export default function ReviewProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('profiles') || '[]');

    const dummy = [
      {
        name: 'Shohei Ohtani',
        nationality: 'Japan',
        team: 'Los Angeles Angels',
        dob: '1994-07-05',
        bio: 'Two-way player. MVP. Legend.',
        url: 'https://en.wikipedia.org/wiki/Shohei_Ohtani'
      },
      {
        name: 'Kylian Mbappé',
        nationality: 'France',
        team: 'Paris Saint-Germain',
        dob: '1998-12-20',
        bio: 'Speedster and World Cup winner.',
        url: 'https://en.wikipedia.org/wiki/Kylian_Mbappé'
      }
    ];

    setProfiles([...stored, ...dummy]);
  }, []);

  if (profiles.length === 0) {
    return <p className="text-center text-gray-400 mt-10">No profiles submitted.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">Submitted Profiles</h2>
      <ul className="space-y-4">
        {profiles.map((p, i) => (
          <li key={i} className="border rounded shadow bg-white text-black p-4">
            <p><strong>Name:</strong> {p.name}</p>
            <p><strong>Nationality:</strong> {p.nationality}</p>
            <p><strong>Team:</strong> {p.team}</p>
            <p><strong>Date of Birth:</strong> {p.dob}</p>
            <p><strong>Bio:</strong> {p.bio}</p>
            <p><strong>Profile URL:</strong> <a href={p.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{p.url}</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}