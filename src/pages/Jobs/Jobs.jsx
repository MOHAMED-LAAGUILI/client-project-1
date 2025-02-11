import { useState } from "react";
import { jobListings } from "./JobsListing";
import { JobModal } from "./JobModal";
import { JobCard } from "./JobCard";
import "./jobs.css";
import Layout from "../../Components/layout/Layout";
const JobOpportunities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);

  const openModal = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentJob(null);
  };
  return (
    <Layout
      title={"Job Opportunities"}
      description={"Check out the latest job opportunities"}
    >
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Job Opportunities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              date={job.date}
              onReadMore={() => openModal(job)}
            />
          ))}
        </div>

        {isModalOpen && currentJob && (
          <JobModal job={currentJob} onClose={closeModal} />
        )}
      </div>
    </Layout>
  );
};

export default JobOpportunities;
