import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';

// SEO
import { DefaultSeo } from 'next-seo';
import { SEO } from '@settings/next-seo.config';

// React-Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
// import { ReactQueryDevtools } from "react-query/devtools";

// Others
import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import { ManagedUIContext } from '@contexts/ui.context';
import ManagedModal from '@components/common/modal/managed-modal';
import ManagedDrawer from '@components/common/drawer/managed-drawer';

// Load Open Sans and satisfy typeface font
import '@fontsource/open-sans';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/satisfy';
// external
import 'react-toastify/dist/ReactToastify.css';
// base css file
import '@styles/tailwind.css';

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
}

const Noop: React.FC = ({ children }) => <>{children}</>;

function CustomApp({ Component, pageProps }: AppProps) {
  const queryClientRef = React.useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const router = useRouter();

  const Layout = (Component as any).Layout || Noop;
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ManagedUIContext>
            <Layout pageProps={pageProps}>
              <Head>
                <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1 maximum-scale=1'
                />
              </Head>
              {/* meta viewport fix ios input zoom issue on focus */}
              <DefaultSeo {...SEO} />
              <Component {...pageProps} key={router.route} />
              <ToastContainer />
            </Layout>
            <ManagedModal />
            <ManagedDrawer />
          </ManagedUIContext>
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default CustomApp;
