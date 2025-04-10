'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function JobsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    jobType: 'all',
    experience: 'all',
    location: 'all'
  })

  const handleJobClick = (jobId: number) => {
    router.push(`/jobs/${jobId}`)
  }

  const handleSaveJob = (e: React.MouseEvent, jobId: number) => {
    e.stopPropagation() // Prevent job card click
    // Add save job logic here
    console.log('Save job:', jobId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button - Moved outside the search header */}
      <div className="container pt-8">
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <span className="mr-2">←</span> Back to Homepage
        </button>
      </div>

      {/* Search Header */}
      <div className="bg-white border-b mt-4">
        <div className="container py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Your Next Opportunity</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="btn btn-primary">
              Search
            </button>
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
                <h3 className="text-sm font-medium text-gray-900 mb-2">Job Type</h3>
                <select
                  value={filters.jobType}
                  onChange={(e) => setFilters({...filters, jobType: e.target.value})}
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
                <h3 className="text-sm font-medium text-gray-900 mb-2">Experience Level</h3>
                <select
                  value={filters.experience}
                  onChange={(e) => setFilters({...filters, experience: e.target.value})}
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
                <h3 className="text-sm font-medium text-gray-900 mb-2">Location</h3>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({...filters, location: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="all">All Locations</option>
                  <option value="remote">Remote</option>
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <button 
                onClick={() => setFilters({ jobType: 'all', experience: 'all', location: 'all' })}
                className="w-full btn btn-outline"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Jobs List */}
          <div className="col-span-9">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">Showing 150 jobs</p>
              <select className="p-2 border border-gray-300 rounded-md">
                <option value="relevant">Most Relevant</option>
                <option value="recent">Most Recent</option>
                <option value="salary-high">Highest Salary</option>
                <option value="salary-low">Lowest Salary</option>
              </select>
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              {/* Sample Job Cards - These will be mapped from actual data */}
              {[1, 2, 3, 4, 5].map((job) => (
                <div
                  key={job}
                  onClick={() => handleJobClick(job)}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-bold text-gray-500">
                        C
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">Senior Frontend Developer</h3>
                        <p className="text-gray-600">Company Name</p>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => handleSaveJob(e, job)}
                      className="btn btn-outline"
                    >
                      Save Job
                    </button>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <span className="text-sm text-gray-600">🌍 Remote</span>
                    <span className="text-sm text-gray-600">💼 Full Time</span>
                    <span className="text-sm text-gray-600">💰 $100k - $130k</span>
                  </div>
                  <p className="mt-4 text-gray-600">
                    We are looking for an experienced Frontend Developer to join our team...
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">React</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">TypeScript</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Next.js</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex gap-2">
                <button className="btn btn-outline px-4 py-2">Previous</button>
                <button className="btn btn-primary px-4 py-2">1</button>
                <button className="btn btn-outline px-4 py-2">2</button>
                <button className="btn btn-outline px-4 py-2">3</button>
                <button className="btn btn-outline px-4 py-2">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
