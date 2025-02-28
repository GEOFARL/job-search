import { Job } from '@/types/jobs';
import axios from 'axios';
import { JOBS } from './mockData';

const API_URL = 'https://jsearch.p.rapidapi.com';
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchJobs = async (query: string): Promise<Job[]> => {
  // const response = await axios.get(`${API_URL}/search`, {
  //   headers: {
  //     'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  //   },
  //   params: { query },
  // });
  // console.log('RESPONSE', response);
  console.log('FETCHING JOBS...', query);
  await wait(3000);
  console.log('DONE!');

  return JOBS.data.data as unknown as Job[];
  // return response.data.data;
};

export const fetchJobById = async (jobId: string): Promise<Job> => {
  // const response = await axios.get(`${API_URL}/job-details`, {
  //   headers: {
  //     'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
  //     'x-rapidapi-host': 'jsearch.p.rapidapi.com',
  //   },
  //   params: { job_id: decodeURIComponent(jobId) },
  // });
  console.log('FETCHING JOB DETAILS', jobId);
  await wait(3000);
  console.log('DONE!');
  return JOBS.data.data[0] as unknown as Job;
  // return response.data.data[0] as Job;
};
