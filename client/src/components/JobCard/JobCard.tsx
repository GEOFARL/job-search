'use client';

import { useJobStore } from '@/store/jobStore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Job } from '@/types/jobs';
import { useState, useEffect } from 'react';

type Params = {
  job: Job;
  showLikeButton?: boolean;
  showRemoveButton?: boolean;
};

const JobCard: React.FC<Params> = ({
  job,
  showLikeButton = true,
  showRemoveButton = false,
}) => {
  const { likeJob, removeJob, isJobLiked } = useJobStore();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isJobLiked(job.job_id));
  }, [isJobLiked, job.job_id]);

  const handleLike = () => {
    if (!liked) {
      likeJob(job);
      setLiked(true);
    }
  };

  const handleUnlike = () => {
    if (liked) {
      removeJob(job.job_id);
      setLiked(false);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold leading-6">{job.job_title}</h3>
        <p className="text-sm">{job.job_publisher}</p>
      </div>
      <div className="mt-3 flex gap-2 justify-end items-center">
        <Link
          href={`/job-details/${job.job_id}`}
          className="text-blue-500 px-4 py-2"
        >
          Details
        </Link>
        {showLikeButton && (
          <Button
            className={`px-4 py-2 transition ${
              liked
                ? 'bg-green-500 text-white cursor-default'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={handleLike}
            disabled={liked}
          >
            {liked ? 'Liked ✔️' : 'Like'}
          </Button>
        )}
        {showRemoveButton && (
          <Button
            className="bg-red-500 text-white px-4 py-2 hover:bg-red-600"
            onClick={handleUnlike}
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default JobCard;
