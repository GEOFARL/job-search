import { Job } from '@/types/jobs';
import axios from 'axios';

const API_URL = 'https://jsearch.p.rapidapi.com';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  },
});

const fetchData = async <T>(
  endpoint: string,
  params: Record<string, string>
) => {
  const response = await apiClient.get(endpoint, { params });
  return response.data.data as T;
};

export const fetchJobs = (query: string): Promise<Job[]> =>
  fetchData<Job[]>('/search', { query });

export const fetchJobById = (jobId: string): Promise<Job> =>
  fetchData<Job[]>('/job-details', { job_id: decodeURIComponent(jobId) }).then(
    (v) => v[0]
  );
