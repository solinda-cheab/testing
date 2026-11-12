import { getGhostPosts } from "@/lib/ghost";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default async function Home() {
  const posts = await getGhostPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <Hero
        title="Building a Stronger Civil Society in Cambodia"
        subtitle="MOSC Cambodia"
        description="We empower civil society organizations through collaboration, capacity building, and advocacy to create lasting positive change for communities across Cambodia."
        primaryCta={{ label: "Learn About Us", href: "/about" }}
        secondaryCta={{ label: "Read Our Blog", href: "/blog" }}
        backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
      />

      <section className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="mission-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl lg:text-5xl">
              Our Mission & Vision
            </h2>
            <p className="mt-4 text-lg leading-7 text-[#6b6962]">
              MOSC is dedicated to strengthening civil society in Cambodia through strategic partnerships, capacity development, and evidence-based advocacy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="p-6 bg-[#f7f6f2] rounded-xl hover:bg-[#eeebe4] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#a14f32]/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#a14f32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#202124] mb-2">Collaboration</h3>
              <p className="text-[#6b6962] leading-6">Fostering partnerships between CSOs, government, and development partners to amplify collective impact.</p>
            </article>

            <article className="p-6 bg-[#f7f6f2] rounded-xl hover:bg-[#eeebe4] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#a14f32]/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#a14f32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#202124] mb-2">Capacity Building</h3>
              <p className="text-[#6b6962] leading-6">Strengthening organizational effectiveness through training, mentoring, and resource development.</p>
            </article>

            <article className="p-6 bg-[#f7f6f2] rounded-xl hover:bg-[#eeebe4] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#a14f32]/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#a14f32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#202124] mb-2">Advocacy</h3>
              <p className="text-[#6b6962] leading-6">Promoting enabling policies and legal frameworks that protect and expand civic space.</p>
            </article>

            <article className="p-6 bg-[#f7f6f2] rounded-xl hover:bg-[#eeebe4] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#a14f32]/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-[#a14f32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#202124] mb-2">Research & Learning</h3>
              <p className="text-[#6b6962] leading-6">Generating evidence and sharing knowledge to inform practice and policy decisions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-[#f7f6f2]" aria-labelledby="activities-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-6 mb-12 sm:flex-row">
            <div>
              <h2 id="activities-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
                Key Activities
              </h2>
              <p className="mt-2 text-lg leading-7 text-[#6b6962] max-w-xl">
                Our programs focus on practical solutions that strengthen civil society organizations at every level.
              </p>
            </div>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#a14f32] hover:gap-3 transition-colors whitespace-nowrap"
            >
              View All Activities
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "CSO Network Development", description: "Building and sustaining networks of civil society organizations across provinces for peer learning and collective action.", icon: "users" },
              { title: "Policy Dialogue Forums", description: "Facilitating multi-stakeholder dialogues between CSOs, government agencies, and development partners on key policy issues.", icon: "forum" },
              { title: "Organizational Assessment", description: "Providing comprehensive organizational capacity assessments and tailored development plans for member organizations.", icon: "assessment" },
              { title: "Grant Management Support", description: "Technical assistance for CSOs in proposal writing, financial management, and compliance with donor requirements.", icon: "grant" },
              { title: "Digital Transformation", description: "Supporting CSOs to adopt digital tools for program management, communication, and resource mobilization.", icon: "digital" },
              { title: "Youth Engagement Programs", description: "Empowering young leaders through leadership training, civic education, and participation in policy processes.", icon: "youth" },
            ].map((activity, index) => (
              <article key={index} className="p-6 bg-white rounded-xl border border-[#e5e2db] hover:border-[#d9d6ce] hover:shadow-md transition-all duration-200">
                <div className="w-10 h-10 rounded-lg bg-[#a14f32]/10 flex items-center justify-center mb-4">
                  <svg className="h-5 w-5 text-[#a14f32]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {activity.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                    {activity.icon === "forum" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />}
                    {activity.icon === "assessment" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {activity.icon === "grant" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                    {activity.icon === "digital" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />}
                    {activity.icon === "youth" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 15v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20v6h18v-6" />}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#202124] mb-2">{activity.title}</h3>
                <p className="text-[#6b6962] leading-6 text-sm">{activity.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="news-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-6 mb-12 sm:flex-row">
            <div>
              <h2 id="news-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
                Latest News & Stories
              </h2>
              <p className="mt-2 text-lg leading-7 text-[#6b6962] max-w-xl">
                Stay updated with our latest activities, publications, and insights from the civil society sector.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#a14f32] hover:gap-3 transition-colors whitespace-nowrap"
            >
              View All Posts
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {featuredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6b6962]">No published stories yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="flex flex-col bg-white rounded-xl border border-[#e5e2db] overflow-hidden hover:border-[#d9d6ce] hover:shadow-lg transition-all duration-300">
                  <Link href={`/posts/${post.slug}/`} className="block relative aspect-[16/10] overflow-hidden" aria-label={`Read ${post.title}`}>
                    {post.feature_image ? (
                      <Image
                        src={post.feature_image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[#e8e1d7] text-6xl font-semibold tracking-[-0.08em] text-[#a14f32]" aria-hidden="true">
                        M.
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-[#77766f] mb-3">
                      <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-[#202124] mb-2 line-clamp-2">
                      <Link href={`/posts/${post.slug}/`} className="hover:text-[#a14f32] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm leading-6 text-[#6b6962] flex-1 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/posts/${post.slug}/`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#a14f32] hover:gap-2 transition-colors mt-auto"
                    >
                      Read more
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-[#a14f32]" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Join Us in Strengthening Civil Society
          </h2>
<p className="mt-4 text-lg leading-7 text-white/90 max-w-2xl mx-auto">
            Whether you&apos;re a CSO looking for support, a partner seeking collaboration, or an individual wanting to contribute &mdash; there&apos;s a place for you in the MOSC network.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#a14f32] transition-all duration-200 hover:bg-[#f7f6f2] hover:shadow-lg"
            >
              Get in Touch
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/about#membership"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}