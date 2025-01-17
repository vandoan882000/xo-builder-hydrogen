import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {XoBuilder} from '@xotiny/xb-react-elements';

import {elements} from '~/config/elements';
import {home_default} from '~/data/home';
import {seoPayload} from '~/lib/seo.server';

export async function loader(args: LoaderFunctionArgs) {
  const {params, context, request} = args;
  const {language, country} = context.storefront.i18n;

  if (
    params.locale &&
    params.locale.toLowerCase() !== `${language}-${country}`.toLowerCase()
  ) {
    // If the locale URL param is defined, yet we still are on `EN-US`
    // the the locale param must be invalid, send to the 404 page
    throw new Response(null, {status: 404});
  }

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'home',
    args,
    data: home_default,
  });

  const seo = {
    ...seoPayload.home({url: request.url}),
    ...criticalData.metaData,
  };

  return defer({...criticalData, seo});
}

export const meta: MetaFunction<typeof loader> = (metaData) => {
  return XoBuilder.pageMeta(metaData);
};

export default function Homepage() {
  const {pageData, shopifyData, cssContent, metaData, seo} =
    useLoaderData<typeof loader>();

  console.log(metaData, seo);

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
