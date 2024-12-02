import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {getSeoMeta} from '@shopify/hydrogen';
import {XoBuilder} from '@xotiny/xb-react-elements';

import {elements} from '~/config/elements';
import {article_default} from '~/data/article';

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'dev',
    args,
    data: article_default,
  });

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context: _}: LoaderFunctionArgs) {
  return {};
}

export const meta: MetaFunction<typeof loader> = (data) => {
  const {matches} = data;

  return [{title: 'Hydrogen | Article'}, ...XoBuilder.pageMeta(data)].concat(
    getSeoMeta(...matches.map((match) => (match.data as any).seo)),
  );
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
