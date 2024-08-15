import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getPageByUri } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { url } from "inspector";


export default function Index({ allPosts: { edges }, preview, pageContent}) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {pageContent && (
          <div>
            <h2>{pageContent.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
            {pageContent.featuredImage && (
              <img src={pageContent.featuredImage.node.sourceUrl} alt={pageContent.title} />
            )}
          </div>
        )}
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const uri = '/';
  const allPosts = await getAllPostsForHome(preview);
  const pageContent = await getPageByUri(uri)

  return {
    props: { allPosts, pageContent, preview },
    revalidate: 10,
  };
};
