import React, { useState } from "react";

export default function PlayerProfileForm() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [team, setTeam] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [idFile, setIdFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const playerData = {
      name,
      nationality,
      team,
      dob,
      bio,
      profileUrl,
      idFileName: idFile ? idFile.name : "",
    };

    localStorage.setItem("playerProfile", JSON.stringify(playerData));
    alert("✅ Profile submitted and saved to localStorage!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Submit Player Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nationality"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <input
          type="text"
          placeholder="Team"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <textarea
          placeholder="Player Info"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="url"
          placeholder="Profile URL"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          value={profileUrl}
          onChange={(e) => setProfileUrl(e.target.value)}
        />
        <input
          type="file"
          className="w-full px-4 py-2 border border-gray-300 rounded"
          onChange={(e) => setIdFile(e.target.files[0])}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}