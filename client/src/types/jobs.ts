export type Job = {
  job_id: string;
  location: string;
  job_title: string;
  min_salary: number;
  max_salary: number;
  median_salary: number;
  salary_period: string;
  job_publisher: string;
  publisher_link: string;
  employer_name: string;
  employer_logo: string;
  job_location: string;
  job_posted_at: string;
  job_highlights: {
    Qualifications: string[];
    Benefits: string[];
  };
  job_apply_link: string;
  job_description: string;
};
