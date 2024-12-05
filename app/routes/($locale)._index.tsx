import {useLoaderData, type MetaFunction} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@remix-run/server-runtime';
import {defer} from '@remix-run/server-runtime';
import {getSeoMeta} from '@shopify/hydrogen';
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

  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await XoBuilder.loadPageData({
    pageType: 'dev',
    args,
    data: home_default,
  });

  const seo = seoPayload.home({url: request.url});

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

  return [{title: 'Hydrogen | Home'}, ...XoBuilder.pageMeta(data)].concat(
    getSeoMeta(...matches.map((match) => (match.data as any).seo)),
  );
};

export default function Homepage() {
  const {pageData, shopifyData, cssContent} = useLoaderData<typeof loader>();

  console.log(pageData, shopifyData);

  return (
    <XoBuilder.Layout
      isDev={true}
      elements={elements}
      page={pageData}
      shopifyData={shopifyData}
      cssContent={cssContent}
    />
  );
}
