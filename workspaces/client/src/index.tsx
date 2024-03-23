import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

const AdminApp = React.lazy(() => import('@wsh-2024/admin/src/index'));
const ClientApp = React.lazy(() => import('@wsh-2024/app/src/index'));

import { registerServiceWorker } from './utils/registerServiceWorker';

const main = async () => {
  // window.addEventListener('load', () => {
  //   registerServiceWorker();
  // });
  await registerServiceWorker();

  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    if (window.location.pathname.startsWith('/admin')) {
      ReactDOM.createRoot(rootElement!).render(<AdminApp />);
    } else {
      ReactDOM.hydrateRoot(
        rootElement!,
        <SWRConfig value={{ revalidateIfStale: false, revalidateOnFocus: false, revalidateOnReconnect: false }}>
          <BrowserRouter>
            <ClientApp />
          </BrowserRouter>
        </SWRConfig>,
      );
    }
  });
};

main().catch(console.error);
