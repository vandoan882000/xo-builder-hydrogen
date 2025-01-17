import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {XoBuilder} from '@xotiny/xb-react-elements';
import invariant from 'tiny-invariant';

import {elements} from '~/config/elements';
import {article_default} from '~/data/article';
import {seoPayload} from '~/lib/seo.server';

export async function loader(args: LoaderFunctionArgs) {
  const {request, params} = args;
  const {handle} = params;

  invariant(handle, 'Missing handle');

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'article',
    args,
    data: article_default,
  });

  const {shopifyData} = criticalData;
  const {articleDetail} = shopifyData;

  if (!articleDetail) {
    throw new Response(null, {status: 404});
  }

  const seo = {
    ...seoPayload.article({article: articleDetail, url: request.url}),
    ...criticalData.metaData,
  };

  return defer({...criticalData, seo});
}

export const meta: MetaFunction<typeof loader> = (data) => {
  return XoBuilder.pageMeta(data);
};

export default function Article() {
  const {pageData, shopifyData, cssContent} = useLoaderData<typeof loader>();

  console.log(pageData, shopifyData);

  return (
    <XoBuilder.Layout
      isDev={process.env.NODE_ENV === 'development'}
      elements={elements}
      page={pageData}
      shopifyData={shopifyData}
      cssContent={cssContent}
    />
  );
}
