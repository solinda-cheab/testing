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

export default async function BlogPage() {
  const posts = await getGhostPosts();

  return (
    <>
      <Hero
        title="Blog"
        subtitle="MOSC Cambodia"
        description="Latest news, insights, and stories from our work strengthening civil society in Cambodia."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80"
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="posts-heading">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="mb-10">
            <h2 id="posts-heading" className="sr-only">All Posts</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#77766f]">
                {posts.length} {posts.length === 1 ? "post" : "posts"} published
              </p>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <svg className="mx-auto h-12 w-12 text-[#d9d6ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-[#202124]">No posts yet</h3>
              <p className="mt-2 text-[#6b6962]">Check back soon for updates.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
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
    </>
  );
}