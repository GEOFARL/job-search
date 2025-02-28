'use client';

import useSWR, { Fetcher } from 'swr';
import { fetchJobs } from '@/api/jobs';
import { useState } from 'react';
import JobCard from '@/components/JobCard/JobCard';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Job } from '@/types/jobs';
import MaxWidth from '@/components/utils/MaxWidth';
import JobCardSkeleton from '@/components/JobCard/JobCardSkeleton';

const fetcher: Fetcher<Job[], string> = async (query) => {
  if (!query) return [];
  return fetchJobs(query);
};

const JobsPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { data: jobs, error, isLoading } = useSWR(query, fetcher);

  return (
    <MaxWidth>
      <h1 className="text-2xl font-bold mb-4">Search for Jobs</h1>

      <Formik
        initialValues={{ jobTitle: '' }}
        validationSchema={Yup.object({
          jobTitle: Yup.string()
            .min(2, 'Too short!')
            .required('Job title is required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.jobTitle);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col md:flex-row gap-2 items-start h-[70px]">
            <div className="flex flex-col">
              <Field
                name="jobTitle"
                type="text"
                placeholder="Enter job title..."
                className="border p-2 w-full md:w-96"
              />
              <ErrorMessage
                name="jobTitle"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="px-4 py-2">
              Search
            </Button>
          </Form>
        )}
      </Formik>

      {error && <p className="text-red-500 mt-4">Error loading jobs</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {isLoading
          ? [...Array(9)].map((_, index) => <JobCardSkeleton key={index} />)
          : jobs && jobs?.length > 0
          ? jobs.map((job) => <JobCard key={job.job_id} job={job} />)
          : query && (
              <p className="text-gray-500">
                No jobs found for &quot;{query}&quot;
              </p>
            )}
      </div>
    </MaxWidth>
  );
};

export default JobsPage;
