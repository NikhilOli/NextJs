"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { JobSeed } from "@/lib/seed-data";

export default function JobDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const [isApplying, setIsApplying] = useState(false);
  const [job, setJob] = useState<JobSeed | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!params.id) {
          setError("Job ID is missing");
          return;
        }

        const res = await fetch(`/api/jobs/${params.id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch job details");
        }

        if (data.success && data.data) {
          setJob(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch job details");
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch job details"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobDetail();
  }, [params.id]);

  const handleSaveJob = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add save job logic here
    console.log("Save job:", params.id);
  };

  const handleShare = (platform: string) => {
    // Add share logic here
    console.log("Share on:", platform);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Add application submission logic here
    console.log("Submit application for job:", params.id);
    setIsApplying(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">{error || "Job not found"}</p>
          <button
            onClick={() => router.back()}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            ← Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center gap-2"
        >
          ← Back to Jobs
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-500">
                    {job.company[0]}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      {job.title}
                    </h1>
                    <p className="text-lg text-gray-600">{job.company}</p>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <span className="text-gray-600">📍 {job.location}</span>
                      <span className="text-gray-600">🌍 {job.work_type}</span>
                      <span className="text-gray-600">💼 {job.type}</span>
                      <span className="text-gray-600">💰 {job.salary}</span>
                    </div>
                  </div>
                </div>
                <button onClick={handleSaveJob} className="btn btn-outline">
                  Save Job
                </button>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg mb-8">
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-medium">{job.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Job Type</p>
                  <p className="font-medium">{job.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Work Type</p>
                  <p className="font-medium">{job.work_type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <div className="prose max-w-none">
                  {job.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                <ul className="list-disc list-inside space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-gray-600">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200 whitespace-nowrap hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <div className="grid grid-cols-2 gap-4">
                  {job.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">
                Apply for this position
              </h2>

              {!isApplying ? (
                <button
                  onClick={() => setIsApplying(true)}
                  className="w-full btn btn-primary mb-4"
                >
                  Apply Now
                </button>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Resume
                    </label>
                    <input
                      type="file"
                      className="w-full"
                      accept=".pdf,.doc,.docx"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      PDF, DOC, DOCX (max 5MB)
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={4}
                      placeholder="Why are you interested in this position?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full btn btn-primary">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="w-full btn btn-outline"
                  >
                    Cancel
                  </button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-2">Share this job</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="btn btn-outline flex-1"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="btn btn-outline flex-1"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare("email")}
                    className="btn btn-outline flex-1"
                  >
                    Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
