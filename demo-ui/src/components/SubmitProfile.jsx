import React, { useState } from "react";

export default function SubmitProfile() {
  const [profile, setProfile] = useState({
    name: "",
    nationality: "",
    team: "",
    dob: "",
    bio: "",
    profileUrl: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedProfiles = JSON.parse(localStorage.getItem("profiles") || "[]");
    const newProfile = {
      ...profile,
      submittedAt: new Date().toISOString(),
    };
    savedProfiles.push(newProfile);
    localStorage.setItem("profiles", JSON.stringify(savedProfiles));

    setSubmitted(true);
    setProfile({
      name: "",
      nationality: "",
      team: "",
      dob: "",
      bio: "",
      profileUrl: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Submit Player Profile</h2>
      {submitted && <p className="text-green-600 text-center mb-4">Profile submitted successfully!</p>}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="text" name="name" placeholder="Player Name" value={profile.name} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="nationality" placeholder="Nationality" value={profile.nationality} onChange={handleChange} className="p-2 border rounded" required />
        <input type="text" name="team" placeholder="Team" value={profile.team} onChange={handleChange} className="p-2 border rounded" />
        <input type="date" name="dob" placeholder="Date of Birth" value={profile.dob} onChange={handleChange} className="p-2 border rounded" />
        <textarea name="bio" placeholder="Player Info / Bio" value={profile.bio} onChange={handleChange} className="p-2 border rounded" />
        <input type="url" name="profileUrl" placeholder="Profile URL" value={profile.profileUrl} onChange={handleChange} className="p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}