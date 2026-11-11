export type GhostPost = {
  title: string;
  slug: string;
  excerpt: string;
  html?: string;
  published_at: string;
  feature_image: string | null;
};

type GhostApiResponse = {
  posts: GhostPost[];
};

function getGhostConfig() {
  const url = process.env.GHOST_URL?.replace(/\/+$/, "");
  const key = process.env.GHOST_CONTENT_API_KEY;

  if (!url || !key) {
    throw new Error(
      "Set both GHOST_URL and GHOST_CONTENT_API_KEY to connect to Ghost.",
    );
  }

  return { url, key };
}

async function fetchGhostPosts(slug?: string) {
  const config = getGhostConfig();

  const query = new URLSearchParams({ key: config.key });
  if (!slug) {
    query.set("limit", "all");
    query.set("fields", "title,slug,excerpt,published_at,feature_image");
  } else {
    query.set("formats", "html");
  }
  const postPath = slug ? `slug/${encodeURIComponent(slug)}/` : "";
  const response = await fetch(
    `${config.url}/ghost/api/content/posts/${postPath}?${query}`,
  );

  if (!response.ok) {
    throw new Error(
      `Ghost Content API request failed (${response.status} ${response.statusText}).`,
    );
  }

  const data = (await response.json()) as GhostApiResponse;
  return data.posts;
}

export async function getGhostPosts() {
  const posts = await fetchGhostPosts();
  return posts.sort(
    (first, second) =>
      new Date(second.published_at).getTime() -
      new Date(first.published_at).getTime(),
  );
}

export async function getGhostPost(slug: string) {
  const posts = await fetchGhostPosts(slug);
  return posts[0] ?? null;
}
