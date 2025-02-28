'use client';

import { fetchJobById } from '@/api/jobs';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import MaxWidth from '../utils/MaxWidth';

type Props = {
  jobId: string;
};

const JobDetails: React.FC<Props> = ({ jobId }: Props) => {
  const { data: job, error } = useSWR(
    jobId ? jobId.toString() : null,
    fetchJobById
  );

  if (error)
    return (
      <MaxWidth>
        <p className="text-red-500">Failed to load job details.</p>
      </MaxWidth>
    );
  if (!job)
    return (
      <MaxWidth>
        <p className="text-gray-500">Loading job details...</p>
      </MaxWidth>
    );

  return (
    <MaxWidth>
      <Link href="/jobs" className="text-blue-500 underline">
        ← Back to Jobs
      </Link>

      <div className="mt-4 bg-white shadow-md rounded-lg p-6">
        {job.employer_logo && (
          <Image
            src={job.employer_logo}
            alt={job.employer_name}
            className="h-16 w-auto mb-4"
          />
        )}

        <h1 className="text-2xl font-bold">{job.job_title}</h1>
        <p className="text-gray-700 text-sm">{job.employer_name}</p>
        <p className="text-gray-600">{job.job_location}</p>
        <p className="text-sm text-gray-500">Posted: {job.job_posted_at}</p>

        <div className="mt-4">
          <h2 className="font-semibold">Description</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {job.job_description}
          </p>
        </div>

        {job.job_highlights?.Qualifications && (
          <div className="mt-4">
            <h2 className="font-semibold">Qualifications</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {job.job_highlights.Qualifications.map((qual, index) => (
                <li key={index}>{qual}</li>
              ))}
            </ul>
          </div>
        )}

        {job.job_highlights?.Benefits && (
          <div className="mt-4">
            <h2 className="font-semibold">Benefits</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {job.job_highlights.Benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4">
          <a
            href={job.job_apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>
      </div>
    </MaxWidth>
  );
};

export default JobDetails;
