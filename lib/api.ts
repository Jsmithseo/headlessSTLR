import { GET_PREVIEW_POST } from "./queries";
import { GET_ALL_POSTS_WITH_SLUG } from "./queries";
import { GET_ALL_POSTS_FOR_HOME } from "./queries";
import { POST_BY_SLUG_QUERY } from "./queries";
import { GET_HOMEPAGE_BY_URI } from "./queries";
import { HOMEPAGE_IMAGE } from "./queries";
import { simpleHash } from "./utils"; // imported a new function to generate a hash 

const API_URL = process.env.WORDPRESS_API_URL;

const QUERY_MAP = {
  GET_PREVIEW_POST,
  GET_ALL_POSTS_WITH_SLUG,
  GET_ALL_POSTS_FOR_HOME,
  GET_POST_BY_SLUG: POST_BY_SLUG_QUERY,
  GET_HOMEPAGE_BY_URI,
  HOMEPAGE_IMAGE
};

const cache = {};

async function fetchAPI(queryKey: keyof typeof QUERY_MAP, variables: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const query = QUERY_MAP[queryKey];

  if (!query) {
    throw new Error('Query not found');
  }

  const queryHash = simpleHash(typeof query === 'function' ? query(variables.isRevision) : query);

  if (cache[queryHash]) {
    return cache[queryHash];
  }

  if (!API_URL) {
    throw new Error('API_URL is not defined');
  }

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query: typeof query === 'function' ? query(variables.isRevision) : query,
      variables, // Make sure variables are passed correctly
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  cache[queryHash] = json.data;
  return json.data;
}




export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    "GET_PREVIEW_POST",
    {
      variables: { id, idType },
    },
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI("GET_ALL_POSTS_WITH_SLUG");
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    "GET_ALL_POSTS_FOR_HOME",
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const query = POST_BY_SLUG_QUERY(isRevision);
  const data = await fetchAPI(
    "GET_POST_BY_SLUG",
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getPageByUri(uri: string) {
  const data = await fetchAPI("GET_HOMEPAGE_BY_URI", {
    uri ,
  });
  return data?.nodeByUri;
}

export async function getPageImage (uri) {
  const data = await fetchAPI("HOMEPAGE_IMAGE", { uri });
  return data?.nodeByUri;
}