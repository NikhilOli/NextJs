'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface JobFormData {
  title: string
  company: string
  location: string
  type: string
  experience: string
  salary: {
    min: string
    max: string
    currency: string
  }
  description: string
  requirements: string
  benefits: string[]
  skills: string[]
}

export default function PostJobPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<JobFormData>({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    experience: 'mid-level',
    salary: {
      min: '',
      max: '',
      currency: 'USD'
    },
    description: '',
    requirements: '',
    benefits: [],
    skills: []
  })

  const [newBenefit, setNewBenefit] = useState('')
  const [newSkill, setNewSkill] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name.startsWith('salary.')) {
      const salaryField = name.split('.')[1]
      setFormData(prev => ({
        ...prev,
        salary: {
          ...prev.salary,
          [salaryField]: value
        }
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()]
      }))
      setNewBenefit('')
    }
  }

  const removeBenefit = (index: number) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }))
  }

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }))
      setNewSkill('')
    }
  }

  const removeSkill = (index: number) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Add API call to save job posting
      console.log('Submitting job posting:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setShowSuccess(true)
      // Redirect after showing success message
      setTimeout(() => {
        router.push('/jobs')
      }, 2000)
    } catch (error) {
      setSubmitError('Failed to post job. Please try again.')
      console.error('Error posting job:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-3xl">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <span className="mr-2">←</span> Back
        </button>

        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Post a New Job</h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            <div 
              className={`flex-1 text-center border-b-2 pb-2 ${
                step >= 1 ? 'border-blue-600 text-blue-600' : 'border-gray-200'
              }`}
            >
              Basic Information
            </div>
            <div 
              className={`flex-1 text-center border-b-2 pb-2 ${
                step >= 2 ? 'border-blue-600 text-blue-600' : 'border-gray-200'
              }`}
            >
              Description & Requirements
            </div>
            <div 
              className={`flex-1 text-center border-b-2 pb-2 ${
                step >= 3 ? 'border-blue-600 text-blue-600' : 'border-gray-200'
              }`}
            >
              Skills & Benefits
            </div>
            <div 
              className={`flex-1 text-center border-b-2 pb-2 ${
                step >= 4 ? 'border-blue-600 text-blue-600' : 'border-gray-200'
              }`}
            >
              Preview & Submit
            </div>
          </div>

          {/* Form and Navigation */}
          <div>
            <form id="jobPostForm" onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Senior Frontend Developer"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Tech Solutions Inc."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Remote, New York, etc."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Type
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                        <option value="freelance">Freelance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="entry">Entry Level</option>
                      <option value="mid-level">Mid Level</option>
                      <option value="senior">Senior Level</option>
                      <option value="lead">Lead</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Salary Range
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="number"
                        name="salary.min"
                        value={formData.salary.min}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Min"
                        required
                      />
                      <input
                        type="number"
                        name="salary.max"
                        value={formData.salary.max}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Max"
                        required
                      />
                      <select
                        name="salary.currency"
                        value={formData.salary.currency}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Description & Requirements */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Job Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe the role, responsibilities, and ideal candidate..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Requirements
                    </label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="List the requirements and qualifications..."
                      required
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3: Skills & Benefits */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Required Skills
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., React.js"
                      />
                      <button
                        type="button"
                        onClick={addSkill}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                        >
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(index)}
                            className="ml-2 text-blue-500 hover:text-blue-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Benefits
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newBenefit}
                        onChange={(e) => setNewBenefit(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Health Insurance"
                      />
                      <button
                        type="button"
                        onClick={addBenefit}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"
                        >
                          {benefit}
                          <button
                            type="button"
                            onClick={() => removeBenefit(index)}
                            className="ml-2 text-green-500 hover:text-green-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Preview */}
              {step === 4 && (
                <div className="space-y-8">
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Job Title</div>
                        <div className="font-medium">{formData.title}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Company</div>
                        <div className="font-medium">{formData.company}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Location</div>
                        <div className="font-medium">{formData.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Job Type</div>
                        <div className="font-medium capitalize">{formData.type.replace('-', ' ')}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Experience Level</div>
                        <div className="font-medium capitalize">{formData.experience.replace('-', ' ')}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Salary Range</div>
                        <div className="font-medium">
                          {formData.salary.currency} {formData.salary.min} - {formData.salary.max}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold mb-4">Description & Requirements</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Job Description</div>
                        <div className="whitespace-pre-wrap">{formData.description}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Requirements</div>
                        <div className="whitespace-pre-wrap">{formData.requirements}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Skills & Benefits</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Required Skills</div>
                        <div className="flex flex-wrap gap-2">
                          {formData.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Benefits</div>
                        <div className="flex flex-wrap gap-2">
                          {formData.benefits.map((benefit, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-sm text-blue-800">
                      Please review all information carefully before submitting. Once submitted, you'll be able to edit the job posting from your dashboard.
                    </p>
                  </div>
                </div>
              )}
            </form>

            {/* Navigation Buttons - Moved outside form */}
            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn btn-outline"
                  disabled={isSubmitting}
                >
                  Previous
                </button>
              )}
              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="btn btn-primary ml-auto"
                  disabled={isSubmitting}
                >
                  Next
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    const form = document.getElementById('jobPostForm') as HTMLFormElement
                    if (form) form.requestSubmit()
                  }}
                  className="btn btn-primary ml-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Posting...' : 'Post Job'}
                </button>
              )}
            </div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-md mx-4">
                <div className="text-center">
                  <div className="mb-4 text-green-500">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Job Posted Successfully!</h3>
                  <p className="text-gray-600 mb-4">Your job listing has been created. Redirecting to jobs page...</p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
              {submitError}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
