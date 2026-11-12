import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    { name: "Dr. Sok Chanthol", role: "Executive Director", bio: "Over 20 years of experience in civil society development and governance reform in Cambodia.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Ms. Vann Sopheap", role: "Program Manager", bio: "Expert in capacity building and organizational development for grassroots CSOs across provinces.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    { name: "Mr. Heng Sovann", role: "Advocacy Coordinator", bio: "Leads policy dialogue initiatives and government engagement on civic space legislation.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
    { name: "Ms. Kim Leakhena", role: "Research & Learning Officer", bio: "Manages evidence generation, monitoring & evaluation, and knowledge sharing across programs.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  ];

  const milestones = [
    { year: "2005", title: "Foundation", description: "MOSC established as a loose network of 15 local NGOs seeking collective voice." },
    { year: "2010", title: "Formal Registration", description: "Registered as a national NGO with the Ministry of Interior, expanding to 45 members." },
    { year: "2015", title: "Strategic Shift", description: "Transitioned to a membership-based platform with structured capacity building programs." },
    { year: "2020", title: "Digital Transformation", description: "Launched online learning platform and digital tools for member organizations." },
    { year: "2024", title: "National Recognition", description: "Recognized as key civil society interlocutor in national policy dialogues." },
  ];

  return (
    <>
      <Hero
        title="About MOSC Cambodia"
        subtitle="Who We Are"
        description="MOSC is Cambodia's leading civil society platform, uniting organizations to amplify their collective voice and strengthen their capacity for lasting impact."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />

      <section id="mission" className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 id="mission-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-7 text-[#6b6962]">
                To empower civil society organizations in Cambodia through collaboration, capacity building, and advocacy — creating an enabling environment where CSOs can thrive and contribute to inclusive, sustainable development.
              </p>
              <p className="mt-4 text-lg leading-7 text-[#6b6962]">
                We envision a Cambodia where civil society is strong, independent, and effectively engages in shaping policies that affect citizens&apos; lives.
              </p>
            </div>
            <div className="p-8 bg-[#f7f6f2] rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#202124] mb-4">Core Values</h3>
              <ul className="space-y-4">
                {[
                  { value: "Integrity", desc: "We operate with transparency, accountability, and ethical standards." },
                  { value: "Inclusivity", desc: "We embrace diversity and ensure all voices are heard and valued." },
                  { value: "Collaboration", desc: "We believe in the power of collective action and partnership." },
                  { value: "Innovation", desc: "We continuously learn and adapt to better serve our members." },
                  { value: "Empowerment", desc: "We strengthen local ownership and sustainable capacity." },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <svg className="h-6 w-6 text-[#a14f32] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-[#202124]">{item.value}</h4>
                      <p className="text-sm text-[#6b6962]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-16 sm:py-24 lg:py-32 bg-[#f7f6f2]" aria-labelledby="vision-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="p-8 bg-white rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#202124] mb-4">Our Vision</h3>
              <p className="text-lg leading-7 text-[#6b6962]">
                A vibrant, resilient civil society sector in Cambodia that is recognized as an essential partner in national development — where every citizen can participate meaningfully in decisions that shape their future.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  { number: "120+", label: "Member Organizations" },
                  { number: "20", label: "Provinces Covered" },
                  { number: "500+", label: "CSOs Trained Annually" },
                  { number: "15", label: "Years of Impact" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-[#f7f6f2] rounded-xl">
                    <p className="text-3xl font-bold text-[#a14f32]">{stat.number}</p>
                    <p className="text-sm text-[#6b6962]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 id="vision-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
                Strategic Pillars
              </h2>
              <p className="mt-4 text-lg leading-7 text-[#6b6962]">
                Our work is organized around four interconnected pillars that drive systemic change:
              </p>
              <div className="mt-8 space-y-6">
                {[
                  { title: "Network & Convening", desc: "Building solidarity among CSOs through national and sub-national networks, learning exchanges, and collective action platforms." },
                  { title: "Capacity Development", desc: "Providing tailored training, mentoring, and organizational development support to strengthen institutional effectiveness." },
                  { title: "Policy Engagement", desc: "Facilitating evidence-based dialogue between civil society and government on laws, policies, and regulatory frameworks." },
                  { title: "Knowledge & Learning", desc: "Generating research, documenting good practices, and sharing knowledge to inform policy and improve practice." },
                ].map((pillar, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border border-[#e5e2db]">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#a14f32]/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#a14f32]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#202124]">{pillar.title}</h3>
                      <p className="mt-1 text-[#6b6962]">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="history-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="history-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg leading-7 text-[#6b6962]">
              Nearly two decades of strengthening civil society in Cambodia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#e5e2db] lg:left-1/2" aria-hidden="true" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex lg:grid lg:grid-cols-3 lg:gap-8 items-start">
                  <div className="lg:col-span-1 lg:order-{index % 2 === 0 ? '1' : '3'} lg:text-right lg:pr-8">
                    <div className="absolute left-8 top-4 w-4 h-4 rounded-full bg-[#a14f32] border-4 border-white lg:left-1/2 lg:-translate-x-1/2 z-10" aria-hidden="true" />
                    <div className="text-right lg:pr-0">
                      <p className="text-3xl font-bold text-[#a14f32]">{milestone.year}</p>
                      <p className="text-sm font-semibold text-[#202124] mt-1">{milestone.title}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-1 lg:col-start-2 lg:self-center text-center lg:text-left lg:px-4">
                    <p className="text-[#6b6962] leading-6">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-16 sm:py-24 lg:py-32 bg-[#f7f6f2]" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="team-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg leading-7 text-[#6b6962]">
              Dedicated professionals committed to strengthening Cambodian civil society
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
           {teamMembers.map((member) => (
  <article key={member.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#202124]">{member.name}</h3>
                  <p className="text-sm text-[#a14f32] font-medium mt-1">{member.role}</p>
                  <p className="mt-3 text-sm text-[#6b6962] leading-6">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="py-16 sm:py-24 lg:py-32 bg-white" aria-labelledby="membership-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="membership-heading" className="text-3xl font-bold tracking-[-0.02em] text-[#202124] sm:text-4xl">
              Become a Member
            </h2>
            <p className="mt-4 text-lg leading-7 text-[#6b6962]">
              Join a growing network of civil society organizations working together for greater impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { title: "Full Membership", description: "For registered Cambodian CSOs/NGOs", benefits: ["Voting rights at General Assembly", "Access to all training programs", "Policy advocacy representation", "Grant information & support", "Networking & learning events"], cta: "Apply Now", featured: true },
              { title: "Associate Membership", description: "For informal groups & emerging CSOs", benefits: ["Access to selected trainings", "Learning event participation", "Resource library access", "Newsletter & updates", "Mentoring opportunities"], cta: "Learn More", featured: false },
              { title: "Partner Membership", description: "For INGOs, donors & development partners", benefits: ["Strategic collaboration opportunities", "Co-funding & joint programming", "Policy dialogue participation", "Research & data sharing", "Visibility in MOSC network"], cta: "Contact Us", featured: false },
            ].map((tier, index) => (
              <article key={index} className={`relative p-8 rounded-2xl border ${tier.featured ? "border-[#a14f32] bg-white shadow-lg" : "border-[#e5e2db] bg-[#fafaf9]"}`}>
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#a14f32] text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-[#202124]">{tier.title}</h3>
                <p className="mt-1 text-sm text-[#6b6962]">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#6b6962]">
                      <svg className="h-5 w-5 text-[#a14f32] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.featured
                      ? "bg-[#a14f32] text-white hover:bg-[#8a432a]"
                      : "border-2 border-[#a14f32] text-[#a14f32] hover:bg-[#a14f32]/10"
                  }`}
                >
                  {tier.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-32 bg-[#a14f32]" aria-labelledby="contact-cta-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
          <h2 id="contact-cta-heading" className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl max-w-3xl mx-auto">
            Ready to Join or Learn More?
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/90 max-w-2xl mx-auto">
            Get in touch with our team to discuss membership, partnerships, or how MOSC can support your organization&apos;s mission.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#a14f32] transition-all duration-200 hover:bg-[#f7f6f2] hover:shadow-lg"
            >
              Contact Us
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Read Our Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}