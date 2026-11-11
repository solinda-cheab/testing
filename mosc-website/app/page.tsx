import Image from "next/image";
import Link from "next/link";
import { getGhostPosts } from "@/lib/ghost";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default async function Home() {
  const posts = await getGhostPosts();
  const [featuredPost, ...otherPosts] = posts;

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#202124]">
      <header className="border-b border-[#e5e2db]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <Link href="/" className="text-xl font-extrabold tracking-[-0.06em]">
            MOSC <span className="font-normal text-[#77766f]">Journal</span>
          </Link>
          <a
            href="#stories"
            className="text-sm font-medium text-[#55544f] transition hover:text-[#a14f32]"
          >
            Explore stories <span aria-hidden="true">↓</span>
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-10 sm:pb-20 sm:pt-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#a14f32]">
          A journal by MOSC
        </p>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:items-end">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Ideas, stories
            <br className="hidden sm:block" /> &amp; perspectives.
          </h1>
          <p className="max-w-md pb-1 text-base leading-7 text-[#6b6962] sm:text-lg">
            A space for the latest stories and ideas from MOSC.
          </p>
        </div>
      </section>

      <section
        id="stories"
        className="mx-auto max-w-6xl scroll-mt-8 px-6 pb-20 sm:px-10 sm:pb-28"
      >
        <div className="mb-7 flex items-end justify-between border-b border-[#d9d6ce] pb-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em]">
            Latest stories
          </h2>
          <span className="text-sm tabular-nums text-[#77766f]">
            {String(posts.length).padStart(2, "0")}{" "}
            {posts.length === 1 ? "story" : "stories"}
          </span>
        </div>

        {!featuredPost ? (
          <p className="py-12 text-[#6b6962]">
            No published stories yet. Check back soon.
          </p>
        ) : (
          <>
            <article className="grid overflow-hidden rounded-sm bg-white md:grid-cols-2">
              <Link
                href={`/posts/${featuredPost.slug}/`}
                aria-label={`Read ${featuredPost.title}`}
                className="group relative block aspect-[4/3] overflow-hidden bg-[#e8e1d7] md:aspect-auto md:min-h-[25rem]"
              >
                {featuredPost.feature_image ? (
                  <Image
                    src={featuredPost.feature_image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full min-h-64 items-center justify-center bg-[#e8e1d7] text-7xl font-semibold tracking-[-0.08em] text-[#a14f32]"
                  >
                    M.
                  </div>
                )}
              </Link>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a14f32]">
                  Featured story
                </p>
                <time
                  dateTime={featuredPost.published_at}
                  className="mb-4 text-sm text-[#77766f]"
                >
                  {formatDate(featuredPost.published_at)}
                </time>
                <h3 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
                  <Link
                    href={`/posts/${featuredPost.slug}/`}
                    className="transition hover:text-[#a14f32]"
                  >
                    {featuredPost.title}
                  </Link>
                </h3>
                {featuredPost.excerpt && (
                  <p className="mt-5 line-clamp-3 leading-7 text-[#6b6962]">
                    {featuredPost.excerpt}
                  </p>
                )}
                <Link
                  href={`/posts/${featuredPost.slug}/`}
                  className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#a14f32] pb-1 text-sm font-semibold text-[#a14f32] transition hover:gap-5"
                >
                  Read story <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            {otherPosts.length > 0 && (
              <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((post) => (
                  <li key={post.slug}>
                    <article className="flex h-full flex-col border-t border-[#d9d6ce] pt-5">
                      <time
                        dateTime={post.published_at}
                        className="text-sm text-[#77766f]"
                      >
                        {formatDate(post.published_at)}
                      </time>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em]">
                        <Link
                          href={`/posts/${post.slug}/`}
                          className="transition hover:text-[#a14f32]"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      {post.excerpt && (
                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6b6962]">
                          {post.excerpt}
                        </p>
                      )}
                      <Link
                        href={`/posts/${post.slug}/`}
                        className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[#a14f32] transition hover:gap-4"
                      >
                        Read story <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </section>

      <footer className="border-t border-[#e5e2db]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-7 text-sm text-[#77766f] sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="font-medium text-[#202124]">MOSC Journal</p>
          <p>© {new Date().getFullYear()} MOSC</p>
        </div>
      </footer>
    </main>
  );
}
