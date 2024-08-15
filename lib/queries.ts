// store all the GraphQL Queries 
export const GET_PREVIEW_POST = `
query PreviewPost($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
    databaseId
    slug
    status
  }
}
`;


export const GET_ALL_POSTS_WITH_SLUG = `
{
  posts(first: 10000) {
    edges {
      node {
        slug
      }
    }
  }
}
`
export const GET_ALL_POSTS_FOR_HOME = `
query AllPosts {
  posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
    edges {
      node {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }
}
`

// broke down getPostAndMorePosts into 3 separate variables 

export const AUTHOR_FIELDS_FRAGMENT = `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
`;


export const POST_FIELDS_FRAGMENT = `
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export const POST_BY_SLUG_QUERY = (isRevision: boolean) => `
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
      ${isRevision ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
      ` : ""}
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
  ${AUTHOR_FIELDS_FRAGMENT}
  ${POST_FIELDS_FRAGMENT}
`;


export const GET_HOMEPAGE_BY_URI = `
query GetPageByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on ContentType {
      id
      name
    }
    ... on Page {
      id
      title
      link
      content
      template {
        templateName
      }
      featuredImage {
        node {
          id
          sourceUrl
        }
      }
    }
  }
}
`