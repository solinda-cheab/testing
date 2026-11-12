import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGhostPost, getGhostPosts } from "@/lib/ghost";

export async function generateStaticParams() {
  const posts = await getGhostPosts();

  if (posts.length === 0) {
    throw new Error(
      "Ghost has no published posts. Publish at least one post before building the static site.",
    );
  }

  return posts.map(({ slug }) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getGhostPost(slug);

  if (!post) notFound();

  const publishedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(post.published_at));

  return (
    <article className="article-container">
      <header className="article-heading">
        <Link
          href="/blog"
          className="article-label"
        >
          Blog
        </Link>

        <time dateTime={post.published_at} className="article-date">
          {publishedDate}
        </time>

        <h1>{post.title}</h1>
      </header>

      {post.feature_image && (
        <div className="article-cover">
          <Image
            src={post.feature_image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      )}

      {post.html && (
        <div
          className="ghost-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      )}

      <footer className="article-footer">
        <Link href="/blog" className="text-sm text-[#77766f] hover:text-[#a14f32] transition-colors">
          ← Back to all stories
        </Link>
        <p className="text-sm text-[#77766f]">© {new Date().getFullYear()} MOSC Cambodia</p>
      </footer>
    </article>
  );
}