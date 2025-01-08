import {Await, Link, useLoaderData} from '@remix-run/react';
import {getPaginationVariables, getSeoMeta} from '@shopify/hydrogen';
import type {LoaderFunctionArgs, MetaArgs} from '@shopify/remix-oxygen';
import {defer} from '@shopify/remix-oxygen';
import type {CSSProperties} from 'react';
import {Suspense} from 'react';

import {Grid} from '~/components/Grid';
import {PageHeader, Section} from '~/components/Text';
import {routeHeaders} from '~/data/cache';

export const headers = routeHeaders;

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export async function loader({context, request}: LoaderFunctionArgs) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 10,
  });

  const data = context.storefront.query(BLOGS_QUERY, {
    variables: {
      ...paginationVariables,
    },
  });

  return defer({data});
}

export default function Blogs() {
  const {data} = useLoaderData<typeof loader>();

  return (
    <>
      <PageHeader heading="Blogs" />
      <Section>
        <Suspense fallback={<>Loading</>}>
          <Await
            errorElement="There was a problem loading product variants"
            resolve={data}
          >
            {(data) => {
              return (
                <Grid as="ol" layout="blog">
                  {data.blogs.nodes.map?.((blog, i) => (
                    <BlogCard
                      blogHandle={blog.handle ?? ''}
                      title={blog.title}
                      key={blog.handle}
                    />
                  ))}
                </Grid>
              );
            }}
          </Await>
        </Suspense>
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
        <div style={{position: 'relative'}}>
          <img
            is="xo-lazyload"
            xo-src="https://cdn.shopify.com/s/files/1/0677/7900/2622/files/Article-placeholder.svg?v=1717754370"
            src="https://cdn.shopify.com/s/files/1/0677/7900/2622/files/Article-placeholder.svg?v=1717754370"
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
          <div className="xb-image__overlay xo-lazyload-overlay">
            <div
              className="xb-image__loading"
              style={
                {
                  '--xb-image-loading-background': 'rgba(0, 0, 0, 0.1)',
                } as CSSProperties
              }
            >
              <div
                className="xo-loader-1"
                style={
                  {
                    '--color': '#000',
                    '--duration': 1600,
                    '--size': 40,
                  } as CSSProperties
                }
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-4 font-medium text-primary/90">{title}</h2>
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
