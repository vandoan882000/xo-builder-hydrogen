import {useLoaderData, useMatches, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {Analytics, getSeoMeta} from '@shopify/hydrogen';
import {XoBuilder} from '@xotiny/xb-react-elements';
import invariant from 'tiny-invariant';

import {elements} from '~/config/elements';
import {product_default} from '~/data/product';
import {seoPayload} from '~/lib/seo.server';

export async function loader(args: LoaderFunctionArgs) {
  const {params, request} = args;
  const {handle} = params;

  invariant(handle, 'Missing handle param, check route filename');

  // Start fetching non-critical data without blocking time to first byte

  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'dev',
    args,
    data: product_default,
  });

  const {shopifyData} = criticalData;
  const {productDetail} = shopifyData;

  if (!productDetail) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.product({
    product: productDetail,
    selectedVariant: productDetail.selectedVariant,
    url: request.url,
  });

  return defer({...deferredData, ...criticalData, seo});
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

  return XoBuilder.pageMeta(data).concat(
    getSeoMeta(...matches.map((match) => (match.data as any).seo)),
  );
};

export default function Product() {
  const {pageData, shopifyData, cssContent} = useLoaderData<typeof loader>();
  const {productDetail} = shopifyData;

  console.log(pageData, shopifyData);

  return (
    <>
      <XoBuilder.Layout
        isDev={true}
        elements={elements}
        page={pageData}
        shopifyData={shopifyData}
        cssContent={cssContent}
      />
      <Analytics.ProductView
        data={{
          products: [
            {
              id: productDetail.id,
              title: productDetail.title,
              price: productDetail.selectedVariant?.price.amount || '0',
              vendor: productDetail.vendor,
              variantId: productDetail.selectedVariant?.id || '',
              variantTitle: productDetail.selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </>
  );
}
