import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {Analytics, useSelectedOptionInUrlParam} from '@shopify/hydrogen';
import {XoBuilder} from '@xotiny/xb-react-elements';
import invariant from 'tiny-invariant';

import {elements} from '~/config/elements';
import {product_default} from '~/data/product';
import {seoPayload} from '~/lib/seo.server';

export async function loader(args: LoaderFunctionArgs) {
  const {params, request} = args;
  const {handle} = params;

  invariant(handle, 'Missing handle param, check route filename');

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'product',
    args,
    data: product_default,
  });

  const {shopifyData} = criticalData;
  const {productDetail} = shopifyData;

  if (!productDetail) {
    throw new Response(null, {status: 404});
  }

  const seo = {
    ...seoPayload.product({
      product: productDetail,
      selectedVariant: productDetail.selectedOrFirstAvailableVariant,
      url: request.url,
    }),
    ...criticalData.metaData,
  };

  return defer({...criticalData, seo});
}

export const meta: MetaFunction<typeof loader> = (data) => {
  return XoBuilder.pageMeta(data);
};

export default function Product() {
  const {pageData, shopifyData, cssContent} = useLoaderData<typeof loader>();
  const {productDetail} = shopifyData;

  useSelectedOptionInUrlParam(
    productDetail.selectedOrFirstAvailableVariant.selectedOptions,
  );

  console.log(pageData, shopifyData);

  return (
    <>
      <XoBuilder.Layout
        isDev={process.env.NODE_ENV === 'development'}
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
              price:
                productDetail.selectedOrFirstAvailableVariant?.price.amount ||
                '0',
              vendor: productDetail.vendor,
              variantId:
                productDetail.selectedOrFirstAvailableVariant?.id || '',
              variantTitle:
                productDetail.selectedOrFirstAvailableVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </>
  );
}
