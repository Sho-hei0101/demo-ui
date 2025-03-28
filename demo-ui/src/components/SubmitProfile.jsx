import React, { useState } from "react";

export default function SubmitProfile() {
  const [name, setName] = useState("");
  const [nationality, setNationality] = useState("");
  const [team, setTeam] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !nationality || !team || !dob || !bio || !url) {
      alert("Please fill in all fields.");
      return;
    }

    const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    profiles.push({ name, nationality, team, dob, bio, url });
    localStorage.setItem("profiles", JSON.stringify(profiles));
    alert("Profile submitted!");

    // Reset
    setName("");
    setNationality("");
    setTeam("");
    setDob("");
    setBio("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">👤 Player Profile Submission</h2>

      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border p-2"
        />
      </div>

      <div>
        <label>Nationality</label>
        <input
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
          className="w-full border p-2"
        />
      </div>

      <div>
        <label>Team</label>
        <input
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
          className="w-full border p-2"
        />
      </div>

      <div>
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
          className="w-full border p-2"
        />
      </div>

      <div>
        <label>Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
          className="w-full border p-2"
        />
      </div>

      <div>
        <label>Profile URL</label>
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full border p-2"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit Profile
      </button>
    </form>
  );
}