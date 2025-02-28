'use client';

import { useProfileStore } from '@/store/profileStore';
import { useState } from 'react';

const ProfileDropdown: React.FC = () => {
  const { profile, setProfile } = useProfileStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setProfile(null);
    localStorage.removeItem('profile');
  };

  if (!profile) {
    return (
      <a href="/create-profile" className="hover:underline">
        Create Profile
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        className="bg-blue-500 px-4 py-2 rounded-lg"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {profile.name}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-48">
          <div className="p-3 border-b">
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-gray-600">{profile.jobTitle}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left p-3 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
