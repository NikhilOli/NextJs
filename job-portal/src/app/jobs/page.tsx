"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JobSeed } from "@/lib/seed-data";

export default function JobsPage() {
  const router = useRouter();
  const [filteredJobs, setfilteredJobs] = useState<JobSeed[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    jobType: "all",
    experience: "all",
    location: "all",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1); // current page
  const [totalPages, setTotalPages] = useState(1); // total pages
  const [limit] = useState(10); // number of jobs per page

  // const filteredJobs = jobs.filter((job) => {
  //   const matchesSearch =
  //     searchQuery === "" ||
  //     job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     job.company.toLowerCase().includes(searchQuery.toLowerCase());

  //   const matchesType = filters.jobType === "all" || job.type === filters.jobType;
  //   const matchesExperience =
  //     filters.experience === "all" || job.experience === filters.experience;
  //   const matchesLocation =
  //     filters.location === "all" || job.location === filters.location;

  //   return matchesSearch && matchesType && matchesExperience && matchesLocation;
  // });
  const fetchJobs = async ({
    page = 1,
    limit = 10,
    type,
    location = "",
    search = "",
  }: {
    page?: number;
    limit?: number;
    type?: string;
    location?: string;
    search?: string;
  }) => {
    const params = new URLSearchParams();

    params.append("page", page.toString());
    params.append("limit", limit.toString());

    if (type && type !== "all") params.append("type", type);
    if (location && location !== "all") params.append("location", location);
    if (search) params.append("search", search);

    const res = await fetch(`/api/jobs?${params.toString()}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const response = await fetchJobs({
          page,
          limit,
          type: filters.jobType,
          location: filters.location,
          search: searchQuery,
        });

        if (response.success && response.data) {
          setfilteredJobs(response.data.jobs);
          setTotalPages(response.data.pagination.pages);

          // If current page is greater than total pages, reset to page 1
          if (page > response.data.pagination.pages) {
            setPage(1);
          }
        } else {
          setError("Failed to load jobs");
        }
      } catch (error) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, [page, filters, limit, searchQuery]); // Added searchQuery to dependencies

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  const handleJobClick = (jobId: string) => {
    router.push(`/jobs/${jobId}`);
  };

  const handleSaveJob = (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation(); // Prevent job card click
    // Add save job logic here
    console.log("Save job:", jobId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="container pt-8">
        <button
          onClick={() => router.push("/")}
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <span className="mr-2">←</span> Back to Homepage
        </button>
      </div>

      {/* Search Header */}
      <div className="bg-white border-b mt-4">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Find Your Next Opportunity
          </h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <div className="col-span-3">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              {/* Job Type Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Job Type
                </h3>
                <select
                  value={filters.jobType}
                  onChange={(e) =>
                    setFilters({ ...filters, jobType: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="all">All Types</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>

              {/* Experience Level Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Experience Level
                </h3>
                <select
                  value={filters.experience}
                  onChange={(e) =>
                    setFilters({ ...filters, experience: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="all">All Levels</option>
                  <option value="entry">Entry Level</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="senior">Senior</option>
                  <option value="lead">Lead</option>
                </select>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Location
                </h3>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <button
                onClick={() =>
                  setFilters({
                    jobType: "all",
                    experience: "all",
                    location: "all",
                  })
                }
                className="w-full btn btn-outline"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Jobs List */}
          <div className="col-span-9">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} jobs
              </p>
              <select className="p-2 border border-gray-300 rounded-md">
                <option value="relevant">Most Relevant</option>
                <option value="recent">Most Recent</option>
                <option value="salary-high">Highest Salary</option>
                <option value="salary-low">Lowest Salary</option>
              </select>
            </div>

            {/* Job Cards */}
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                onClick={() => handleJobClick(job._id)}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold text-gray-500">
                      {job.company[0]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => handleSaveJob(e, job._id)}
                    className="btn btn-outline"
                  >
                    Save Job
                  </button>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-gray-600">
                  <span>
                    🌍{" "}
                    {job.location.charAt(0).toUpperCase() +
                      job.location.slice(1)}
                  </span>
                  <span>
                    💼{" "}
                    {job.type
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                  <span>💰 {job.salary}</span>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <div className="mt-4 flex gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex gap-2">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  disabled={page === 1}
                  className="btn btn-outline px-4 py-2 disabled:bg-gray-300/100 disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .slice(Math.max(0, page - 2), Math.min(totalPages, page + 1))
                  .map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`btn px-4 py-2 ${
                        p === page ? "btn-primary" : "btn-outline"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                <button
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={page >= totalPages}
                  className="btn btn-outline px-4 py-2 disabled:bg-gray-300/100 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
