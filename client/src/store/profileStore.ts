import { Profile } from '@/types/profile';
import { create } from 'zustand';

type ProfileStore = {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: JSON.parse(
    typeof window !== 'undefined'
      ? localStorage.getItem('profile') ?? 'null'
      : '{ "name": "", "jobTitle": "", "about": "" }'
  ),
  setProfile: (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile));
    set({ profile });
  },
}));
