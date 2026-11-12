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

// Sample posts keep local development and static builds usable without Ghost.
const mockPosts: GhostPost[] = [
  {
    title: "Strengthening Civil Society in Cambodia: 2024 Achievements",
    slug: "strengthening-civil-society-2024",
    excerpt: "A comprehensive review of MOSC's impact over the past year, highlighting key policy wins, capacity building successes, and network growth across 20 provinces.",
    html: "<p>A comprehensive review of MOSC's impact over the past year, highlighting key policy wins, capacity building successes, and network growth across 20 provinces.</p>",
    published_at: "2024-12-15T10:00:00.000Z",
    feature_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    title: "Digital Transformation for Grassroots Organizations",
    slug: "digital-transformation-grassroots",
    excerpt: "How MOSC's new digital platform is helping small CSOs in rural provinces manage projects, communicate with stakeholders, and access funding opportunities.",
    html: "<p>How MOSC's new digital platform is helping small CSOs in rural provinces manage projects, communicate with stakeholders, and access funding opportunities.</p>",
    published_at: "2024-11-20T10:00:00.000Z",
    feature_image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  },
  {
    title: "Policy Dialogue: New NGO Law Implications",
    slug: "policy-dialogue-ngo-law",
    excerpt: "Key takeaways from the multi-stakeholder forum on Cambodia's updated NGO legislation, featuring government officials, legal experts, and civil society leaders.",
    html: "<p>Key takeaways from the multi-stakeholder forum on Cambodia's updated NGO legislation, featuring government officials, legal experts, and civil society leaders.</p>",
    published_at: "2024-10-10T10:00:00.000Z",
    feature_image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
  },
  {
    title: "Youth Leadership Program Graduates First Cohort",
    slug: "youth-leadership-graduates",
    excerpt: "Celebrating 30 young leaders from 12 provinces who completed MOSC's intensive civic leadership and advocacy training program.",
    html: "<p>Celebrating 30 young leaders from 12 provinces who completed MOSC's intensive civic leadership and advocacy training program.</p>",
    published_at: "2024-09-05T10:00:00.000Z",
    feature_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    title: "Annual CSO Network Forum 2024: Building Resilience",
    slug: "annual-cso-forum-2024",
    excerpt: "Highlights from our largest annual gathering, where 150+ civil society representatives shared strategies for organizational sustainability and collective impact.",
    html: "<p>Highlights from our largest annual gathering, where 150+ civil society representatives shared strategies for organizational sustainability and collective impact.</p>",
    published_at: "2024-08-15T10:00:00.000Z",
    feature_image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80",
  },
  {
    title: "Research Release: Civic Space Assessment 2024",
    slug: "civic-space-assessment-2024",
    excerpt: "MOSC's latest evidence-based research on the state of civic space in Cambodia, with recommendations for policy reform and international engagement.",
    html: "<p>MOSC's latest evidence-based research on the state of civic space in Cambodia, with recommendations for policy reform and international engagement.</p>",
    published_at: "2024-07-22T10:00:00.000Z",
    feature_image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
  },
];

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
  try {
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
      {
        // Add timeout to fail fast at build time
        signal: AbortSignal.timeout(5000),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Ghost Content API request failed (${response.status} ${response.statusText}).`,
      );
    }

    const data = (await response.json()) as GhostApiResponse;
    return data.posts;
   } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Ghost API unavailable; using mock posts.", error);
      return slug ? mockPosts.filter((p) => p.slug === slug) : mockPosts;
    }
    throw error;
  }
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