'use client';

import { useJobStore } from '@/store/jobStore';
import JobCard from '@/components/JobCard/JobCard';
import MaxWidth from '@/components/utils/MaxWidth';

const LikedJobs = () => {
  const { likedJobs } = useJobStore();

  return (
    <MaxWidth>
      <h1 className="text-2xl font-bold mb-4">Liked Jobs</h1>
      {likedJobs.length === 0 ? (
        <p>No liked jobs yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {likedJobs.map((job) => (
            <JobCard showLikeButton={false} key={job.job_id} job={job} />
          ))}
        </div>
      )}
    </MaxWidth>
  );
};

export default LikedJobs;
