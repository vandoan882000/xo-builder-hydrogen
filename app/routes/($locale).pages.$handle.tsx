import {useLoaderData} from '@remix-run/react';
import {getSeoMeta} from '@shopify/hydrogen';
import {
  defer,
  type LoaderFunctionArgs,
  type MetaArgs,
} from '@shopify/remix-oxygen';
import {XoBuilder} from '@xotiny/xb-react-elements/index';
import invariant from 'tiny-invariant';

import {elements} from '~/config/elements';
import {routeHeaders} from '~/data/cache';
import {home_default} from '~/data/home';
import {seoPayload} from '~/lib/seo.server';

export const headers = routeHeaders;

export async function loader(args: LoaderFunctionArgs) {
  const {params, request} = args;

  invariant(params.handle, 'Missing page handle');

  // Start fetching non-critical data without blocking time to first byte

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'dev',
    args,
    data: home_default,
  });

  const {shopifyData} = criticalData;
  const {page} = shopifyData;

  if (!page) {
    throw new Response(null, {status: 404});
  }

  const seo = seoPayload.page({page, url: request.url});

  return defer({...criticalData, seo});
}

export const meta = ({matches}: MetaArgs<typeof loader>) => {
  return getSeoMeta(...matches.map((match) => (match.data as any).seo));
};

export default function Page() {
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
