
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
    <main className="journal-page">
      <header className="journal-header">
        <Link href="/" className="journal-logo">
          MOSC <span>Journal</span>
        </Link>

        <Link href="/" className="journal-back">
          ← All stories
        </Link>
      </header>

      <article className="article-container">
        <div className="article-heading">
          <span className="article-label">LATEST STORY</span>

          <p className="article-date">{publishedDate}</p>

          <h1>{post.title}</h1>
        </div>

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
          <Link href="/" className="journal-back">
            ← Back to all stories
          </Link>
          <p>© {new Date().getFullYear()} MOSC Journal</p>
        </footer>
      </article>
    </main>
  );
}
