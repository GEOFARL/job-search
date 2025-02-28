import { Job } from '@/types/jobs';
import { create } from 'zustand';

type JobStore = {
  likedJobs: Job[];
  likeJob: (job: Job) => void;
  removeJob: (id: string) => void;
  isJobLiked: (id: string) => boolean;
};

export const useJobStore = create<JobStore>((set, get) => ({
  likedJobs: JSON.parse(
    typeof window !== 'undefined'
      ? localStorage.getItem('likedJobs') || '[]'
      : '[]'
  ),
  likeJob: (job) =>
    set((state) => {
      if (state.likedJobs.some((likedJob) => likedJob.job_id === job.job_id)) {
        return state;
      }
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
  isJobLiked: (id) => get().likedJobs.some((job) => job.job_id === id),
}));
