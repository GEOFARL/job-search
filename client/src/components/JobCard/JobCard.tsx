'use client';

import { useJobStore } from '@/store/jobStore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Job } from '@/types/jobs';

type Params = {
  job: Job;
};

const JobCard: React.FC<Params> = ({ job }) => {
  const { likeJob } = useJobStore();
  console.log(job);

  return (
    <div className="border p-4 rounded-lg shadow flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold leading-6">{job.job_title}</h3>
        <p className="text-sm">{job.job_publisher}</p>
      </div>
      <div className="mt-3 flex gap-2 justify-end items-center">
        <Link
          href={`/job-details/${job.job_id}`}
          className=" text-blue-500  px-4 py-2"
        >
          Details
        </Link>
        <Button
          className="bg-blue-500 text-white px-4 py-2"
          onClick={() => likeJob(job)}
        >
          Like
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
