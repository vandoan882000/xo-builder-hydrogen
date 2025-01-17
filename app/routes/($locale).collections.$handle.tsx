import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {Analytics} from '@shopify/hydrogen';
import {XoBuilder} from '@xotiny/xb-react-elements';
import invariant from 'tiny-invariant';

import {elements} from '~/config/elements';
import {collection_default} from '~/data/collection';
import {seoPayload} from '~/lib/seo.server';

export const handle = {
  breadcrumb: 'Collection',
};

export async function loader(args: LoaderFunctionArgs) {
  const {params, request} = args;
  const {handle} = params;

  invariant(handle, 'Missing handle param');

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'collection',
    args,
    data: collection_default,
  });

  const {shopifyData} = criticalData;
  const {collectionDetail} = shopifyData;

  if (!collectionDetail) {
    throw new Response(null, {status: 404});
  }

  const seo = {
    ...seoPayload.collection({
      collection: collectionDetail.collection,
      url: request.url,
    }),
    ...criticalData.metaData,
  };

  return defer({...criticalData, seo});
}

export const meta: MetaFunction<typeof loader> = (data) => {
  return XoBuilder.pageMeta(data);
};

export default function Collection() {
  const {pageData, shopifyData, cssContent} = useLoaderData<typeof loader>();
  console.log(pageData, shopifyData);
  const {collectionDetail} = shopifyData;

  return (
    <>
      <XoBuilder.Layout
        isDev={process.env.NODE_ENV === 'development'}
        elements={elements}
        page={pageData}
        shopifyData={shopifyData}
        cssContent={cssContent}
      />
      <Analytics.CollectionView
        data={{
          collection: {
            id: collectionDetail?.collection?.id,
            handle: collectionDetail?.collection?.handle,
          },
        }}
      />
    </>
  );
}
