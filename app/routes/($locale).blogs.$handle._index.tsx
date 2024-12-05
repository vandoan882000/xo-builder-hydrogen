import {useLoaderData} from '@remix-run/react';
import {flattenConnection, getSeoMeta, Image} from '@shopify/hydrogen';
import {
  json,
  type LoaderFunctionArgs,
  type MetaArgs,
} from '@shopify/remix-oxygen';

import type {ArticleFragment} from 'storefrontapi.generated';
import {Grid} from '~/components/Grid';
import {Link} from '~/components/Link';
import {PageHeader, Section} from '~/components/Text';
import {routeHeaders} from '~/data/cache';
import {getImageLoadingPriority, PAGINATION_SIZE} from '~/lib/const';
import {seoPayload} from '~/lib/seo.server';

export const headers = routeHeaders;

export const loader = async ({
  request,
  context: {storefront},
  params,
}: LoaderFunctionArgs) => {
  const {handle} = params;
  const {language, country} = storefront.i18n;
  const {blog} = await storefront.query(BLOGS_QUERY, {
    variables: {
      blogHandle: handle ?? '',
      pageBy: PAGINATION_SIZE,
      language,
    },
  });

  if (!blog?.articles) {
    throw new Response('Not found', {status: 404});
  }

  const articles = flattenConnection(blog.articles).map((article) => {
    const {publishedAt} = article!;
    return {
      ...article,
      publishedAt: new Intl.DateTimeFormat(`${language}-${country}`, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(publishedAt!)),
    };
  });

  const seo = seoPayload.blog({blog, url: request.url});

  return json({articles, seo, blog, handle});
};

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export default function Journals() {
  const {articles, blog, handle} = useLoaderData<typeof loader>();

  return (
    <>
      <PageHeader heading={blog.title} />
      <Section>
        <Grid as="ol" layout="blog">
          {articles.map((article, i) => (
            <ArticleCard
              blogHandle={handle ?? ''}
              article={article}
              key={article.id}
              loading={getImageLoadingPriority(i, 2)}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}

function ArticleCard({
  blogHandle,
  article,
  loading,
}: {
  blogHandle: string;
  article: ArticleFragment;
  loading?: HTMLImageElement['loading'];
}) {
  return (
    <li key={article.id}>
      <Link to={`/blogs/${blogHandle}/${article.handle}`}>
        {article.image && (
          <div className="card-image aspect-[3/2]">
            <Image
              alt={article.image.altText || article.title}
              className="object-cover w-full"
              data={article.image}
              aspectRatio="3/2"
              loading={loading}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        )}
        <h2 className="mt-4 font-medium">{article.title}</h2>
        <span className="block mt-1">{article.publishedAt}</span>
      </Link>
    </li>
  );
}

const BLOGS_QUERY = `#graphql
query Blog(
  $language: LanguageCode
  $blogHandle: String!
  $pageBy: Int!
  $cursor: String
) @inContext(language: $language) {
  blog(handle: $blogHandle) {
    title
    seo {
      title
      description
    }
    articles(first: $pageBy, after: $cursor) {
      edges {
        node {
          ...Article
        }
      }
    }
  }
}

fragment Article on Article {
  author: authorV2 {
    name
  }
  contentHtml
  handle
  id
  image {
    id
    altText
    url
    width
    height
  }
  publishedAt
  title
}
`;
