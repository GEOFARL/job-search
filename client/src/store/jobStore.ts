import { Job } from '@/types/jobs';
import { create } from 'zustand';

type JobStore = {
  likedJobs: Job[];
  likeJob: (job: Job) => void;
  removeJob: (id: string) => void;
};

export const useJobStore = create<JobStore>((set) => ({
  likedJobs: JSON.parse(
    typeof window !== 'undefined'
      ? localStorage.getItem('likedJobs') || '[]'
      : '[]'
  ),
  likeJob: (job) =>
    set((state) => {
      const updatedJobs = [...state.likedJobs, job];
      localStorage.setItem('likedJobs', JSON.stringify(updatedJobs));
      return { likedJobs: updatedJobs };
    }),
  removeJob: (id) =>
    set((state) => {
      const updatedJobs = state.likedJobs.filter((job) => job.job_id !== id);
      localStorage.setItem('likedJobs', JSON.stringify(updatedJobs));
      return { likedJobs: updatedJobs };
    }),
}));
