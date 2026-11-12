import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f6f2] border-t border-[#e5e2db]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-extrabold tracking-[-0.06em] text-[#202124]" aria-label="MOSC Home">
              MOSC
            </Link>
            <p className="mt-4 text-sm leading-6 text-[#6b6962]">
              Building a stronger civil society in Cambodia through collaboration, capacity building, and advocacy.
            </p>
          </div>

          <nav aria-label="Footer navigation - About">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#202124]">About</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/about#mission" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Our Mission</Link></li>
              <li><Link href="/about#vision" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Our Vision</Link></li>
              <li><Link href="/about#team" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Our Team</Link></li>
              <li><Link href="/about#history" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">History</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer navigation - Resources">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#202124]">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/blog" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Blog</Link></li>
              <li><Link href="/publications" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Publications</Link></li>
              <li><Link href="/events" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Events</Link></li>
              <li><Link href="/contact" className="text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">Contact Us</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#202124]">Connect</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:info@mosccambodia.com" className="flex items-center gap-2 text-sm text-[#6b6962] transition-colors hover:text-[#a14f32]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  info@mosccambodia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e2db]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#77766f]">
              © {currentYear} MOSC Cambodia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-[#77766f] transition-colors hover:text-[#a14f32]">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-[#77766f] transition-colors hover:text-[#a14f32]">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}