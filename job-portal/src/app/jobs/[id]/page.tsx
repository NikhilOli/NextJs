'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isApplying, setIsApplying] = useState(false)

  const handleSaveJob = (e: React.MouseEvent) => {
    e.preventDefault()
    // Add save job logic here
    console.log('Save job:', params.id)
  }

  const handleShare = (platform: string) => {
    // Add share logic here
    console.log('Share on:', platform)
  }

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault()
    // Add application submission logic here
    console.log('Submit application for job:', params.id)
    setIsApplying(false)
  }

  // Sample job data - will be replaced with API data
  const job = {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: '🌍 Remote',
    type: '💼 Full Time',
    salary: '💰 $100k - $130k',
    experience: '5+ years',
    posted: '2 days ago',
    description: `We are seeking an experienced Frontend Developer to join our dynamic team. The ideal candidate will have a strong foundation in modern web technologies and a passion for creating exceptional user experiences.

Key Responsibilities:
• Develop and maintain responsive web applications
• Collaborate with designers and backend developers
• Optimize applications for maximum performance
• Write clean, maintainable, and efficient code

Requirements:
• 5+ years of experience in frontend development
• Expert knowledge of React.js and Next.js
• Strong proficiency in TypeScript
• Experience with state management (Redux, Context API)
• Understanding of SEO principles and performance optimization`,
    skills: ['React', 'TypeScript', 'Next.js', 'Redux', 'CSS', 'Git'],
    benefits: [
      '🏥 Health Insurance',
      '💻 Remote Work',
      '📚 Learning Budget',
      '🏖️ Unlimited PTO'
    ]
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
                    <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                    <p className="text-lg text-gray-600">{job.company}</p>
                    <div className="mt-2 flex flex-wrap gap-4">
                      <span className="text-gray-600">{job.location}</span>
                      <span className="text-gray-600">{job.type}</span>
                      <span className="text-gray-600">{job.salary}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleSaveJob}
                  className="btn btn-outline"
                >
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
                  <p className="font-medium">Full Time</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Salary Range</p>
                  <p className="font-medium">$100k - $130k</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Posted</p>
                  <p className="font-medium">{job.posted}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                <div className="prose max-w-none">
                  {job.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Benefits</h2>
                <div className="grid grid-cols-2 gap-4">
                  {job.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-gray-600">
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
              <h2 className="text-xl font-semibold mb-6">Apply for this position</h2>
              
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
                    onClick={() => handleShare('linkedin')}
                    className="btn btn-outline flex-1"
                  >
                    LinkedIn
                  </button>
                  <button 
                    onClick={() => handleShare('twitter')}
                    className="btn btn-outline flex-1"
                  >
                    Twitter
                  </button>
                  <button 
                    onClick={() => handleShare('email')}
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
  )
}
