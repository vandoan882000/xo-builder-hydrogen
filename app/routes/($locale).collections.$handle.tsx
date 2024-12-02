import {useLoaderData, useMatches, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {XoBuilder} from '@xotiny/xb-react-elements';
import invariant from 'tiny-invariant';

import {elements} from '~/config/elements';
import {collection_default} from '~/data/collection';

export const handle = {
  breadcrumb: 'Collection',
};

export async function loader(args: LoaderFunctionArgs) {
  const {params} = args;
  const {handle} = params;

  invariant(handle, 'Missing handle param');

  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'dev',
    args,
    data: collection_default,
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
  return [{title: 'Hydrogen | Collection'}, ...XoBuilder.pageMeta(data)];
};

export default function Collection() {
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
