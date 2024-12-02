import {Link, useLoaderData} from '@remix-run/react';
import {getPaginationVariables, getSeoMeta} from '@shopify/hydrogen';
import type {LoaderFunctionArgs, MetaArgs} from '@shopify/remix-oxygen';
import {defer} from '@shopify/remix-oxygen';

import {Grid} from '~/components/Grid';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {PageHeader, Section} from '~/components/Text';
import {routeHeaders} from '~/data/cache';
import {getImageLoadingPriority} from '~/lib/const';

export const headers = routeHeaders;

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context, request}: LoaderFunctionArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 10,
  });

  const [{blogs}] = await Promise.all([
    context.storefront.query(BLOGS_QUERY, {
      variables: {
        ...paginationVariables,
      },
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {blogs};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  return {};
}

export default function Blogs() {
  const {blogs} = useLoaderData<typeof loader>();

  return (
    <>
      <PageHeader heading="Blogs" />
      <Section>
        <Grid as="ol" layout="blog">
          {blogs.nodes.map?.((blog, i) => (
            <BlogCard
              blogHandle={blog.handle ?? ''}
              title={blog.title}
              key={blog.handle}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}

function BlogCard({
  blogHandle,
  title,
}: {
  blogHandle: string;
  title: string;
  loading?: HTMLImageElement['loading'];
}) {
  return (
    <li key={blogHandle}>
      <Link to={`/blogs/${blogHandle}`}>
        <img
          is="xo-lazyload"
          xo-src="https://cdn.shopify.com/s/files/1/0677/7900/2622/files/Article-placeholder.svg?v=1717754370"
          loading="lazy"
          alt={title}
          width="300"
          height="300"
          xo-intrinsic-width="300"
          xo-intrinsic-height="300"
          xo-fallback-width="300"
          style={{
            aspectRatio: 3 / 2,
          }}
        />
        <h2 className="mt-4 font-medium">{title}</h2>
      </Link>
    </li>
  );
}

// NOTE: https://shopify.dev/docs/api/storefront/latest/objects/blog
const BLOGS_QUERY = `#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo {
          title
          description
        }
      }
    }
  }
` as const;
