import JobDetails from '@/components/screens/JobDetails';

const JobDetailsPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const jobId = (await params).id;
  return <JobDetails jobId={jobId} />;
};

export default JobDetailsPage;
