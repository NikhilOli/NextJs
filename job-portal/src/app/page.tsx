'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
     {/* Header */}
     <header>
        <div className="container header-container">
          <Link href="/" className="logo">
            <div className="logo-mark"></div>
            Job<span>Pulse</span>
          </Link>
          <nav className="nav-links">
            <Link href="/jobs" className="nav-link">Browse Jobs</Link>
            <Link href="/companies" className="nav-link">Companies</Link>
            <Link href="/resources" className="nav-link">Resources</Link>
            <Link href="/auth/sign-in" className="btn btn-outline">Sign In</Link>
            <Link href="/post-job" className="btn btn-primary">Post Job</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Find Your Dream Job</h1>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for jobs..."
            />
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="popular-tags">
            Popular:
            <a href="#" className="tag">React</a>
            <a href="#" className="tag">Node.js</a>
            <a href="#" className="tag">TypeScript</a>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <div className="container">
          <h2 className="section-title">Featured Jobs</h2>
          <div className="jobs-grid">
            {/* Job Card 1 */}
            <div className="job-card">
              <div className="company-info">
                <div className="company-logo">C</div>
                <div className="company-name">Company</div>
              </div>
              <h3 className="job-title">Senior Frontend Developer</h3>
              <div className="job-details">San Francisco, CA</div>
              <div className="job-salary">$100k - $120k</div>
            </div>

            {/* Job Card 2 */}
            <div className="job-card">
              <div className="company-info">
                <div className="company-logo">C</div>
                <div className="company-name">Company</div>
              </div>
              <h3 className="job-title">Backend Engineer</h3>
              <div className="job-details">New York, NY</div>
              <div className="job-salary">$100k - $120k</div>
            </div>

            {/* Job Card 3 */}
            <div className="job-card">
              <div className="company-info">
                <div className="company-logo">C</div>
                <div className="company-name">Company</div>
              </div>
              <h3 className="job-title">Full Stack Developer</h3>
              <div className="job-details">Remote</div>
              <div className="job-salary">$100k - $120k</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="job-categories">
        <div className="container">
          <h2 className="section-title">Job Categories</h2>
          <div className="categories-grid">
            {/* Category 1 */}
            <div className="category-card">
              <h3 className="category-title">Frontend</h3>
              <div className="category-count">(128)</div>
            </div>

            {/* Category 2 */}
            <div className="category-card">
              <h3 className="category-title">Backend</h3>
              <div className="category-count">(92)</div>
            </div>

            {/* Category 3 */}
            <div className="category-card">
              <h3 className="category-title">Full Stack</h3>
              <div className="category-count">(76)</div>
            </div>

            {/* Category 4 */}
            <div className="category-card">
              <h3 className="category-title">DevOps</h3>
              <div className="category-count">(42)</div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-links">
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Contact</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Privacy</a>
          </div>
          <div className="copyright">
            &copy; 2025 JobPulse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
